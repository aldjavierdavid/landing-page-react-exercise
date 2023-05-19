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
        <Card className="col" title="Venezuela" desc="Viva Venezuela en esa mierda caballero" srcImage="https://i.ibb.co/N9s4mRb/Whats-App-Image-2023-05-18-at-11-43-35-AM.jpg" alt="venezuela el mejor pais del mundo"/> 
        <Card className="col" title="Pedri" desc="Pedri con bigote" srcImage="https://i.ibb.co/dWJnKGH/Whats-App-Image-2023-05-18-at-11-43-23-AM.jpg" alt="literalmente pedri con bigote, y calvo"/>
        <Card className="col" title="Mario" desc="Mario loves you very much" srcImage="https://i.ibb.co/rkrV2LP/Whats-App-Image-2023-05-18-at-11-46-43-AM.jpg" alt="Mario loves you very much"/>
        <Card className="col" title="😁" desc="😁" srcImage="https://i.ibb.co/NFBJfq5/Whats-App-Image-2023-05-18-at-12-16-38-PM.jpg" alt="😁"/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App;
