import { useState, useEffect } from 'react';
import axios from 'axios';

function Images(){

    const[images, setImages] = useState([]);
    
    //1.
    useEffect(()=>{
        axios( {
            method:'GET',
            url:'https://jsonplaceholder.typicode.com/photos', })
        .then(res=>setImages(res.data));
    }, []);

    //2.
    // useEffect( () =>{
    //     axios.get('https://jsonplaceholder.typicode.com/photos')
    //     .then( res => setImages(res.data))
    // })

    //3.
    useEffect(()=>{
        async function fetchData (){
            try{
                const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
                setImages(res.data)
            }
            catch(error)
            {
                console.log(error);
            }
        }
        fetchData();       
    })
    return(
        <>
            <div>{images.slice(0,2).map(image=>(    
                    <li key={image.id}><img src={image.thumbnailUrl}></img></li>
                )                
            )}</div>
        </>
    )

}

export default Images;