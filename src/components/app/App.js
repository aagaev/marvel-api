
import { lazy, Suspense } from 'react';
import {BrowserRouter as Router,  Route, Routes} from 'react-router-dom';

import { ComicsPage, SingleComicPage } from '../pages';//именнованный import из index.js
import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';



//import Page404 from '../pages/404' //для React.Lazy нам нужен именно дэфолтный экспорт из самого файла, а не именнованный из index.js
//динамические импорты должны импортироваться после статических


const Page404 = lazy(() => import('../pages/404'))
const MainPage = lazy(() => import('../pages/MainPage'))
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));
const SinglePage = lazy(() => import('../pages/SinglePage'));
// const ComicsPage = lazy(() => import('../pages/ComicsPage'))
// const SingleComicPage = lazy(() => import('../pages/SingleComicPage'))
 
const App = () =>  {
 
    return (
        <Router>
            <div className="app">
            <AppHeader/>
            <main> 
                <Suspense fallback={<Spinner/>}> 
                    <Routes>
                        <Route path='/' element={ <MainPage/>}/>
                        <Route path='/comics' element={ <ComicsPage/>}/> 
                        <Route path='/characters/:id' element={ <SinglePage Component={SingleCharacterLayout} dataType='character'/>}/>  
                        <Route path='/comics/:id' element={ <SinglePage Component={SingleComicLayout} dataType='comic'/>}/>   
                        <Route path='*' element={<Page404/>}/>   
                    </Routes>
                </Suspense>
            </main>
        </div>
        </Router>
    )
    
}

export default App;