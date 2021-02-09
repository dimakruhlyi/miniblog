import React from "react";
import TableView from "../../Common/TableView";
import {withStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import * as AdminActions from "../../../store/actions/adminActions";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import {Link as RouterLink} from "react-router-dom";
import Link from "@material-ui/core/Link";

const columns = [
    {label: "ID", name: "id"},
    {label: "Title", name: "title"},
];

const styles = theme =>({
    fab: {
        position: 'fixed',
        bottom: '50px',
        right: '50px',
    }
});

class Posts extends React.Component{
    componentDidMount(){
        this.props.getPosts(this.props.auth.token)
    }
    render(){
        const posts = this.props.admin.posts;
        const {classes} = this.props;
        return(
            <>
            <h1>Posts!</h1>
            <TableView 
                rows = {posts}
                columns = {columns}
            />
            <Fab component = {RouterLink} to = "/admin/posts/add" color = 'secondary' aria-label = 'Add' className = {classes.fab}>
                <EditIcon />
            </Fab>
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
        getPosts: token => {
            dispatch(AdminActions.getPosts(token));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Posts))