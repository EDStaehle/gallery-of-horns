import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component{
  render(){
    return(
      <main>
        <HornedBeast
         title = "Horned Owl" 
         imgUrl = "https://images.unsplash.com/photo-1469297677538-c7312a64dbe8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        description = 'horned owl'
         />
        <HornedBeast 
        title = "Horned Sheep" 
        imgUrl = "https://modernfarmer.com/wp-content/uploads/2014/08/bighornsheep12001.jpg"
        description = "horned sheep"
        />
        <HornedBeast 
        title = "African Buffalo" 
        imgUrl = "https://www.activewild.com/wp-content/uploads/2022/05/African-buffalo-cape-buffalo.jpg"
        description = "African Buffalo"
        />
        
      </main>
    )
  }
}
export default Main;