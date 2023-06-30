import Header from './common/Header/HeadBox';
import Home from './page/Home/Home';
import About from './page/About/About';
import Banner from './page/Banner/Banner';
import Advantage from './page/Advantage/Advantage';
import Skills from './page/Skills/Skills';
import Project from './page/Project/Project';
import Clone from './page/Clone/Clone';
import Contact from './page/Contact/Contact';
import Footer from './common/Footer/Footer';
import './App.css';

function App() {
  const title = 'portfolio';
  return (
    <div className="App">
      <Header heading={title}/>
      <Home />
      <About />
      <Banner />
      <Advantage />
      <Skills />
      <Project />
      <Clone />
      <Contact />
      <Footer />
    </div>
  )
}


export default App;
