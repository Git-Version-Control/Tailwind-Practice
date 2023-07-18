import './App.css';
import { useState } from 'react';

function App() {
  const [enabled, setEnabled] = useState(false);
  const images=["https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
]
  return (
    <div >
    <div className="flex flex-row-reverse my-4">
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                checked={enabled}
                readOnly
            />
            <div
                onClick={() => {
                    setEnabled(!enabled);
                    if(enabled){
                      document.documentElement.classList.remove('dark')
                    }
                    else{
                      document.documentElement.classList.add('dark')
                    }

                }}
                className="w-11 h-6 bg-slate-900 dark:bg-slate-600 rounded-full peer 
                  peer-checked:after:translate-x-full
                 peer-checked:after:border-white after:content-[''] 
                  after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 
                  after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                  peer-checked:bg-slate-400"
            ></div>
        </label>
    </div>

      <h1 className= {`text-4xl text-center dark:text-white text-cyan-800 mx-auto my-5 font-bold`}>
        Hello World!!!!
      </h1>
      <div className="dark:bg-white bg-slate-600 max-w-sm mx-auto rounded-xl shadow-md  md:max-w-2xl ">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-contain md:h-full md:w-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPNNExrVA8qfjm4ofyxYtyKUs0MBCzjjs5CxiPtTbgr35Jxk3a" alt="Modern building architecture"/>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-200 dark:text-indigo-500 font-semibold">Company retreats</div>
          {/* // eslint-disable-next-line */}
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-white dark:text-black hover:underline">Incredible accommodation for your team</a>
          <p className="mt-2 text-slate-200 dark:text-slate-400">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
       </div>
      </div>
      </div>

      <div className={`dark:bg-white bg-slate-600 rounded-xl shadow-xl px-6 py-8  max-w-sm mx-auto my-7`}>
        <div>
          <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
          <img className="h-6 w-6 text-white" 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTENZpi8DjtxUJ1hYhRk52PhNCQ_1YEPmnzM26t9ygjOPrdL3" 
              alt="icon image"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"/>
          </span>
        </div>
        <h3 className={`text-white dark:text-slate-900 mt-2 text-lg tracking-tight`}>Writes Upside-Down</h3>
        <p className={`dark:text-slate-400 text-slate-200 mt-2 text-sm`}>
          The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
        </p>
      </div>

      <div >
        <div className="flex items-center justify-center space-x-2">
                <h4 className='font-semibold dark:text-gray-400 '>Contributors</h4>
                <span className="rounded-lg bg-slate-200 text-xs text-gray-700 px-2">204</span>
        </div>
        <div className="mt-3 flex overflow-hidden -space-x-2 justify-center">
               {images.map((image,index)=>(
                <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" key={index} src={image} alt={`Image ${index}`} />
               ))}        
        </div>
       { /* have declared it in the index.css since it is common for many places*/}
        <button class="btn-primary">
          Save changes
        </button>
      </div>
    </div>
   

//     <div className="relative flex flex-col  min-h-screen overflow-hidden">
//     <div className="flex flex-row-reverse my-4">
//         <label className="inline-flex relative items-center mr-5 cursor-pointer">
//             <input
//                 type="checkbox"
//                 className="sr-only peer"
//                 checked={enabled}
//                 readOnly
//             />
//             <div
//                 onClick={() => {
//                     setEnabled(!enabled);
//                     if(enabled){
//                     //   document.body.classList.remove('dark')
//                     //   document.body.classList.add('bg-white')
//                       document.documentElement.classList.remove('dark')
//                     }
//                     else{
//                       // document.body.classList.add('dark');
//                       // document.body.classList.add('dark:bg-slate-700');
//                       document.documentElement.classList.add('dark')
//                     }

//                 }}
//                 className="w-11 h-6 bg-gray-200 rounded-full peer 
//                  peer-focus:ring-green-300  peer-checked:after:translate-x-full
//                  peer-checked:after:border-white after:content-[''] 
//                   after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 
//                   after:border after:rounded-full after:h-5 after:w-5 after:transition-all
//                   peer-checked:bg-green-600"
//             ></div>
//         </label>
//     </div>
//     <h1 className='text-red-500 dark:text-white'>
//       Hello World
//     </h1>
// </div>
  );
}

export default App;
