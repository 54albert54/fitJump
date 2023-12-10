type Props ={
  children:any
  callAction:any
}
export default  function BotonOption({children , callAction}:Props){
  return(
    <button className="shadow-xl flex w-[100px] items-center justify-center rounded-md border border-transparent bg-slate-800 px-8 py-6 text-base font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2" onClick={callAction}>
      {children}
    </button>
        
  )
}