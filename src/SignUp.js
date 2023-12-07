import React,{useState,useEffect} from 'react';
import axios from 'axios'

const SignUp = () => {
  const [name, setName]=useState('');
  const [password, setPassword]=useState('');
  const [email, setEmail]=useState('');
  const [error,setEror]=useState('')
  const handlesubmi= async(e)=>{
    e.preventDefault();
    if(!name || !password || !email){
      setEror('pleas fill in all field ')
    }
    try{
      await axios.post('https://zakarya.onrender.com/sign',{
        name:name,
        email:email,
        password:password
      });
      setName('');
      setEmail('');
      setPassword('');
      setEror('');
      alert('succes')
    }catch(error){
      console.log('error')
    }
  }
  return (
    <>
      <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script>

      <style>
        {`
          @import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css');
        `}
      </style>

      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2  py-10 px-10 bg-contain bg-center bg-no-repeat"  style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}>
              {/* Replace the following SVG content with your actual SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="auto"
                viewBox="0 0 744.84799 747.07702"
              >
                {/* Your SVG content here */}
              </svg>
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                <p>Enter your information to register</p>
              </div>
              <div>
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">First name</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                      <input onChange={(e)=>{setName(e.target.value)}} type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John" />
                    </div>
                  </div>
                  <div className="w-1/2 px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">Last name</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                      <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Smith" />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                      <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                      <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button onClick={handlesubmi} className="block w-full max-w-xs mx-auto bg-gray-800 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Me a Beer */}
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" alt="Buy me a beer" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SignUp;
