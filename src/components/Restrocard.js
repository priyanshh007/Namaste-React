import Body from "./Body";
const Restrocard=(props)=>{
    const{resData}=props;
    const{
        name,
        cuisines,
        costForTwo,
        avgRating,
        cloudinaryImageId,
        Id,
         }=resData?.info;
        
 return( <div className="res-card">
        <img className="res-logo"  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"+cloudinaryImageId}></img>
        <div className="card-name">
            
                <h3> 
               {name}
              </h3>
        </div>
        <div className="card-details">
        <div className="cuisines"><h4><span>{cuisines.join(",")}</span></h4></div>
        <div><h5>{costForTwo}</h5></div>
        <div><h5>{avgRating} stars</h5></div>       
        </div>
    </div>)
}

export default Restrocard;