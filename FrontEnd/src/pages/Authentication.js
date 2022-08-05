import React from "react";
import { Route } from "react-router-dom";
import LogIn from "./Login";
import SignUp from "./SignUp";
import Greeting from "./Greeting";
import LandingPage from "./LandingPage";
// import SignInPage from "./SignIn";
class Authenticated extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false,
      screen: "",
      status: false,
    };
  }

  componentWillMount() {
    // console.log("params: ", window.location);
    console.log("history: ", this.props.history.location);
    const screenSet = this.props.history.location.state;
    // console.log(localStorage.getItem("loggedIn"));
    if (localStorage.getItem("User_Data")) {
      this.setState({ userLoggedIn: true });
    }
    if (screenSet) {
      this.setState({ screen: screenSet.screen });
    }
  }

  checkPage = (data) => {
    // console.log("data in Authen: ", data);
    this.setState({ screen: data });
  };

  // componentDidUpdate() {
  //   if (this.state.screen) {
  //     this.setState({ screen: true });
  //   }
  // }

  render() {
    if (!this.state.userLoggedIn) {
      // console.log("history: ", this.state.screen);
      if (this.state.screen === "SignUp") {
        this.props.history.replace("/SignUp");
        return (
          <SignUp handleScreen={this.checkPage} a={this.state.userLoggedIn} />
        );
      } else if (this.state.screen === "LogIn") {
        this.props.history.replace("/LogIn");
        return (
          <LogIn handleScreen={this.checkPage} a={this.state.userLoggedIn} />
        );
      } else if (this.state.screen === "LandingPage") {
        this.props.history.replace("/LandingPage");
        return (
          <LandingPage
            handleScreen={this.checkPage}
            a={this.state.userLoggedIn}
          />
        );
      } else {
        this.props.history.replace("/");
        return (
          <Greeting handleScreen={this.checkPage} a={this.state.userLoggedIn} />
        );
      }
    } else if (localStorage != null) {
      console.log("adsfasdf    ", this.state.userLoggedIn);
      this.props.history.push("/Dashboard");
      return <Route {...this.props} />;
      //   return <Redirect to="/" />;
    }
  }
}

export default Authenticated;

// import React, { useState, useEffect } from "react";
// // import { firebaseAuth } from "../firebase";
// import { Redirect } from "react-router-dom";

// const Authenticated = (props) => {
//   const [loggedIn, setloggedIn] = useState(false);
//   //   localStorage.getItem((user) => {
//   //     if (user) {
//   //       setloggedIn(true);
//   //     } else {
//   //       setloggedIn(false);
//   //     }
//   //   });
//   if (localStorage.getItem("user")) {
//     console.log(localStorage.getItem("value"));
//     setloggedIn(true);
//   } else {
//     setloggedIn(false);
//   }

//   //   // useEffect(() => {
//   //   //   // console.log(localStorage.getItem("loggedIn"));
//   //   //   if (localStorage.getItem("user")) {
//   //   //     setloggedIn({ loggedIn: localStorage.getItem("user") }, () =>
//   //   //       console.log(loggedIn)
//   //   //     );
//   //   //   }
//   //   // }, []);

//   //   // render() {
//   //   //   if (!this.state.userLoggedIn) {
//   //   //     this.props.history.replace(`/login`);
//   //   //     return <Login />;
//   //   //   }
//   //   //   return <Route {...this.props} />;
//   //   // }

//   //   // if (loggedIn == null) {
//   //   //   return "Loading...";
//   //   // } else if (loggedIn) {
//   //   //   return props.children;
//   //   // } else if (!loggedIn) {
//   //   //   return <Redirect to="/login" />;
//   //   // }

//   if (props.nonAuthenticated) {
//     console.log(props.nonAuthenticated);
//     if (loggedIn == null) {
//       return "Loading...";
//     } else if (!loggedIn) {
//       return props.children;
//     } else if (loggedIn) {
//       return <Redirect to="/" />;
//     }
//   } else {
//     if (loggedIn == null) {
//       return "Loading...";
//     } else if (loggedIn) {
//       return props.children;
//     } else if (!loggedIn) {
//       return <Redirect to="/login" />;
//     }
//   }
// };

// export default Authenticated;
