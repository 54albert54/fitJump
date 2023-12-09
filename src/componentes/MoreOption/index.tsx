const MoreOptions = ({ride,chouseLevels})=>{
  return(
    <div className='absolute top-[170px] w-auto h-48 p-6 flex flex-col items-center justify-evenly bg-slate-300 rounded-lg shadow-xl' >
     
    <div className='w-[400px] h-8  flex justify-between px-6'>
              <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={()=>ride(5)}>5</button>
              <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={()=>ride(15)}>15</button>
              <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={()=>ride(15)}>15</button>

            </div>
       
            <div className='w-[400px] h-8  flex justify-between px-6'>
            <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={()=>chouseLevels({go:35,rest:25})}>levelEasy</button>
              <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={()=>chouseLevels({go:40,rest:20})}>levelMid</button>
              <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={()=>chouseLevels({go:55,rest:15})}>levelHard</button>

            </div>
    </div>

  )
}

export default MoreOptions;

