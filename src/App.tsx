import { useState } from "react";
import { Flowbite } from 'flowbite-react';
import NavbarComponent from "./components/Navbar/NavbarComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import MainComponent from "./components/MainComponent";

function App() {
  const [selectedMenuItem , setMenuItem] = useState('home');

  return (
    <div className='grid h-screen w-screen dark:bg-gray-800'>
      <Flowbite>
        <NavbarComponent setSelectedMenuItem={setMenuItem}/>
        <MainComponent selectedMenuItem={selectedMenuItem} />
        <FooterComponent />
      </Flowbite>
    </div>
  )
}

export default App
