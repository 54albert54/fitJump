import { useEffect, useState } from "react"
import { TDificult } from "../PieChart"
import Image from "next/image"
import MoreOptions from "../MoreOption"
import { menuIcon , resetIcon , stopIcon , stopplayIcon } from '../../assets'

type PropsC ={
  segundos:any
  setSegundos:any
  pausado:any
  setPausado:any
  setLap:any
  lap:any
  makeLevels:any
  totalLap:any
  setTotalLap:any
}
const Temporizador = ({segundos ,setSegundos,pausado,setPausado,setLap ,lap ,makeLevels ,totalLap , setTotalLap}:PropsC) => {  
  const [otherMenu , setOtherMenu ] = useState(false)
  if(segundos > 60){
    setSegundos((stat:number) => stat = 0);
    setLap((time:number)=> time + .5)
  }
  useEffect(() => {
    let intervalId:any;
    if (!pausado) {
      intervalId = setInterval(() => {
        setSegundos((prevSegundos:number) => prevSegundos + 1);
      }, 300);
    }          
    return () => {
      clearInterval(intervalId);
    };
  }, [pausado]);
  
  const pausarTemporizador = () => {
    setPausado(true);
  };
    const reanudarTemporizador = () => {
    setPausado(false);
    setOtherMenu(false)
  };
  const reiniciarTemporizador = () => {
    setSegundos(0);
    setLap((time:number)=> time = 0)
    pausarTemporizador()
  };
  if (lap == totalLap){
    pausarTemporizador()
  }
  const chouseLevels = ({go ,rest}:TDificult)=>{
    makeLevels({go,rest})
  }
 
  const ride =(total:number)=>{
    setTotalLap(total)
  }
 
  
  return ( 

    <div className='w-auto h-48 p-6 flex flex-col items-center justify-evenly bg-gradient-to-t from-gray-800 to-white rounded-lg shadow-xl relative'>
 
    <div onClick={()=>setOtherMenu((e)=>!e)} className=' absolute  top-2 right-10 hover:cursor-pointer'>
    <Image
      src={menuIcon}
      alt="Descripción de la imagen"
      width={50}
      height={50}
    />

    </div>
     
      
      <div className='w-[400px] h-8  flex justify-between px-6 mt-12'>
        <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-6 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" onClick={pausarTemporizador}>
          <Image
            src={stopIcon}
            alt="Descripción de la imagen"
            width={50}
            height={50}
          />
        </button>
        <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-6 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" onClick={reanudarTemporizador}>
          <Image
              src={stopplayIcon}
              alt="Descripción de la imagen"
              width={50}
              height={50}
            />
        </button>
        <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-6 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" onClick={reiniciarTemporizador}>
        <Image
            src={resetIcon}
            alt="Descripción de la imagen"
            width={50}
            height={50}
          />
        </button>
      </div>
      <div >

      {otherMenu && <MoreOptions ride={ride} chouseLevels={chouseLevels} />}
      </div>
    </div>
);
};

export default Temporizador;