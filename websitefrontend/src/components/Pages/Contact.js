import React from "react";
import Field from "../Common/Field";
import {withFormik} from "formik";
import * as Yup from "yup";

const fields = {
    sections: [
        [
            {name: 'name', elementName: 'input', id: 'name', type: 'text', placeholder: 'Your Name *'},
            {name: 'email', elementName: 'input', id: 'email', type: 'email', placeholder: 'Your Email *'},
            {name: 'phone', elementName: 'input', id: 'phone', type: 'tel', placeholder: 'Your Phone *'},
        ],
        [
            {name: 'message', elementName: 'textarea', id: 'message', type: 'text', placeholder: 'Your Message *'},
        ]
    ]
}


class Contact extends React.Component{

    render(){
        return(
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form onSubmit = {this.props.handleSubmit} name="sentMessage" noValidate="novalidate">
                        <div className="row align-items-stretch mb-5">
                         {fields.sections.map((section, sectionIndex) => {
                             return(
                                 <div className = "col-md-6" key = {sectionIndex}>
                                     {section.map((field, index) =>{
                                         return(
                                             <Field 
                                                {...field}
                                                key = {index}
                                                value = {this.props.values[field.name]}
                                                name = {field.name}
                                                onChange = {this.props.handleChange}
                                                onBlur = {this.props.handleBlur}
                                                touched = {(this.props.touched[field.name])}
                                                errors = {this.props.errors[field.name]}
                                             />
                                         )
                                     })}
                                 </div>
                             )
                         })}
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button 
                                className="btn btn-primary btn-xl text-uppercase" 
                                id="sendMessageButton" 
                                type="submit"
                            >Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: ''
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Your name is too short!').required("You must give us your name."),
        email: Yup.string().email('Invalid email!').required("You must give us your email."),
        phone: Yup.string().min(10, 'The phone must have at least 10 symbols.').max(15, 'Your phone number is too long!').required("You must give us your phone."),
        message: Yup.string().min(10, 'Minimum characters is 10.').required("Message is required.")
    }),
    handleSubmit: (values, {setSubmitting}) => {
        alert("You've submitted the form!", JSON.stringify(values))
    }
})(Contact)