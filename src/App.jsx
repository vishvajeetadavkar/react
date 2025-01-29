import React, {useState} from 'react';

function App (){
  const[score,setScore]=useState(100);
  
  return(
    <div className='p-4'>
      <h1>{score}</h1>
      <button onClick={()=>setScore(200)} className='bg-blue-200 px-2 py-1 rounded-full '>reload</button>
    </div>
  );
}
export default App;