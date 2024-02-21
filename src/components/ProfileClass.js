import React from "react";

class Profile extends React.Component{
    constructor(props){
         super(props);
      //creation of use state
         this.state={
          count:0,
      //inoreder to create another use state we gonna use the same this state and not create another this state
         count2:0,
         };
    }
    
    componentDidMount(){
      //API calls
      console.log("componentDidMount");
    }



     render(){
      var p=4;
       return <>
       <h1>Profile Class component</h1>
       <h2> Name : {this.props.name}</h2>
       <h2>Count:{this.state.count}</h2>
       <button onClick={()=>{this.setState({
        count:p++,
       });}}>
       setCount
       </button>
       </>
     }
}

export default Profile;