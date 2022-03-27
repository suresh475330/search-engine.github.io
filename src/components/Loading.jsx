import React from 'react';
// import {TailSpin} from "react-loader-spinner";
// import {ThreeCircles} from "react-loader-spinner";
// import {ThreeDots} from "react-loader-spinner";
import {Puff} from "react-loader-spinner";

export const Loading = ()=>{
    return(
        <div className='flex justify-center items-center'>
            {/* <TailSpin type='puff' color='#00BFFF' height={550} width={80}/> */}
            {/* <ThreeDots type='puff' color='#00BFFF' height={550} width={80}/> */}
            {/* <ThreeCircles type='puff' color='#00BFFF' height={550} width={80}/> */}
            <Puff color='#00BFFF' height={550} width={80}/>
        </div>
    )
}