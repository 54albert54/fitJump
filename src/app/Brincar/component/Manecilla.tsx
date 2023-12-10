type PropsM ={
  time :number
  restTime:number
  
}
export default function Manecilla ({time , restTime}:PropsM){
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