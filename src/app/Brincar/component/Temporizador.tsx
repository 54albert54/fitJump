import { menuIcon, resetIcon, stopIcon, stopplayIcon } from "@/assets"

import { TDificult } from "@/componentes/PieChart"
import dataConfig from "@/const/constData"
import Image from "next/image"
import { useEffect, useState } from "react"
import MoreOptions from "./MoreOptions"
import MenuBoton from "./MenuBoton"
import BotonOption from "./BotonOption"
import MainBotonContainer from "./MainBotonContainer"

const TimeClock:any = dataConfig?.time
const isInDev = dataConfig?.isdev

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
export default function Temporizador ({segundos ,setSegundos,pausado,setPausado,setLap ,lap ,makeLevels ,totalLap , setTotalLap}:PropsC) {  
  const [otherMenu , setOtherMenu ] = useState(false)
 
  useEffect(() => {
    let intervalId:any;
    if (!pausado) {
      intervalId = setInterval(() => {
        setSegundos((prevSegundos:number) => prevSegundos + 1);
      }, TimeClock );
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
  const chouseLevels = ({go ,rest}:TDificult)=>{
    makeLevels({go,rest})
  }
 
  const ride =(total:number)=>{
    setTotalLap(total)
  }
  if(segundos > 59){
      if (lap >= (totalLap-1)){
          pausarTemporizador()
    }
    setSegundos((stat:number) => stat = 0);
    setLap((time:number)=> time + (isInDev?.5:1))
  }

  return ( 
    <div className='relative bottom-12 w-[430px] h-[280px] flex flex-col items-center justify-evenly bg-gradient-to-t from-gray-800 to-white rounded-lg shadow-xl '>
    <MenuBoton setOtherMenu={setOtherMenu}/>
      {otherMenu?
       <MoreOptions ride={ride} chouseLevels={chouseLevels} setOtherMenu={setOtherMenu}  />
      :<MainBotonContainer pausarTemporizador={pausarTemporizador} reanudarTemporizador={reanudarTemporizador} reiniciarTemporizador={reiniciarTemporizador} />
    }
    </div>
);
};




