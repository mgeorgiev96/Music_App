import React,{useContext, useEffect} from 'react'
import {MusicContext} from './Context';


function MusicList() {

    const [music,setMusic]= useContext(MusicContext)
    for(let i=0;i<music.length;i++){
        let container = document.querySelector('.container')
        let item = document.createElement('div')
        item.classList.add('item_container')
        container.appendChild(item)
        let h2 = document.createElement('h2')
        let h3 = document.createElement('h3')
        let a = document.createElement('a')
        let img = document.createElement('img')
        h2.innerHTML = music[i].name
        h3.innerHTML = music[i].artist
        a.href=music[i].url
        a.target = '_blank'
        a.innerHTML = 'More'
        img.src = Object.values(music[i].image[3])[0]
        item.appendChild(h2)
        item.appendChild(h3)
        item.appendChild(a)
        item.appendChild(img)

    }
    return (
        <div className='container'>
            
        </div>
    );
}

export default MusicList;
