import './App.css';
import About from './component/Pages/About/About';
import Contact from './component/Pages/Contact/Contact';
import Footer from './component/Pages/Footer/Footer';
import Home from './component/Pages/Home/Home';
import Portfolio from './component/Pages/Portfolio/Portfolio';
import Header from './component/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
