import { useState } from "react";
import { Flowbite } from 'flowbite-react';
import NavbarComponent from "./components/Navbar/NavbarComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import MainComponent from "./components/MainComponent";

function App() {
  const [selectedMenuItem , setMenuItem] = useState('home');

  return (
    <div className='flex flex-col justify-between h-screen w-screen dark:bg-gray-800'>
      <Flowbite>
        <NavbarComponent setSelectedMenuItem={setMenuItem}/>
        <main className='mb-auto'>
          <MainComponent selectedMenuItem={selectedMenuItem} />
        </main>
        <FooterComponent />
      </Flowbite>
    </div>
  )
}

export default App