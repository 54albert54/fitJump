import Image from "next/image";
import BotonOption from "./BotonOption";
import { resetIcon, stopIcon, stopplayIcon } from "@/assets";

type PropsBC= {pausarTemporizador:any 
  reanudarTemporizador:any 
  reiniciarTemporizador:any
}
export default function MainBotonContainer({pausarTemporizador ,reanudarTemporizador ,reiniciarTemporizador}:PropsBC){
  return(
    <section>
      
    <section className='w-[400px] h-14  flex justify-between px-6 mt-12 relative bottom-12'>
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
    </section>
  )
}