import './App.css';
import Header from './components/Header/Header'
import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import Review from './components/reviews/Review';
import Contact from './components/contact/Contact';
import Spacer from './components/spacer/Spacer';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <Review />
      <Spacer />
      <Contact />
      <Footer />
     
    </div>
  );
}

export default App;
