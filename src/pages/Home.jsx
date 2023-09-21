import clsx from "clsx";
import React, { useState } from 'react';


function Home() {
    return (
        <div className={"bg-slate-950 grid place-content-center min-h-screen"}>
            <div className={"container"}>
                <img src={"https://i.kym-cdn.com/photos/images/newsfeed/002/652/460/d70.jpg"} alt={"шайлушай"} style={{width : 200}}/>
                <h1 className={'text-white font-medium text-2xl mt-5 text-center'}>шайлушай</h1>
            </div>
        </div>
    )
}

export default Home;