import MenuBoton from "./MenuBoton"

type Props ={
  ride:any
  chouseLevels:any
  setOtherMenu:any
}

export default function MoreOptions ({ride,chouseLevels ,setOtherMenu}:Props){
  return(
    <div className='absolute bottom-[-50px] left-0 w-auto h-auto p-6 flex flex-col items-center justify-evenly bg-gradient-to-t from-gray-600 to-white rounded-lg shadow-xl' >
     <p className='text-black font-bold text-[24px] mb-3'>Opciones</p>
     <MenuBoton setOtherMenu={setOtherMenu}/>
    <div className='w-[400px] h-20 mb-3  flex flex-col justify-between items-center px-6'>
      <p className='font-semibold mb-3' >Cuantas Vueltas?</p>
      <div className='w-full h-8 flex flex-row justify-between'>
        <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={()=>ride(5)}>5</button>
        <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={()=>ride(10)}>10</button>
        <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={()=>ride(15)}>15</button>
      </div>                    
    </div>
    <div className='w-[400px] h-20 mb-3  flex flex-col justify-between items-center px-6'>
    <p className='font-semibold mb-3'>Tiempo de descanso?</p>
            <div className='w-full h-8 flex flex-row justify-between'>
            <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={()=>chouseLevels({go:35,rest:25})}>25s</button>
              <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={()=>chouseLevels({go:40,rest:20})}>20s</button>
              <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={()=>chouseLevels({go:45,rest:15})}>15s</button>

            </div>
            </div>
    </div>

  )
}