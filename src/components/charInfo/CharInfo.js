import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';
import Skeleton from '../skeleton/Skeleton';
import './charInfo.scss';



const CharInfo = (props) => {
    // state = {
    //     char: null,
    //     loading: false,
    //     error: false
    // }

    const [char, setChar] = useState(null) // for skeleton appearing&& first page loading
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)
    
    const {loading, error, getCharacter, clearError}= useMarvelService();

    // componentDidMount() {
    //     this.updateChar();
    // }

    useEffect(() => {
        updateChar()
    }, [props.charId])

    // componentDidUpdate(prevProps) {
    //     if (this.props.charId !== prevProps.charId) {
    //         this.updateChar();
    //     }
    // }

    const updateChar = () => {
        const {charId} = props
        if(!charId) {//for skeleton appearing&& first page loading
            return //or return null
        }

        // this.onCharLoading();
        // this.marvelService
        //     .getCharacter(charId)
        //     .then(this.onCharLoaded)
        //     .catch(this.onError)
        //onCharLoading();
        clearError()//очищает от ошибки даже если в прошлом запросе она была, то в следующем запросе она очистится перед новым запросом0
        getCharacter(charId)
            .then(onCharLoaded)
            
    }

    // const onCharLoading = () => {
    //     setLoading(loading => true)
    //     // this.setState({
    //     //     loading: true
    //     // })
    // }

    const onCharLoaded = (char) => {
        setChar(char)
        //setLoading(loading => false)
        // this.setState({
        //     char, //char: char
        //     loading: false
        // }) 

    }

    // const onError = () => {
    //     setLoading(loading => false)
    //     setError(error => true)
    //     // this.setState({
    //     //     loading: false,
    //     //     error: true
    //     // }) 
    // }

   
    //const {char, loading, error,} = this.state;
    const skeleton = char || loading || error ? null  : <Skeleton/>;
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(error || loading || !char) ? <View char={char}/> : null;
        return (
            <div className="char__info">
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
   
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;

    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }
    //console.log(comics)
    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={imgStyle}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length === 0 ? 'There is no comics' : null}
                {
                    comics.map((item, i) => {
                        if (i > 10) return
                        return (
                            <li key={i} className="char__comics-item">
                                {item.name}
                            </li>
                        )
                    })
                }
                
            </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}   
export default CharInfo;