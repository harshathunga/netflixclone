import React, {useEffect, useState} from 'react'
import "bootstrap/dist/css/bootstrap.css";

function Home() {
    const[set, setdata] = useState([]);
    // const[num, setnum] = useState(0);

    useEffect(()=>{
        const url = "https://jsonplaceholder.typicode.com/photos";
        fetch(url).then(resp=>resp.json()).then(res=>setdata(res))
    },[])

  return (
    <div className='row'>Todo

        <h1>test</h1>
        
        {
            set.map((e) => (
                <div>
                    <img src = {e.url} alt = {e.title}></img>
                    {e.title}
                </div>
            ))

            // set.map((e,index)=> < Pass name = {e.title} id ={e.id} /> )
        
}
    </div>
  )
}

export default Home