import React from "react";
import PageWrapper from "./components/PageWrapper";
import AdminWrapper from "./components/AdminWrapper";
import LoginWrapper from "./components/LoginWrapper";
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";

//Pages
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Login from "./components/Pages/Login";
import Blog from "./components/Pages/Blog";
import Single from "./components/Pages/Single";
import Signup from "./components/Pages/Signup";
import Footer from "./components/Common/Footer";

//Admin Pages
import Dashboard from "./components/Pages/Admin/Dashboard";
import Users from "./components/Pages/Admin/Users";
import Posts from "./components/Pages/Admin/Posts";
import AddPost from "./components/Pages/Admin/AddPost";

class App extends React.Component {
  render(){
    return (
      <>
       <Router>
          <Route
            path = "/admin/users"
            render = {props => {
              return(
               <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <Users />
                  </AdminWrapper>
                  : 
                  <LoginWrapper>
                      <Login />
                  </LoginWrapper> 
                  
                }  
               </div>
              )
            }}
          />
           <Route
           exact = {true}
            path = "/admin/posts"
            render = {props => {
              return(
               <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <Posts />
                  </AdminWrapper>
                  : 
                  <LoginWrapper>
                      <Login />
                  </LoginWrapper> 
                  
                }  
               </div>
              )
            }}
          />
          <Route
            path = "/admin/posts/:view"
            exact = {true}
            render = {props => {
              return(
               <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <AddPost />
                  </AdminWrapper>
                  : 
                  <LoginWrapper>
                      <Login />
                  </LoginWrapper> 
                  
                }  
               </div>
              )
            }}
          />
            <Route
            path = "/admin/posts/:view/:id"
            exact = {true}
            render = {props => {
              return(
               <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <AddPost />
                  </AdminWrapper>
                  : 
                  <LoginWrapper>
                      <Login />
                  </LoginWrapper> 
                  
                }  
               </div>
              )
            }}
          />
          {console.log('Token', this.props.auth.token)}
          <Route
            exact = {true}
            path = "/signup"
            render = {props => {
              if(this.props.auth.token){
                return (
                  <Redirect to = "/" />
                )
              }else {
                return(
                  <LoginWrapper>
                    <Signup />
                  </LoginWrapper> 
                )
              }
            }}
          />

          <Route 
            exact = {true}
            path = "/admin"
            render = {props => {
              return(
               <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <Dashboard />
                  </AdminWrapper>
                  : 
                  <LoginWrapper>
                      <Login />
                  </LoginWrapper> 
                  
                }  
               </div>
              )
            }}
          />
          <Route 
            exact = {true}
            path = "/"
            render = {props => (
              <PageWrapper>
                <Home {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
           <Route 
            exact = {true}
            path = "/blog/:slug"
            render = {props => (
              <PageWrapper>
                <Single {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route
           exact = {true} 
            path = "/blog"
            render = {props => (
              <PageWrapper>
                <Blog {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            path = "/about"
            render = {props => (
              <PageWrapper>
                <About {...props} />
                <Footer />
              </PageWrapper>
            )}
          />
          <Route 
            path = "/contact"
            render = {props => (
              <PageWrapper>
                <Contact {...props} />
                <Footer />
              </PageWrapper>
            )}
          /> 
        </Router>
      </>   
    );
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
)(App);
