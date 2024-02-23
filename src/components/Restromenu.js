import useRestaurantMenu from "../utils/useRestaurantmenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
   
 
const Restromenu=()=>{
     
    const {resId}=useParams();
  
    const resInfo=useRestaurantMenu(resId);
    
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