import {Component} from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';
import './charList.scss';

class CharList extends Component {

    state = {
        charList: [],
        loading: true, //первая загрука первых 9 персонажей
        error: false,
        newItemLoading: false,//ручная загрузка потому изначально false
        offset: 1541,
        charEnded: false
    }
    
    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest()
    }

    onRequest = (offset) => {
  
        this.onCharListLoading() //для первичной загрузки не важно, но в будущем когда будем вызывать по клику то состояние переключится и будем для кнопки устанавливать disabled
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onCharListLoaded = (newCharList) => {
        let ended = false;
        if(newCharList.length < 9) {
            ended = true;
        }
        this.setState(({charList, offset}) => ({
                charList: [...charList, ...newCharList],//в первый раз когда компонент отрендерился charlist будет пустой массив
                loading: false,
                newItemLoading: false,
                offset: offset + 9,
                charEnded: ended 
            })) 
                 
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    itemRefs = [];

    setRef = (ref) => {
        this.itemRefs.push(ref)
    }
    
    focusOnItem = (i) => {
        console.log(this.itemRefs)
        this.itemRefs.forEach(item => item.classList.remove('char__item_selected'))
        this.itemRefs[i].classList.add('char__item_selected');
        this.itemRefs[i].focus();

    }

    renderItems(arr) {
        const {onCharSelected} = this.props;
        const items =  arr.map((item, i) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            
            return (
                <li 
                    className="char__item"
                    tabIndex={0}
                    ref={this.setRef}
                    key={item.id}
                    onClick={() => {
                        onCharSelected(item.id);
                        this.focusOnItem(i)
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            this.props.onCharSelected(item.id);
                            this.focusOnItem(i);
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
 
    render() {
        console.log(this.state.offset)
        const {charList, loading, error, offset, newItemLoading, charEnded} = this.state;
        
        const items = this.renderItems(charList);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button className="button button__main button__long"
                disabled={newItemLoading}
                onClick={() => this.onRequest(offset)}
                style={{'display': charEnded ? 'none' : 'block'}}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
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