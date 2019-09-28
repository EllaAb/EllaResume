import React from "react";
import  "./ResHeader.css";
import Education from './Education';
import Experiance from './Experiance';
import Contact from './Contact';


class App extends React.Component{

    render(){
              return (
                           <div className="container">                     
                           <div className="Res-Header">
                           <h1 className="Name-Res"> Ella Abraham 
                        
                           </h1>                                                     
                           </div>
                          <Education />
                          <Experiance />
                          <Contact />

       
                        </div>
        
        );

    };
}


export default App;