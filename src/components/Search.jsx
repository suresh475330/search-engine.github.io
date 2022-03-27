import React,{useEffect,useState} from 'react';
import {Links} from './Links'
import { useDebounce } from 'use-debounce';
import { useStateContext } from '../contexts/StateContextProvider';
import { useNavigate } from 'react-router-dom';

export let Search = ()=>{

    const [text,setText] = useState('');
    const {setsearchTerm} = useStateContext();
    const [debouncedValue] = useDebounce(text,300);
    let Navigate = useNavigate()

    useEffect(()=>{
      if(debouncedValue){
        return setsearchTerm(debouncedValue),
         Navigate('/search')
      }
    },[debouncedValue])

    return(
        <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
            <input 
                value={text}
                type='text'
                className='sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
                placeholder='search google or type URL'
                onChange={(e)=> setText(e.target.value)}
            />
            {text && (
                <button type='button' className='absolute top-1.5 right-8 text-2xl text-gray-500' onClick={()=>setText('')}>
                    X
                </button>
            )}
            <Links />
        </div>
    )
}