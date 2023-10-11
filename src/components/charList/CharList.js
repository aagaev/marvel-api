import {useState, useEffect, useRef} from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';
import './charList.scss';

const CharList = (props) => {
 
    const [charList, setCharList] = useState([])
    // const [loading, setLoading] = useState(true) //первая загрука первых 9 персонажей
    // const [error, setError] = useState(false)
    const [newItemLoading, setNewItemLoading] = useState(false)//ручная загрузка потому изначально false
    const [offset, setOffset] = useState(1532)
    const [charEnded, setCharEnded] = useState(false)

    
   
    // state = {
    //     charList: [],
    //     loading: true, //первая загрука первых 9 персонажей
    //     error: false,
    //     newItemLoading: false,//ручная загрузка потому изначально false
    //     offset: 1532,
    //     charEnded: false
    // }
    
    const {error, loading, getAllCharacters, clearError} = useMarvelService();

    // componentDidMount() {
    //     this.onRequest()
    // }

    useEffect(() => { //useEffect будет запущена после рендера, то есть после того, как наша функция onRequest уже существует внутри нашего компонента-функции(сonst CharList()  )
        onRequest(offset, true); // поэтому можем спокойно использовать onRequest() выше чем она объявлена
    }, []) // если пустой массив в зависимостях значит функция выполнится один раз при создании компонента

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true); 
       
        //setNewItemLoading(true)
        getAllCharacters(offset)
            .then(onCharListLoaded)
          
        // onCharListLoading() //для первичной загрузки не важно, но в будущем когда будем вызывать по клику то состояние переключится и будем для кнопки устанавливать disabled
        // marvelService.getAllCharacters(offset)
        //     .then(onCharListLoaded)
        //     .catch(onError)
    }

    // onCharListLoading = () => {
    //     this.setState({
    //         newItemLoading: true
    //     })
    // }

    // const onCharListLoading = () => {
    //     setNewItemLoading(true)
    // }

    // onCharListLoaded = (newCharList) => {
    //     let ended = false;
    //     if(newCharList.length < 9) {
    //         ended = true;
    //     }
    //     this.setState(({charList, offset}) => ({
    //             charList: [...charList, ...newCharList],//в первый раз когда компонент отрендерился charlist будет пустой массив
    //             loading: false,
    //             newItemLoading: false,
    //             offset: offset + 9,
    //             charEnded: ended 
    //         }))        
    // }

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if(newCharList.length < 9) {
            ended = true;
        }

        setCharList(charList => [...charList, ...newCharList])
        //setLoading(loading => false) //Аргумент(колбэк-функцию) необязательно передавать, он не используется
        setNewItemLoading(newItemLoading => false)
        setOffset(offset => offset +9)
        setCharEnded(charEnded => ended)
    }

    // const onError = () => {
    //     setError(true);
    //     setLoading(loading => false)
    // }

    // onError = () => {
    //     this.setState({
    //         error: true,
    //         loading: false
    //     })
    // }

    // itemRefs = [];
    const itemRefs = useRef([]);

    // setRef = (ref) => {
    //     this.itemRefs.push(ref)
    // }
    
    // focusOnItem = (i) => {
    //     console.log(i)
    //     this.itemRefs.forEach(item => item.classList.remove('char__item_selected'))
    //     this.itemRefs[i].classList.add('char__item_selected');
    //     this.itemRefs[i].focus();
    // }

    const focusOnItem = (i) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'))
        itemRefs.current[i].classList.add('char__item_selected');
        itemRefs.current[i].focus();
        //при использовании useRef([]) это будет уже объект у которого у будет свойство current и мы должны его использовать
        //itemRefs это уже массив, внутри свойства current, где каждый элемент этого массива это ссылка на дом-элемент 
    }

    function renderItems(arr) {
        const {onCharSelected} = props;
        const items =  arr.map((item, i) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            
            return (
                <li 
                    className="char__item"
                    tabIndex={0}
                    // ref={this.setRef}
                    ref={elem => itemRefs.current[i] = elem} // сюда будет помещен кол-бэкРэф, который принимает в себя единственный аргумент - тот элемент на котором он был вызван(<li></li>). elem это ссылка на дом-элемент, и соотвественно в массиве itemRefs.current будет сформирован массив ссылок на дом-элементы
                    key={item.id}
                    onClick={() => {
                        onCharSelected(item.id);
                        focusOnItem(i)
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            props.onCharSelected(item.id);
                            focusOnItem(i);
                        }
                    }}>
                  
                        <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                        <div className="char__name">{item.name}</div>
                </li>
            )
        });
        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    //const {charList, loading, error, offset, newItemLoading, charEnded} = this.state;
    
    const items = renderItems(charList);
   
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;
   // const content = !(loading || error) ? items : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {items}
            <button className="button button__main button__long"
                disabled={newItemLoading}
                onClick={() => onRequest(offset)}
                style={{'display': charEnded ? 'none' : 'block'}}>
                    <div className="inner">load more</div>
            </button>
        </div>
    )
}

 

// const CharItems = ({chars}) => {
//     return (
//         chars.map(({name, thumbnail}) => {
//             let imgStyle = {'objectFit': 'cover'};
//             if (thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
//                 imgStyle = {'objectFit': 'contain'}
//             }
//             return (
    
//                 <li key={name} className="char__item">
//                     <img style={imgStyle} src={thumbnail} alt="abyss"/>
//                     <div className="char__name">{name}</div>
//                 </li>
//             )
//         })
    
//     )
   
// }

// CharList.propTypes = {
//     onCharSelected: PropTypes.func.isRequired
// }

export default CharList;