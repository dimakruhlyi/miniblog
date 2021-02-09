import React from 'react';
import Field from "../Common/Field";
import { withFormik } from "formik";
import {connect} from 'react-redux';
import * as Yup from "yup";
import * as AuthActions from "../../store/actions/authActions";

const fields = [
    {name: 'email', elementName: 'input', id: 'email', type: 'email', placeholder: 'Your Email'},
    {name: 'name', elementName: 'input', id: 'name', type: 'text', placeholder: 'Your Name'},
    {name: 'password', elementName: 'input', id: 'password', type: 'password', placeholder: 'Your Password'},
    {name: 'password2', elementName: 'input', id: 'password2', type: 'password', placeholder: 'Repeat your Password'},
]

class Signup extends React.Component{
    render(){
        return(
            <div className="login-page">
                <div className="container">
                    <div className="login-form">
                        <div className="row">
                            <h1>Sign up</h1>
                        </div>
                        <div >
                            <form className="row" onSubmit = {e => {
                                e.preventDefault();
                                this.props.register(this.props.values.name, this.props.values.email, this.props.values.password);
                            }}>
                                {fields.map((f, i) => {
                                    return(
                                        <div className="col-md-6" key = {i}>
                                        <Field 
                                            {...f}
                                            value = {this.props.values[f.name]}
                                            name = {f.name}
                                            onChange = {this.props.handleChange}
                                            onBlur = {this.props.handleBlur}
                                            touched = {(this.props.touched[f.name])}
                                            errors = {this.props.errors[f.name]}
                                        />
                                        </div>
                                    )
                                })}
                                <div className="col-md-12">
                                    <p className="text-danger text-center">{this.props.auth.error || ''}</p>
                                    <button className="btn btn-primary">Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: (name, email, pass) => {
            dispatch(AuthActions.register(name, email, pass))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: () => ({
        email: '',
        name: '',
        password: '',
        password2: ''
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name field is required'),
        email: Yup.string().email('Email is invalid.').required('You need to login with email address.'),
        password: Yup.string().min(6, 'Password must be at least 6 characters long').required('You need to enter your password.'),
        password2: Yup.string().required('You need to enter your password again.').test('pass-match', 'Passwords don\'t match!', function(value){
            const {password} = this.parent;
            return password === value;
        })
    }),
    handleSubmit: (values, {setSubmitting}, login) => {
        console.log("Login attempt", values);
        //login(values.email, values.password);
        login(values.email, values.password);
    }
})(Signup));