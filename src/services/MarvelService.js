import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {

    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=1d72cee4813314a40e4eb983489bd6b7';
    const _baseOffset = 1541;

    // getResource = async (url) => {
    //     const res = await fetch(url);

    //     if(!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status - ${res.status}`)
    //     }

    //     return await res.json()
    // }

    const getAllCharacters = async (offset = _baseOffset) => {
        console.log(offset)
        //return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        const res =  await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
       // console.log(res)
        return res.data.results.map(_transformCharacter)// передаем в map callback функцию которая будет трансформировать приходящие к ней элементы(айтемы). То есть будет переходить в методе map каждый отдельный объект по порядку  и уже будет возвращаться новый объект, а в конце получим новый массив с объектами 
        //return res.data.results.map(item => this._transformCharacter(item))
    }

    // Вариант модификации готового метода для поиска по имени.
	// Вызывать его можно вот так: getAllCharacters(null, name)

	// const getAllCharacters = async (offset = _baseOffset, name = '') => {
	//     const res = await request(`${_apiBase}characters?limit=9&offset=${offset}${name ? `&name=${name}` : '' }&${_apiKey}`);
	//     return res.data.results.map(_transformCharacter);
	// }

	// Или можно создать отдельный метод для поиска по имени

	const getCharacterByName = async (name) => {
		const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
		return res.data.results.map(_transformCharacter);
	};

    const getCharacter = async (id) => {
        //return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0])
    }

    const getAllComics = async (offset = 0) => {
        const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics)
    }

 
    const getComic = async (id) => {
		const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
		return _transformComics(res.data.results[0]);
	};
    const noDescriptionMessage = (str) => str ? `${str.slice(0, 60)}...`  : str = 'Sorry but there is no description for this character. Please check Wiki page';
    //onDecreasearr = (arr) => arr.length < 10 ? arr : arr.slice(0, 9);

    const _transformCharacter = (char) => {
        return { 
            id: char.id,
            name: char.name,
            description: noDescriptionMessage(char.description),
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    const _transformComics = (comics) => {
		return {
			id: comics.id,
			title: comics.title,
			description: comics.description || "There is no description",
			pageCount: comics.pageCount
				? `${comics.pageCount} p.`
				: "No information about the number of pages",
			thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
			language: comics.textObjects[0]?.language || "en-us",
			// optional chaining operator
			price: comics.prices[0].price
				? `${comics.prices[0].price}$`
				: "not available",
		};
	};

    //return {loading, error, clearError, getAllCharacters, getCharacter,  getComics, getAllComics }
    return {
        loading, 
        error, 
        clearError, 
        getAllCharacters, 
        getCharacter,
        getCharacterByName,
        getComic,
        getAllComics
     }

}

export default useMarvelService;



