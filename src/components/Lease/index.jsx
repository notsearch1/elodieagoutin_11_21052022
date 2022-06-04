import Footer from '../Footer'
import Header from '../Header'
import { useFetch } from '../../utils/hooks'
import Carousel from '../Carousel/Carousel'
import '../../styles/Lease.css'
import { useParams } from "react-router-dom";


function Lease() {
    const url = window.location.pathname
    const idPage = url.substring(7)
    console.log(idPage)
    const { data, error } = useFetch(`../../../datas/datas.json`)
    console.log(data)
    if (error) {
        return <span>Il y a un problème</span>
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const { id } = useParams();

    //   const dataId = data.filter((lease) => lease.id === id);
    //   console.log(dataId)
    const dataArr = []
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === idPage)
            dataArr.push(data[i])
    }

    const go = dataArr.length === 1


    console.log(dataArr)

    return (

        <div>
            <Header />
            {go && <Carousel data={data} />}
            {go &&
                <div className='information-section'>
                    <div className='title-container'>
                        <h1 className='lease-title'>{dataArr[0].title}</h1>
                        <figure className='host-container'>
                            <figcaption className="host-name">{dataArr[0].host.name}
                            </figcaption>
                            <img src={dataArr[0].host.picture} alt={dataArr[0].host.name} className="host-img" />
                        </figure>
                    </div>
                    <span className='lease-location'>{dataArr[0].location}</span>
                </div>
            }
            <Footer />
        </div>
    )
}


export default Lease;