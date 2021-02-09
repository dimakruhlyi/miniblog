import React from 'react';
import './assets/css/admin.css';

class LoginWrapper extends React.Component {
    render(){
        return(
            <div className="admin-page">
                {this.props.children}
            </div>
        )
    }
}

export default LoginWrapper
