"use client"
// import MoreOptions from '@/componentes/MoreOption';
import PieChart, { TDificult } from '@/componentes/PieChart'

import menuI from '../assets/menuIcon.png'
import Image from 'next/image';
import '../../app/globals.css'


import {  useEffect, useState } from 'react'
import MoreOptions from '@/componentes/MoreOption';
import Temporizador from '@/componentes/Temporizador';

export default function JumpApp() {
  const [segundos, setSegundos] = useState(0);
  const [pausado, setPausado] = useState(true);
  const [lap , setLap]= useState(0)
  const [totalLap , setTotalLap]= useState(5)
  const [levels , setLevels] = useState<TDificult>({rest:20,go:40})

  return (
    <section className=' w-screen h-screen md:mt-8 md:bg-gray-400 ] bg-slate-400  mx-auto fixed'>
      <div className=' w-[100%] h-[500px] m-auto flex flex-col items-center pt-10 mb-3'>
        <p className='mb-8 text-[32px] font-bold'>  {lap} de {totalLap}</p>
        <div className='w-[100%] relative h-[900px] z-0 flex justify-center items-center'>
          <div className='absolute top-4 '>
            <div className='w-6 h-6 bg-black absolute  top-[140px] left-[134px] rounded-full z-50'></div>
            <Manecilla time={segundos} restTime={levels.rest}/>
            <div className='text-white font-bold text-[36px] top-[190px] left-[134px] absolute z-10'>{segundos}</div>
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
type PropsM ={
  time :number
  restTime:number
  
}
const Manecilla =({time , restTime}:PropsM)=>{
  const createStiles =()=>{
    const showColor =()=>{
   
    if(time < restTime ){
      return{fill:'#000',border:'#fff'}
    }else if(time > restTime){
      return {fill:'#f00',border:'#000'}
    }}

    const allColors = showColor()
    return {
      rotate:`${time*6}deg`,
      backgroundColor:`${allColors?.fill}`,
      border:2,
      borderColor:`${allColors?.border}`,
      borderStyle:'solid'
    }
  }
  
  return(
          <div style={createStiles()} className={`w-[8px] h-[150px] border rounded-full border-black
          transform origin-bottom rotdate-[180deg] absolute top-[1px] right-[147px] z-30`}>
          </div>
        
        )
      }

      
    
