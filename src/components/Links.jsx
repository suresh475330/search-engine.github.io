import React from 'react';
import {NavLink,Link} from 'react-router-dom';


let links = [
    {url: '/', text: '🏠 HOME'},
    {url: '/search', text: '🔎 All'},
    {url: '/image', text: '📷 IMAGES'},
    {url: '/news', text: '📰 NEWS'},
    {url: '/videos', text: '📺 VIDEOS'},
]

export let Links = ()=>{
    return(
        <div className='flex sm:justify-around justify-between item=center mt-4'>
            {links.map(({url,text})=>(
               <NavLink to={url} className='text-blue-700 dark:text-blue-300 m-2 mb-0 hover:underline '>
                   {text}
               </NavLink>
            ))}
        </div>
    )
}