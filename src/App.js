import React from 'react'
import Nav from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/about';
import Shop from './Components/OurShop/Shop';
import Team from './Components/OurTeam/Team';
import Part from './Components/OurPartner/Partner';
import Con from './Components/Contact/Contact';
import Foot from './Components/Footer/Footer';


function App() {
  return (
   <>
   <Nav/>
   <Home/>
   <About/>
   <Shop/>
   <Team/>
   <Part/>
   <Con/>
   <Foot/>

   </>
  );
}

export default App;
