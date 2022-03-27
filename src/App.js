import React,{useState} from 'react';
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import {Router} from "./components/Router";

let App = ()=>{
    let [darkTheme,setdarkTheme] = useState(false);
    return(
        <div className={darkTheme ? 'dark' : ''}>
        <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
           <Navbar darkTheme={darkTheme} setdarkTheme={setdarkTheme}/>
           <Router/>
           <Footer/>
        </div>
        </div>
    )
}

export default App;

