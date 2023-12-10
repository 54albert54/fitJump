"use client"
// import MoreOptions from '@/componentes/MoreOption';
import PieChart, { TDificult } from '@/componentes/PieChart'

import menuI from '../assets/menuIcon.png'
import Image from 'next/image';
import '../../app/globals.css'



import {  useEffect, useState } from 'react'
import { menuIcon, resetIcon, stopIcon, stopplayIcon ,backIcon } from '@/assets';
import Link from 'next/link';



export default function JumpApp() {
  const [segundos, setSegundos] = useState(0);
  const [pausado, setPausado] = useState(true);
  const [lap , setLap]= useState(0)
  const [totalLap , setTotalLap]= useState(5)
  const [levels , setLevels] = useState<TDificult>({rest:20,go:40})

  return (
    <section className=' w-screen h-screen md:mt-8 md:bg-gray-400 ] bg-slate-400  mx-auto fixed'>
      <div className='mx-auto w-2'>
        
      </div>
     
      <div className=' w-[100%] h-[500px] m-auto flex flex-col items-center pt-10 mb-3'>
        <p className='mb-8 text-[32px] font-bold'>  {lap} de {totalLap}</p>
        <div className='w-[100%] relative h-[900px] z-0 flex justify-center items-center'>
              <div className=' absolute right-[80px] top-[-80px] '>
                  <Link href='/'>
                  <Image
                              src={backIcon}
                              alt="Descripción de la imagen"
                              width={50}
                              height={50}
                            />
                  </Link>
            </div>



          
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

      type Props ={
        ride:any
        chouseLevels:any
      }
      const MoreOptions = ({ride,chouseLevels}:Props)=>{
        return(
          <div className='absolute bottom-[200px] left-0 w-auto h-48 p-6 flex flex-col items-center justify-evenly bg-gradient-to-b from-gray-600 to-white rounded-lg shadow-xl' >
           <p className='text-black font-semibold text-[24px]'>Optios</p>
          <div className='w-[400px] h-8  flex justify-between px-6'>
                    <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={()=>ride(5)}>5</button>
                    <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={()=>ride(10)}>10</button>
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
     