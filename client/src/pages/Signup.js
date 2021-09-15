import React, {useRef} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import {LOGIN} from "../utils/actions";
import { useStoreContext } from '../utils/GlobalState';

const Signup = () => {
    const [state, dispatch] = useStoreContext();
    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();
    const history = useHistory();

    const doLogin = async () => {
        //login user and get token back
        const { data } = await axios.post("/dologin", {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        });
        //once we have data/token
        console.log(data);
        //putting that token in local storage using stringify (parse to get back)
        localStorage.setItem("authuser", JSON.stringify(data));
    
        //putting token in state
        dispatch({
          type: LOGIN,
          user: data,
        });
      };
    
    const doSignup = async () => {
        console.log(
          "USER",
          usernameRef.current.value,
          "EMAIL",
          emailRef.current.value,
          "PW",
          passwordRef.current.value
        );
        // sign up new user
        const { data } = await axios.post("/dosignup", {
          username: usernameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        });
    
        doLogin();
    
        // redirecting user to the members page
        const redirect = () => history.push("/products");
        redirect();
    
        console.log(data);
    };
    
    const handleSignup = (e) => {
        e.preventDefault();
        doSignup();
    };

    return (
        <div className="signup">
            <form className="signup__form" onSubmit={handleSignup}>
            <h2 className="signup__header">Sign up</h2>
            <div>
              <div className="signup__input">
                <i data-test="fa"></i>
                <input
                  data-test="input"
                  type="text"
                  className="signup__text"
                  aria-disabled="false"
                  ref={usernameRef}
                  required
                  placeholder="username"
                />
              </div>
              <div className="signup__input">
                <i data-test="fa"></i>
                <input
                  data-test="input"
                  type="email"
                  className="signup__text"
                  aria-disabled="false"
                  ref={emailRef}
                  placeholder="email"
                  required
                />
              </div>
              <div className="signup__input">
                <i data-test="fa"></i>
                <input
                  data-test="input"
                  type="password"
                  className="signup__text"
                  aria-disabled="false"
                  ref={passwordRef}
                  placeholder="password"
                  required
                />
              </div>
            </div>
            <div>
              <button
                color="primary"
                type="submit"
                className="signup__btn"
                // onClick={() => history.push("/members")}
              >
                Register
              </button>
            </div>
          </form>
        </div>
    )
}

export default Signup;