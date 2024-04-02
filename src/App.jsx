import React, { useState } from "react";
import data from "../data.jsx"
import Tour from "./Components/Tour.jsx";

function App(){
  const [tour,settour] = useState(data)
  function btnHandler(id){
    const newtour = tour.filter(tours => tours.id !== id) 
    settour(newtour)
  }
  if(tour.length == 0){
    return(
      <div className="p-1">
      <div className="refresh flex items-center justify-center mt-[40vh]">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-2xl">No Tour Left</h4>
          <button  onClick={()=>settour(data)} className="bg-gray-400 px-6 py-2 mt-4 rounded-lg">Refresh</button>
        </div>
      </div>
      </div>
    )
  }
  return(
    <div className="App">
      <Tour tour={tour} btnHandler={btnHandler}></Tour>
    </div>
  )
}

export default App;