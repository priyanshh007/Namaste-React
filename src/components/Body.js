import Restrocard from "./Restrocard";
import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";


const Body=()=>{
 //state variable-super powerful variable
const [listofRestaurants,setlistofRestaurant] =useState([]);

const[filterres,setfilterres]=useState([]);

const [serchText,setserchText]=useState("");

useEffect(()=>{
 fetchData();
},[]);

const fetchData=async()=>{
   const data=await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=23.25470&lng=77.39370");
   const json=await data.json();
  // console.log(json.data);
  console.log(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants);
 setlistofRestaurant(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
 setfilterres(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
};

//conditional rendering
// if(listofRestaurants.length==0)
// {
//   return <Shimmer/>
// }


//conditional rendering done using ternary operator
 return listofRestaurants.length==0?(<Shimmer/>):(
        <div className="body">
        <div className="filter">
        <div className="serch">
          <input type="text" className="serch-box" value={serchText} 
          onChange={(e)=>{
              setserchText(e.target.value);
          }}>
            </input>
            <button  
            className="serch-btn"   
            onClick={()=>{
             let filteredrestaurant=
             listofRestaurants.filter((res)=>res?.info?.name?.toLowerCase().includes(serchText.toLowerCase()));
             setfilterres(filteredrestaurant);
            }}>
              serch
            </button>
        </div>
        {/* hooks set___ logic */}
         <button 
         className="filter-btn"
         onClick={()=>{
         const filteredList=listofRestaurants.filter((res)=>res.info.
         avgRating>4.2);
          setfilterres(filteredList)
           }}>
          Top Rated Restaurants
        </button>
         </div>
         <div className="res-container">
          {filterres.map((restaurant)=>(
           <Link 
           key={restaurant.info.id}
           to={"/restaurants/"+restaurant.info.id}>
           <Restrocard   resData={restaurant} />
           </Link>
          ))};
         </div>
     </div>)
 
};
export default Body;