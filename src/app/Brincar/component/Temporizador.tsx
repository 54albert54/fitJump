import { menuIcon, resetIcon, stopIcon, stopplayIcon } from "@/assets"

import { TDificult } from "@/componentes/PieChart"
import dataConfig from "@/const/constData"
import Image from "next/image"
import { useEffect, useState } from "react"
import MoreOptions from "./MoreOptions"
import MenuBoton from "./MenuBoton"
import BotonOption from "./BotonOption"

const TimeClock:any = dataConfig?.time

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
  if(segundos > 60){
    setSegundos((stat:number) => stat = 0);
    setLap((time:number)=> time + 1)
  }
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
 
   <MenuBoton setOtherMenu={setOtherMenu}/>
     
     
      

      {otherMenu?
       <MoreOptions ride={ride} chouseLevels={chouseLevels} setOtherMenu={setOtherMenu} />
      :<MainBotonContainer pausarTemporizador={pausarTemporizador} reanudarTemporizador={reanudarTemporizador} reiniciarTemporizador={reiniciarTemporizador} />
    }
     
    </div>
);
};


type PropsBC= {pausarTemporizador:any 
  reanudarTemporizador:any 
  reiniciarTemporizador:any
}
function MainBotonContainer({pausarTemporizador ,reanudarTemporizador ,reiniciarTemporizador}:PropsBC){
  return(
    <section className='w-[400px] h-8  flex justify-between px-6 mt-12'>
      <BotonOption callAction={pausarTemporizador}>
        <Image
            src={stopIcon}
            alt="Descripción de la imagen"
            width={50}
            height={50}
          />
        </BotonOption>
        <BotonOption callAction={reanudarTemporizador}>
        <Image
            src={stopplayIcon}
            alt="Descripción de la imagen"
            width={50}
            height={50}
          />
        </BotonOption>
        <BotonOption callAction={reiniciarTemporizador}>
        <Image
            src={resetIcon}
            alt="Descripción de la imagen"
            width={50}
            height={50}
          />
        </BotonOption>
        
      </section>
  )
}