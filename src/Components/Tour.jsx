import React from "react";
import Card from "./Card";
function Tour({tour ,btnHandler}){
    return(
        <div className="container">
            <div>
            <h1 className="title">Plan With Dishant</h1>
            </div>
            <div className="Cards ">
                {tour.map((tour,index)=>{
                    return <Card key={index} btnHandler={btnHandler} {...tour}/>
                })}
            </div>
        </div>
    )
}

export default Tour;
