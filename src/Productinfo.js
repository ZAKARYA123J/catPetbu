import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";



export default function Productinfo(props) {
  const { data1 } = useParams();
  const [jsonData, setJsonData] = useState(null);

  const getData = () => {
    fetch('/text.json', {
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

  const [targetObject, setTargetObject] = useState(false);
  useEffect(() => {
    // Find the object with the specified ID
    if (jsonData) {
      const foundObject = jsonData.find(item => item.id.toString() === data1);
      setTargetObject(foundObject);
    }
  }, [jsonData, data1]);

  const img = "/" + targetObject.image;

  return (<>

    <style>@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);</style>
    <div className="min-w-screen min-h-screen bg-gray-700 flex items-center p-5 lg:p-10 overflow-hidden relative ">
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left ">
        <div className="md:flex items-center -mx-10">
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0 ">
          <div className="  md:h-auto md:max-h-full">
  <img
    src={img}
    className="w-1/3 h-1/2  mx-auto"
    alt="img-not-found"
  />
  <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
</div>
          </div>
          <div className="w-full md:w-1/2 px-10">
            <div className="mb-10">
              <h1 className="font-bold uppercase text-2xl mb-5">{targetObject.id}<br></br></h1>
              <p className="text-sm"><h3 className="font-bold">Sisal:</h3>{targetObject.sisal} {targetObject.description}</p>
              <p className="text-sm"><h3 className="font-bold">Dimensions:</h3>{targetObject.dimension}</p>
              {targetObject.couleur && (
                <p className="text-sm">
                  <h3 className="font-bold">Couleur:</h3>{targetObject.couleur}
                </p>
              )}                             </div>
            <div>
              <div className="inline-block align-bottom mr-5">
                <span className="text-2xl leading-none align-baseline">MAD </span>
                <span className="font-bold text-3xl leading-none align-baseline">{targetObject.price}</span>
                <span className="text-2xl leading-none align-baseline"></span>
              </div>
              <div className="inline-block align-bottom">
                <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
      <div>
        <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
          <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
        </a>
      </div>
    </div>


  </>
  );
}