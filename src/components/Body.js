import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    
       //Local state varible = super powerful varible
       const [Rlist, setRlist] = useState(resList);  // Array destructuring

        // normal js varible

    // let Rlist = [

    //     {           
    //         data: {              
    //           id: '121602',
    //           name: 'Kannur Food Point',                           
    //           cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
    //           cuisines: ['Kerala', 'Chinese'],              
    //           costForTwo: 30000,             
    //           deliveryTime: 24,              
    //           avgRating: '3.9',               
    //         },            
    //       },

    //       {           
    //         data: {              
    //           id: '121603',
    //           name: 'Lokesh Food Point',                           
    //           cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
    //           cuisines: ['Kerala', 'Chinese'],              
    //           costForTwo: 30000,             
    //           deliveryTime: 24,              
    //           avgRating: '4.5',               
    //         },            
    //       },
          
    //     ];
    return (
      <div className="body">
        <div className="search-container">
          <input type="text" placeholder="Search Food or Restaurant" />
          <button>Search</button>
        </div>
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
               // filter logic
              const FRlist = Rlist.filter(
                (res)=>res.data.avgRating > 4
               );
               setRlist(FRlist);
                }}>Top rated</button>
        </div>
        <div className="res-container">
         
  
          {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}
  
          {Rlist.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
  
          {/* // * or */}
  
          {/* // * We can also use index as the key to the JSX child elemnt - which is the 2nd parameter of the map() method, but is not a recommended practice - react official Docs declared this/}
  
          {resList.map((restaurant, index) => (
            <RestaurantCard key={index} resData={restaurant} />
          ))}
  
          {/* // * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
           */}
        </div>
      </div>
    );
  };

  export default Body;