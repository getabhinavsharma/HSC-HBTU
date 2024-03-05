import React, { useState, useEffect } from 'react';
import Event from "./Components/Events/Event";
import Footer from "./Components/Footer/Footer";
import Footer2 from "./Components/Footer/Footer2";
import First from "./Components/Home/First";
import Home from "./Components/Home/Home";
import Name from "./Components/Home/Name";
import Navbar from "./Components/Navbar/Navbar";
// import Team from "./Components/Team/Team";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace with actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen absolute z-[9999] flex items-center justify-center backdrop-blur-xl">
          <img src="/intro.gif" alt="" className='mx-auto rounded-3xl' />
        </div>
      ) : (
        <div className='w-full flex flex-col min-h-screen bg-black'>
          <First />
          <Name />
          <Home />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
