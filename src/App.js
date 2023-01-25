import logo from './logo.svg';
import './App.css';
import "./index.css"
import Header from  "./catigories/Header.jsx";
import Hero from "./catigories/Hero";
import Table from "./catigories/Table";
import Leading from './catigories/Leading';
import DownloadMobile from './catigories/Mobile';
import Costumer from './catigories/Costumer';
import Article from './catigories/Article';
import Footer from './catigories/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Table></Table>
      <Leading></Leading>
      <DownloadMobile></DownloadMobile>
      <Costumer></Costumer>
      <Article></Article>
      <Footer></Footer>
    </div>
  );
}

export default App;
