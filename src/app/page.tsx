"use client"
import PieChart, { TDificult } from '@/componentes/PieChart'
import 

import {  useEffect, useState } from 'react'

export default function Home() {
  const [segundos, setSegundos] = useState(0);
  const [pausado, setPausado] = useState(true);
  const [lap , setLap]= useState(0)
  const [totalLap , setTotalLap]= useState(5)
  const [levels , setLevels] = useState<TDificult>({rest:20,go:40})

  return (
    <section className=' w-[590px] h-[800px] md:mt-8 md:bg-gray-400  sm:bg-red-400  mx-auto'>
      <div className=' w-[500px] h-[500px] m-auto flex flex-col items-center pt-10 mb-3'>
        <p className='mb-8 text-[32px] font-bold'>  {lap} de {totalLap}</p>
        <div className='w-[600px] relative h-[900px] z-0 flex justify-center items-center'>
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
        };
        const reiniciarTemporizador = () => {
          setSegundos(0);
          setLap((time:number)=> time = 0)
          pausarTemporizador()
        };
        if (lap == totalLap){
          pausarTemporizador()
        }
        const chouseLevels = ({go ,rest})=>{
          makeLevels({go,rest})
        }
       
        const ride =(total:number)=>{
          setTotalLap(total)
        }
        return ( 

          <div className='w-auto h-48 p-6 flex flex-col items-center justify-evenly bg-slate-300 rounded-lg shadow-xl'>
            
            <div className='w-[400px] h-8  flex justify-between px-6'>
              <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-6 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" onClick={pausarTemporizador}>Pausar</button>
              <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-6 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" onClick={reanudarTemporizador}>Reanudar</button>
              <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-6 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" onClick={reiniciarTemporizador}>Reiniciar</button>
            </div>
            <MoreOptions ride={ride} chouseLevels={chouseLevels} />
          </div>
  );
};


