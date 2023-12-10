"use client"

import Link from 'next/link';


export default function Home() {
  
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-4'>
      <p>que quieres hacer ahora </p> 
      
      <Link className='text-[32px]' href='/Brincar'> brincar</Link>
    </div>
 
  )
};

