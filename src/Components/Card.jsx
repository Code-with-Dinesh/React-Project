import React from "react";
function Card({id,price,image,tripName, description,btnHandler}){
    return(
    
        <div className="card border-2">
            <img className="image rounded-lg" src={image} alt="not load" />
            <div className="tour-details">
                <h4 className="text-2xl font-semibold text-green-800">₹{price}</h4>
                <h4 className="text-xl text-yellow-600"> {tripName} </h4>
                
            </div>
            <div className="description text-sm">
              {description}
            
            </div>
            <div onClick={()=>btnHandler(id)} className="btn-red">
                <button className="bg-red-700 px-6 py-1 border-none text-white mt-4 rounded-md">Not interested</button>
            </div>
        </div>
    )
}

export default Card;