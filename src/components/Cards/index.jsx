import { NavLink } from "react-router-dom"
import '../../styles/Cards.css'

export default function index(props) {

  const cards=props.data
  const dataArr=[]
  for(let i=0; i<cards.length; i++){
    dataArr.push(cards[i])
  }
  
  return (
    <div className="cardsContainer">
      {dataArr.map((data) => (
        <NavLink to={`/location/${data.id}`} 
        className="linkCard" 
        key={data.id}>
          <img src={data.cover} alt={data.cover} className="imgCard"/>
          <div className="maskCard"></div>
          <h3 className="titleLodging">{data.title}</h3>
        </NavLink>
      ))}
    </div>
  )
}