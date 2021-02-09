import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Dasboard extends React.Component {
    render(){
        return(
            <h1>You're logged in with token: {this.props.auth.token}</h1>
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
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Dasboard))