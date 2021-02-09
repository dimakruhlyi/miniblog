import React from "react";
import TableView from "../../Common/TableView";
import {connect} from "react-redux";
import * as AdminActions from "../../../store/actions/adminActions";

const columns = [
    {label: "ID", name: "id"},
    {label: "Email", name: "email"},
    {label: "Name", name: "name"}
]

class Users extends React.Component{
    componentDidMount(){
        this.props.getUsers(this.props.auth.token)
    }

    render(){
        const users = this.props.admin.users;
        return(
            <>
                <h1>Users!</h1>
                <TableView 
                    rows = {users}
                    columns = {columns}
                />
            </>
        )
    }
}

const mapStateToProps = state => {
    return{
        auth: state.auth,
        admin: state.admin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: token => {
            dispatch(AdminActions.getUsers(token));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)