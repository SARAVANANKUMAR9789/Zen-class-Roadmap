import react from 'react'
import Header from "./com/Header";
import NavBar from './com/NavBar';
import IconsGrid from './com/IconsGrid';
import ImageShowcases from './com/ImageShowcases';
import Testimonials from './com/Testimonials';
import CalltoAction from './com/CalltoAction';
import Footer from './com/Footer';

function App() {
  return <>
    <div style={{backgroundImage: `url("../../src/assets/bg-masthead.jpg")`}}>
    <NavBar/>
    <Header/> 
    <IconsGrid/>
    <ImageShowcases/>
    <Testimonials/>
    <CalltoAction/>
    <Footer/>
    </div>
  </>
}

export default App