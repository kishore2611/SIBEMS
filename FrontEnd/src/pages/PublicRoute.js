import React from "react";
import { Route } from "react-router-dom";
import Authentication from "./Authentication";
import history from "./history";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  // console.log("component: ", props);

  // return (
  // restricted = false meaning public route
  // restricted = true meaning restricted route
  if (!Authentication.isLogin() && restricted) {
    // history.replace("/login");
    return <Component />;
  } else if (Authentication.isLogin() && restricted) {
    // console.log("adsfasdf    ", this.state.userLoggedIn);
    history.push("/Dashboard");
    return <Route path="/Dashboard" exact/>;
    //   return <Redirect to="/" />;
  }
  // if (Authentication.isLogin() && restricted) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={(props) => {
  //         console.log("props: ", props);
  //         return <Redirect to="/Dashboard" />;
  //         // return Authentication.isLogin() && restricted ? (
  //         //   <Redirect to="/Dashboard" />
  //         // ) : (
  //         //   this.props.history.replace("/LogIn");
  //         //   <Component {...props} />
  //         // );
  //       }}
  //     />
  //   );
  // } else {
  //   // history.replace(props.location.pathname);
  //   // return <Component {...props} />;
  //   <Route
  //       {...rest}
  //       render={(props) => {
  //         console.log("props: ", props);
  //         return <Component {...props} />;
  //         // return Authentication.isLogin() && restricted ? (
  //         //   <Redirect to="/Dashboard" />
  //         // ) : (
  //         //   this.props.history.replace("/LogIn");
  //         //   <Component {...props} />
  //         // );
  //       }}
  //     />
  // }
  // );
};

export default PublicRoute;
