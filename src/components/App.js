
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' },
    ]
    // this.filterCities();
  }
  
  
//   filterCities(){
//   console.log("Hi");
//   const filterCities = this.cityList.filter((city)=>{
//     // console.log("city"+city.name);
//     city.country==="India"
//     // console.log("heol");
//   })
//   // .map((filterCity)=>{
//     console.log(filterCities);
//     return (<li key={filterCities.key}>{filterCities}</li>);
//   // })
// }
  

  render() { 
    let  i=0;
    let filteredCities = this.cityList.filter((city)=>{
      return city.country=='India'
    })
    return(
      <div id="main">
        {/* Do not remove the main div */}
        <ol>
          {filteredCities.map((city)=>
            <li key={`location${i+1}`}>{city.name}</li>
          )}
        </ol>
      </div>
    )
  
}
}


export default App;
