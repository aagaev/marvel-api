import { useCallback, useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './comicsList.scss';
import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';
import { render } from 'react-dom';

const ComicsList = () => {

    const {loading, error, clearError, getAllComics} = useMarvelService();

    const [comicsList, setComicsList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false)//ручная загрузка потому изначально false
    const [offset, setOffset] = useState(0)
    const [comicsEnded, setComicsEnded] = useState(false)

    useEffect(() => { //useEffect будет запущена после рендера, то есть после того, как наша функция onRequest уже существует внутри нашего компонента-функции(сonst CharList()  )
        onRequest(offset, true); // поэтому можем спокойно использовать onRequest() выше чем она объявлена
    }, []) // если пустой массив в зависимостях значит функция выполнится один раз при создании компонента

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true); 
       
        getAllComics(offset)
            .then(onComicsListLoaded)
    }

    const onComicsListLoaded = (newComicsList) => {
        let ended = false;
        if(newComicsList.length < 8) {
            ended = true;
        }

        setComicsList(comicsList => [...comicsList, ...newComicsList])
        //setLoading(loading => false) //Аргумент(колбэк-функцию) необязательно передавать, он не используется
        setNewItemLoading(newItemLoading => false)
        setOffset(offset => offset + 8)
        setComicsEnded(comicsEnded => ended)
    }
    function renderItems (arr) {
        const items = arr.map((item, i)=> {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            return (
                <li className="comics__item"
                    key = {i}>
                        <a href={'#'}>
                            <img src={item.thumbnail} alt={item.title} style={imgStyle} className="comics__item-img"/>
                            <div className="comics__item-name">{item.title}</div>
                            <div className="comics__item-price">{item.price}</div>
                        </a>
                </li>
            )
        }) 
        return ( 
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }
    const items = renderItems(comicsList)
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;
    //const content = !(error || loading) ? items : null; if we dont want reload every time

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {items}
            <button onClick={() => onRequest(offset)} 
                className="button button__main button__long" 
                style={{'display' : comicsEnded ? 'none' : 'block'}}
                disabled={newItemLoading}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}


export default ComicsList;