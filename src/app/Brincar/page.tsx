"use client"

import PieChart, { TDificult } from '@/componentes/PieChart'
import '../../app/globals.css'
import { useState } from 'react'
import BackBoton from './component/BackBoton';

import Manecilla from './component/Manecilla';
import dataConfig from '@/const/constData';
import Temporizador from './component/Temporizador';



export default function JumpApp() {
  const [segundos, setSegundos] = useState(0);
  const [pausado, setPausado] = useState(true);
  const [lap , setLap]= useState(0)
  const [totalLap , setTotalLap]= useState(5)
  const [levels , setLevels] = useState<TDificult>({rest:20,go:40})
  const isInDev = dataConfig?.isdev
  
  
  
  const isDev = ()=>{
    if(isInDev){
      return {bg:'#ff99A8'}
    }else{
      return {bg:'#6c6c6c'}
    }
  }
  return (
    <section style={{backgroundColor:`${isDev().bg}`}} className=' w-screen h-screen md:mt-8  mx-auto fixed'>
      <div className=' w-[100%] h-[500px] m-auto flex flex-col items-center pt-10 mb-3'>
        <p className='mb-8 text-[32px] font-bold'>  {lap} de {totalLap}</p>
        <div className='w-[100%] relative h-[900px] z-0 flex justify-center items-center'>
          <div className='absolute top-4 '>
          <BackBoton/>
            <div className='w-6 h-6 bg-black absolute  top-[140px] left-[134px] rounded-full z-50'></div>
            <Manecilla time={segundos} restTime={levels.rest}/>
            <div className='text-white font-bold text-[48px] top-[120px] left-[64px] absolute z-10'>{segundos}</div>
            <PieChart nivel={levels} />
          </div>
        </div>
      </div>
      <div className='w-full h-[200px] flex justify-center pt-3'>
      <Temporizador setTotalLap={setTotalLap} totalLap={totalLap}  segundos={segundos} setSegundos={setSegundos} pausado={pausado} setPausado={setPausado} setLap={setLap} lap={lap} makeLevels={setLevels}/>
      </div>    
    </section>
  )
};


