
class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=1d72cee4813314a40e4eb983489bd6b7';
    _baseOffset = 0;
    getResource = async (url) => {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status - ${res.status}`)
        }

        return await res.json()
    }

    getAllCharacters = async (offset = this._baseOffset) => {
        console.log(offset)
        //return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        const res =  await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
       // console.log(res)
        return res.data.results.map(this._transformCharacter)// передаем в map callback функцию которая будет трансформировать приходящие к ней элементы(айтемы). То есть будет переходить в методе map каждый отдельный объект по порядку  и уже будет возвращаться новый объект, а в конце получим новый массив с объектами 
        //return res.data.results.map(item => this._transformCharacter(item))
    }

    getCharacter = async (id) => {
        //return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0])
    }

    noDescriptionMessage = (str) => str ? `${str.slice(0, 60)}...`  : str = 'Sorry but there is no description for this character. Please check Wiki page';
    //onDecreasearr = (arr) => arr.length < 10 ? arr : arr.slice(0, 9);

    _transformCharacter = (char) => {
        return { 
            id: char.id,
            name: char.name,
            description: this.noDescriptionMessage(char.description),
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

}

export default MarvelService;