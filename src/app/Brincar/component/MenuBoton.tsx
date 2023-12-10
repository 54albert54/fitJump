import { menuIcon } from "@/assets";
import Image from "next/image";
type Props ={
  setOtherMenu:any
}
export default function MenuBoton({setOtherMenu}:Props){
  return(
    <div onClick={()=>setOtherMenu((e:boolean)=>!e)} className=' absolute  top-2 right-10 hover:cursor-pointer'>
    <Image
      src={menuIcon}
      alt="Descripción de la imagen"
      width={50}
      height={50}
    />
    </div>
  )
}