import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage.js';
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png'

class RandomChar extends Component {
   
    state = {
        char: {},
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
        //this.timerId = setInterval(this.updateChar, 6000);
    
    }

    componentWillUnmount() {
        //clearInterval(this.timerId)
        
    }

     onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onCharLoaded = (char) => {
        this.setState({
            char, //char: char
            loading: false
        }) 
        //console.log(char)
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        }) 
    }

    updateChar = () => {
        this.onCharLoading();
        const max = 1011400,
              min = 1011000,
             id = Math.floor(Math.random()*(max-min) + min);
        
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded) //когда мы используем промисы, цепочка через then идет, в функцию then приходит аргумент и когда внутри просто ссылка на функцию, то этот аргумент приходящий в then будет автоматически будет подставляться в метод this.onChatLoaded и затем запишеться внутрь стейта
            .catch(this.onError)
            // .then(res => {
            //     this.setState(res)
            // })
           // console.log(id)
    } 
    
    
    render() {
    
        const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(error || loading) ? <View char={char}/> : null;
        //

        return (
            <div className="randomchar">
                {errorMessage}
                {spinner}
                {content}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>  
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main" onClick={this.updateChar}>
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki} = char;
    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }

    return (
        <div className="randomchar__block">
            <img src={thumbnail} alt="Random character" className="randomchar__img" style={imgStyle}/>
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {description}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;