
import BotonOption from "./BotonOption"
import MenuBoton from "./MenuBoton"

type Props ={
  ride:any
  chouseLevels:any
  setOtherMenu:any
}


export default function MoreOptions ({ride,chouseLevels ,setOtherMenu}:Props){

  return(
    <div className='absolute   w-auto h-auto p-6 flex flex-col items-center justify-evenly bg-gradient-to-t from-gray-600 to-white rounded-lg shadow-xl' >
     <p className='text-black font-bold text-[24px] mb-3'>Opciones</p>
     <MenuBoton setOtherMenu={setOtherMenu}/>
    <div className='w-[400px] h-auto mb-3  flex flex-col justify-between items-center px-6'>
      <p className='font-semibold my-3' >Cuantas Vueltas?</p>
      <div className='w-full h-8 flex flex-row justify-between'>
      <BotonOption  callAction={() =>ride(5)}>
        <p>5</p>
        </BotonOption>
        <BotonOption  callAction={() =>ride(10)}>
        <p>10</p>
        </BotonOption>
        <BotonOption  callAction={() =>ride(15)}>
        <p>15</p>
        </BotonOption>
      </div>                    
    </div>
    <div className='w-[400px] h-auto my-3  flex flex-col justify-between items-center px-6'>
    <p className='font-semibold mb-3'>Tiempo de descanso?</p>
      <div className='w-full h-8 flex flex-row justify-between'>
      <BotonOption  callAction={() =>chouseLevels({go:35,rest:25})}>
      <p>25</p>
      </BotonOption>
      <BotonOption  callAction={() =>chouseLevels({go:40,rest:20})}>
      <p>20</p>
      </BotonOption>
      <BotonOption  callAction={() =>chouseLevels({go:45,rest:15})}>
      <p>25</p>
      </BotonOption>
    
      </div>
      </div>
    </div>

  )
}