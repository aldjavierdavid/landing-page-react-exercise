import Footer from "./Footer"
import NavBar from "./NavBar"
import Jumbotron from "./Jumbotron"
import Card from "./Card"

function App() {

  return (
    <>
      <NavBar />
      <div id="container" className="mx-5">
        <Jumbotron />
      <div id="cards" className="d-flex justify-content-evenly">
        <Card className="col" title="Venezuela" desc="Viva Venezuela en esa mierda caballero" srcImage="./img/WhatsApp Image 2023-05-18 at 11.43.35 AM.jpeg" />
        <Card className="col" title="Pedri" desc="Pedri con bigote" srcImage="img\WhatsApp Image 2023-05-18 at 11.43.23 AM.jpeg"/>
        <Card className="col" title="Mario" desc="Mario loves you very much" srcImage="img\WhatsApp Image 2023-05-18 at 11.46.43 AM.jpeg"/>
        <Card className="col" title="😁" desc="😁" srcImage="img\WhatsApp Image 2023-05-18 at 12.16.38 PM.jpeg"/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App;
