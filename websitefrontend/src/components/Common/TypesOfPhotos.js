import React from "react";
import SingleType  from "./SingleType";

const services = [
    {icon: "fa-bicycle", title: "Sport", data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
    {icon: "fa-laptop", title: "Work", data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
    {icon: "fa-gift", title: "Holidays", data: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
]

export default class Services extends React.Component{
    render(){
        return(
            <>
                <section className="page-section" id="services">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Types of Photos</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row text-center">
                            {services.map((service, index) => {
                                return(
                                    <SingleType 
                                        icon = {service.icon}
                                        title = {service.title}
                                        data = {service.data}
                                        key = {index}
                                    />
                                )
                            })}
                           
                          
                        </div>
                    </div>
                </section>
            </>
        )
    }
}