import "../../styles/Home.css";
import Header from "../Header";
import Banner from "../Banner";
import Footer from "../Footer";
import { useFetch } from '../../utils/hooks'
import Cards from '../Cards'





function Home() {
  const { data, error } = useFetch(`../../../datas/datas.json`)
  if (error) {
    return <span>Il y a un problème</span>
  }
  



  return (
    <div>
      <Header />
      <Banner
        condition={true} />
      <section>
       <Cards data={data}/>  
      </section>
      <Footer />
    </div>
  );
}

export default Home;
