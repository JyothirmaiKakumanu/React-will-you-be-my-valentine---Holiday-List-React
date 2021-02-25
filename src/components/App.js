
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ location:'location1',name: 'Goa', country: 'India' },
    { location:'location2',name: 'Amsterdam', country: 'Netherlands' },
    { location:'location3',name: 'New York', country: 'USA' },
    { location:'location4',name: 'Darjeeling', country: 'India' },
    { location:'location5',name: 'Tokyo', country: 'Japan' },
    { location:'location6',name: 'Lonavala', country: 'India' },
    { location:'location7',name: 'Brandenburg Gate', country: 'Germany' },
    { location:'location8',name: 'Reichstag Building', country: 'Germany' },
    { location:'location9',name: 'Museum Island', country: 'Germany' },
    { location:'location10',name: 'Munnar', country: 'India' },
    { location:'location11',name: 'Leh Ladakh', country: 'India' },
    { location:'location12',name: 'Goa', country: 'India' },
    { location:'location13',name: 'Agra', country: 'India' },
    { location:'location14',name: 'Dalhousie', country: 'India' },
    { location:'location15',name: 'Coorg', country: 'India' },
    { location:'location16',name: 'Rome', country: 'Italy' },
    { location:'location17',name: 'Milan', country: 'Italy' },
    { location:'location18',name: 'Venice', country: 'Italy' },
    { location:'location19',name: 'Varanasai', country: 'India' },
    { location:'location20',name: 'Jaipur', country: 'India' },
    { location:'location21',name: 'The Hofburg', country: 'Austria' },
    { location:'location22',name: 'Belvedere Palace', country: 'Austria' },
    { location:'location23',name: 'St. Stephen Cathedral', country: 'Austria' },
    { location:'location24',name: 'Kahna National Park', country: 'India' },
    { location:'location25',name: 'Amritsar', country: 'India' },
    { location:'location26',name: 'Mussoorie', country: 'India' },
    { location:'location27',name: 'Mount Abu', country: 'India' },
    { location:'location28',name: 'Tirupati', country: 'India' },
    ]
  }
  

  render() {
    // const cities = ['Goa','Amsterdam','New York', 'Darjeeling','Tokyo','Lonavala'];
    const cityArr = this.cityList.map(city=>{
      console.log(city,location);
      // const renderCity = 
      return <li key={city.location}>{city.name}</li>
    });

    return (
    
        
      <div id="main">
        {/* Do not remove the main div */}
        <ol>
          {cityArr}
        </ol>
      </div>
    )
  }
}


export default App;
