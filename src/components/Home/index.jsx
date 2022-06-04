import Header from "../Header";
import Banner from "../Banner";
import Footer from "../Footer";
import { useFetch } from '../../utils/hooks'
import Cards from '../Cards'
import {Loader} from '../../utils/Atoms.jsx'





function Home() {
  const { data, error, isLoading } = useFetch(`../../../datas/datas.json`)
  if (error) {
    return <span>Un problème est survenu lors du téléchargement des images</span>
  }



  return (
    <div>
      <Header />
      <Banner
        condition={true} />
      <section>
       {isLoading ? (
         <Loader />
       ):(
         <Cards data={data}/> )} 
      </section>
      <Footer />
    </div>
  );
}

export default Home;
