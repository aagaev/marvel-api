import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png'

class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.updateChar()
      
    }  
    state = {
        char: {}
    }

    marvelService = new MarvelService();

    onChatLoaded = (char) => {
        this.setState({char})
        console.log(char)
    }

    updateChar = () => {
        const max = 1011400,
              min = 1011000,
             id = Math.floor(Math.random()*(max-min) + min);
        
        this.marvelService
            .getCharacter(id)
            .then(this.onChatLoaded) //когда мы используем промисы, цепочка через then идет, в функцию then приходит аргумент и когда внутри просто ссылка на функцию, то этот аргумент приходящий в then будет автоматически будет подставляться в метод this.onChatLoaded и затем запишеться внутрь стейта
            // .then(res => {
            //     this.setState(res)
            // })
            console.log(id)
    } 
    
    render() {
     
        const {char: {name, description, thumbnail, homepage, wiki}} = this.state;
        return (
            <div className="randomchar">
                <div className="randomchar__block">
                    <img src={thumbnail} alt="Random character" className="randomchar__img"/>
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
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main">
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }
}

export default RandomChar;