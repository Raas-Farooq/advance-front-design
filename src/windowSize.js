import {useState, useEffect} from 'react';

function WindowSizing(){
    const [windowSize, setWindowSize] =useState({
        height:window.innerHeight,
        width:window.innerWidth
    })

    useEffect(() => {
        function manageSize(){
            setWindowSize({
                height:window.innerHeight,
                width:window.innerWidth
            })
        }

        window.addEventListener('resize', manageSize);

        return(() => {
            window.removeEventListener('resize', manageSize)
        })    
    })

    return windowSize
}

export default WindowSizing