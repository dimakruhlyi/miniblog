import React from "react";
import API from "../../utils/api";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as SiteActions from "../../store/actions/siteActions";

class BlogItem extends React.Component{
    render(){
        return (
            <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
                <Link 
                    className="portfolio-link" 
                    to = {`/blog/${this.props.post.slug}`}
                    onClick = {this.props.setPostData(this.props.post)}
                >
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    {this.props.post.PostImage ?
                        this.props.post.PostImage.length > 0 ?
                            <img className="img-fluid" style = {{width: '100%'}} src={API.makeFileURL(this.props.post.PostImage[0].thumbnail, null)} alt="" />
                        : null
                    : null}
                    
                </Link>
                <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{this.props.post.title}</div>
                    <div className="portfolio-caption-subheading text-muted">{this.props.post.slug}</div>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    setPostData: (post) => {
        dispatch(SiteActions.setPostData(post));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogItem)