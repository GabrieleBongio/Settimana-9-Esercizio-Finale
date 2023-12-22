import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import TopSection from "./components/TopSection";
import { Container } from "react-bootstrap";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
//import Profile from "./components/ProfilePage/Profile";
//import Settings from "./components/SettingsPage/Settings";

function App() {
  return (
    <div className="bg-dark">
      <TopBar></TopBar>
      <Container>
        <TopSection></TopSection>
        <Gallery search="Harry Potter"></Gallery>
        <Gallery search="Lord Of The Rings"></Gallery>
        <Gallery search="Avengers"></Gallery>
        <Footer></Footer>
      </Container>
    </div>
  );
}

export default App;
