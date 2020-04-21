import React,{useContext} from 'react'
import {MusicContext} from './Context';

function Filter() {

    const[music,setMusic] = useContext(MusicContext);

    const searchStyle = ()=>{
        let container = document.querySelector('.container')
        let filter = document.querySelector('.filter').value

        if(filter.length> 0){
            for(let i=0;i<container.children.length;i++){
                container.children[i].style.display='none'
            }
            fetch('http://ws.audioscrobbler.com/2.0/?method=album.search&album='+filter+'&api_key=f5f0426b4f05e8e433e397bfe881d04c&format=json')
        .then(info=>info.json()).then(info=>setMusic(Object.values(info.results.albummatches.album)))
        }
        

        console.log(music)


        
}
    return (
        <div className='filter_container'>
            <div>
                <span className='box1'></span>
                <span className='box2'></span>
                <span className='box3'></span>
                <span className='box4'></span>
                <input className='filter'></input></div>
            <i className='fa fa-search' onClick={searchStyle}></i>
        </div>
    )
}

export default Filter;
