import Footer from '../Footer'
import Header from '../Header'
import { useFetch } from '../../utils/hooks'


function Location() {
    const url=window.location.pathname
    const idPage=url.substring(10)
    // console.log(idPage)
    const { data, error } = useFetch(`../../../datas/datas.json`)

    if (error) {
        return <span>Il y a un problème</span>
      }

    const dataArr=[]
    for(let i=0; i<data.length; i++){
        if(data[i].id===idPage)
        dataArr.push(data[i])
    }

    const go =dataArr.length===1
    console.log(dataArr)
    return (
        <div>
            <Header />
           {go && <div>
           <h1>{dataArr[0].title}</h1>
           <span>{dataArr[0].location}</span>
           </div>
           
           }
             

            <Footer />
        </div>
    )
}


export default Location;