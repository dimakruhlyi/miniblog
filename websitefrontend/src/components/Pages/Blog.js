import React from "react";
import {connect} from "react-redux";
import {withRouter, Link as RouterLink} from "react-router-dom";
import Header from "../Common/Header";
import * as SiteActions from "../../store/actions/siteActions";
import BlogItem from "../Common/BlogItem";

class Blog extends React.Component{
    componentDidMount(){
        this.props.getPosts(0);
        this.props.getPostCount();
    }

    render(){
        return(
            <>
            <div></div>
            <Header 
                title = "Blog Page"
                subtitle = "Read our blog"
                showButton = {false}
                image = "/assets/img/blog.jpg"
            />
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="row">
                    {this.props.site.posts ?
                        this.props.site.posts.length > 0 ?
                            this.props.site.posts.map((post, i) => {
                                return (
                                    <BlogItem
                                        post = {post}
                                        key = {i}
                                    />
                                )
                            })
                        :null
                    : null}
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <button className="btn btn-default" onClick = {e => {
                                    this.props.getPosts(this.props.site.posts.length);
                                }}>Load More</button>  
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        )
    }
}

const mapStateToProps = state => ({
    site: state.site
})

const mapDispatchToProps = dispatch => ({
    getPosts: (skip) => {
        dispatch(SiteActions.getPosts(skip));
    },
    getPostCount: () => {
        dispatch(SiteActions.getPostCount());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Blog))