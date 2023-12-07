import {React,useState}from 'react';
import { Link} from 'react-router-dom';

function Card2(props) { 
   const data = props.data;
   
  const [data1, setdata1] = useState(data.id);

  return (<div >
    <div className="w-48 bg-white shadow rounded m-2" >
      <div
        className="h-40 w-full bg-gray-200 flex flex-col justify-between p-3 bg-cover bg-center"
        style={{ background:'center no-repeat',
          backgroundSize: 'contain',
          backgroundImage: `url('${data.image}')`
        }}
      >
        <div className="flex justify-between">
          <input type="checkbox" />
          <button className="text-white hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
        <div>
          <span className="uppercase text-xs bg-green-50 p-1 border-green-500 border rounded text-green-700 font-medium select-none">
            available
          </span>
        </div>
      </div>
      <div className="p-3 flex flex-col items-center">
        
        <h2 className="text-center text-gray-800 mt-1" style={{fontWeight:"bold"}}>{data.id}</h2>
        <p className="text-center text-gray-800 mt-1">{data.price} DH</p>
        <p className=" hidden text-center text-gray-800 mt-1">{data.sisal}{data.description} DH</p>
        <Link to={`/Productinfo/${data1}`}
          className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-black active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
        >
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </Link>
      </div>
    </div>
 </div> );
}

export default Card2;

