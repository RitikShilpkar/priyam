import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Contend from './components/contend/Contend';
import Contend2 from './components/contendtwo/Contend2';
import Contend3 from './components/contendthree/Contend3';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Contend/>
      <Contend2/>
      <Contend3/>
      <Form/>
      <Footer/>
      
    </div>
  );
}

export default App;
