import { useEffect, useState } from 'react';


function Location(){
    
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch(`../../datas/datas.json`)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log('an error occurs', err))
    }, [])
   
    
    
    return(
        <div>
            {/* <img src={dataImg} alt="" /> */}
            {/* <h1>{dataTitle}</h1> */}
        </div>
    )
}


 export default Location;