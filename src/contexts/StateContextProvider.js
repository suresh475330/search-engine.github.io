import React,{createContext,useContext,useState} from 'react';

let StateContext = createContext();
let baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const StateContextProvider = ({children})=>{
    const [results,setResults] = useState([]);
    const [isLoading,setisLoading] = useState(false);
    const [searchTerm,setsearchTerm] = useState('');

    // /videos, /search, /images
    const getResults = async(type)=>{
       setisLoading(true);

       const resopnce = await fetch(`${baseUrl}${type}`,{
           method:'GET',
           headers: {
            'X-User-Agent': 'desktop',
            'X-Proxy-Location': 'EU',
            'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          }
       })
       const data = await resopnce.json();

       if(type.includes('/news')){
           setResults(data.entries);
       } else if(type.includes('/image')){
           setResults(data.image_results);
       } else {
           setResults(data.results);
       }


       setisLoading(false);
    }

    return(
        <StateContext.Provider value={{getResults,results,searchTerm,setsearchTerm,isLoading}}>
              {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ()=> useContext(StateContext);