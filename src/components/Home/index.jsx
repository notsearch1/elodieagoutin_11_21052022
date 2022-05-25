import "../../styles/Home.css";
import Header from "../Header";
import Banner from "../Banner";
import Footer from "../Footer";
import Location from "../Location"

function Home() {
  return (
    <div>
      <Header />
      <Location />
      <Banner 
      condition={true}/>
      <Footer />
    </div>
  );
}

export default Home;
