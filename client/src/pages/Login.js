import React, {useRef} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import {LOGIN} from "../utils/actions";
import { useStoreContext } from '../utils/GlobalState';

const Login = () => {
    const [state, dispatch] = useStoreContext();

    const history = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();
    //putting in local storage AND state
    const doLogin = async () => {
        //login user and get token back
        const { data } = await axios.post("/auth/login", {
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

        // redirecting user to the members page
        const redirect = () => history.push("/members");
        redirect();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        doLogin();
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <p>Login</p>
            <div>
              <div>
                <i data-test="fa"></i>
                <input
                  data-test="input"
                  type="email"
                  aria-disabled="false"
                  ref={emailRef}
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  id=""
                  aria-labelledby=""
                >
                  Type your email
                </label>
              </div>
              <div>
                <i data-test="fa"></i>
                <input
                  data-test="input"
                  type="password"
                  aria-disabled="false"
                  ref={passwordRef}
                />
                <label
                  data-error=""
                  data-success=""
                  id=""
                  aria-labelledby=""
                >
                  Type your password
                </label>
              </div>
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
    )
}

export default Login;