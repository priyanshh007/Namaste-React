import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
 
const Restromenu=()=>{
     
    const [resInfo,setresInfo]=useState(null);

    const {resId}=useParams();
  
     useEffect(()=>{
       fetchMenu();
     },[]);

     const fetchMenu=async()=>{
       const data = await fetch(MENU_API+resId);
       

       const json = await data.json();
       setresInfo(json.data);

     // console.log(json?.data?.cards[2]?.card?.card?.info?.name);
     //console.log(resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards);
     // console.log(resInfo);

    };
    
     if(resInfo==null)
     {
       return <Shimmer/>;
     };

     const {name,cuisines,costForTwoMessage,avgRating}= resInfo?.cards[2]?.card?.card?.info;

      // const {p}=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards;
      
      console.log(resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards);
      

    return (
         <div className="menu">
            <h1>{name}</h1>
         <p>
         {cuisines.join(",")}
         </p>    
         <h2>Menu</h2>
         <ul>
             {resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards.map((item)=>(<li>{item.card.info.name}
            </li>))} ;
      
         </ul>
        </div>
    )
};

export default Restromenu;