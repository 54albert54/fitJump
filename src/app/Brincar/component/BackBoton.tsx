import { backIcon } from "@/assets"
import Image from "next/image"
import Link from "next/link"

export default function BackBoton (){

  return (
    <div className=' absolute right-[-30px] top-[-80px] '>
    <Link href='/'>
    <Image
                src={backIcon}
                alt="Descripción de la imagen"
                width={50}
                height={50}
              />
    </Link>
</div>
)}