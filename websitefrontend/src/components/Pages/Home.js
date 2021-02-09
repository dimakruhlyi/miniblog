import React from "react";
import Header from "../Common/Header";

//Re-usable components
import TypesOfPhotos from "../Common/TypesOfPhotos";


export default class Home extends React.Component{
    render(){
        return(
            <>
                <Header 
                    title = "Welcome To Mini-Blog!"
                    subtitle = "This is my simple pet project"
                    buttonText = "Investigate Blog"
                    link = "/blog"
                    showButton = {true}
                    image = "/assets/img/header-bg.jpg"
                />
                <TypesOfPhotos />
            </>
        );
    }
}