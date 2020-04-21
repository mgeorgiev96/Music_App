import React,{createContext,useState,useEffect} from 'react';


export const MusicContext = createContext()

export const MusicProvider = (props)=>{

    const [music,setMusic] = useState('')
    useEffect(()=>{
        fetch('http://ws.audioscrobbler.com/2.0/?method=album.search&album=rock&api_key=f5f0426b4f05e8e433e397bfe881d04c&format=json')
.then(info=>info.json()).then(info=>setMusic(Object.values(info.results.albummatches.album)))
    },[])


    return(
        <MusicContext.Provider value = {[music,setMusic]}>
            {props.children}
        </MusicContext.Provider>
    )
}