import React from "react";
import Header from "../Common/Header"

export default class About extends React.Component{
    render(){
        return(
            <>
              <Header 
                    title = "About us"
                    subtitle = "It's really a great blog"
                    showButton = {false}
                    image = "/assets/img/about.jpg"
                />
               
            </>
            
        );
    }
}