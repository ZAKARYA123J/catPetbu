import {React,useEffect,useState} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ReservationForm from './Contact';
import Navbar2 from './Navbar2';
import Wbutton from './whatsapp';
import Footer from './footer';
import Login from './Login';
import Products from './products';
import './Logo.png';
import Productinfo from './Productinfo';
import SignUp from './SignUp';
import Middle from './Middle';
import {Helmet} from 'react-helmet'
function App() {
  const [jsonData, setJsonData] = useState(null);
  
  const getData = () => {
    fetch('text.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(function (response) {
        
        return response.json();
      })
      .then(function (myJson) {
        
        setJsonData(myJson); 
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    getData();
  }, []);


  return (

    <>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Middle/>} />
        <Route path="/ReservationForm" element={<ReservationForm/> } />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Products" element={<Products data={jsonData} />} />
        <Route path="/Productinfo/:data1" element={<Productinfo  />} />
      </Routes>
      
      {/* 
      <div className="flex flex-wrap">
          {jsonData ? (
            jsonData.map((item) => (
              <div key={item.id} className="flex justify-center items-center flex-col">
                
                <Productinfo data={item} className="flex-shrink-0" />
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      
      
      
      
      
      */ }
   
       <>
      
        <div className="flex flex-wrap ">
         
        </div>
        <Helmet>
      <title>PetBu</title>
      <meta name="Discover a wide array of cat supplies, including premium cat food, comfortable bedding, interactive toys, grooming essentials, and stylish accessories. Whether you have a playful kitten or a sophisticated senior cat, our curated selection ensures that you find everything necessary for their comfort and joy." 
      content="cat petbu" />
    </Helmet>
        </>
     
      
      <Wbutton number="+212688880009" />
      <Footer />
    </>
  );
}

export default App;


