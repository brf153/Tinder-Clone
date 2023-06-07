import React, { useEffect, useState } from 'react'
import "./TinderCards.css"
import TinderCard from "react-tinder-card";
import axios from "./axios"

const TinderCards = () => {
    const [people, setPeople] =useState()

useEffect(()=>{
    const fetchData=async()=>{
        const response = await axios.get("/tinder/cards").then((e)=> setPeople(e.data)).catch((err)=>console.log(err.message)
    }
    fetchData()
},[])

const swiped = (direction, nameToDelete)=>{
    console.log("removing " + nameToDelete);
    // setLastDirection(direction)
}

const outOfFrame=(name)=>{
    console.log(name + " left the screen!")
}

  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
        { people && people.map((e)=>{
           return(

           <TinderCard 
            className='swipe'
            key={e.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir)=> swiped(dir, e.name)}
            onCardLeftScreen={()=> outOfFrame(e.name)}
            >
                <div 
                 style={{backgroundImage: `url(${e.imgUrl})`}}
                 className='card'>
                    <h3>{e.name}</h3>
                </div>
            </TinderCard>
           ) 
        })}

        </div>
    </div>
  )
}

export default TinderCards
