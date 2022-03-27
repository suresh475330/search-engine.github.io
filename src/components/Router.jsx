import React from "react";
import {Routes,Route,Navigate} from 'react-router-dom'
import {Results} from './Results';
import {Home} from './Home';

export let Router = ()=>{
    return(
        <div className="p-4">
           <Routes>
               <Route exact path="/" element={<Home />}/>
               <Route exact path="/search" element={<Results/>} />
               <Route exact path="/image" element={<Results/>} />
               <Route exact path="/news" element={<Results/>} />
               <Route exact path="/videos" element={<Results/>} />
               <Route exact path="*" element={<Navigate to="/" replace />}/>
           </Routes>
        </div>
        
    )
} 