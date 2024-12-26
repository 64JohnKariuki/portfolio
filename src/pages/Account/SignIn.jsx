import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets/images";
import Cookies from 'js-cookie';
// import FacebookLogin from 'react-facebook-login';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// Initialize Firebase (make sure to replace with your own config)
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };
// 
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// 
// const responseFacebook = (response) => {
//   console.log(response);
//   // Handle Facebook login response
// };

// const handleGoogleLogin = async () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   try {
//     const result = await firebase.auth().signInWithPopup(provider);
//     const token = result.credential.accessToken;
//     const user = result.user;
//     // Set cookie or handle user data
//     Cookies.set('token', token);
//     setSuccessMsg(`Welcome ${user.displayName}`);
//   } catch (error) {
//     console.error(error);
//     setErrEmail("Failed to login with Google");
//   }
// };

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/userSignIn', {});
      const data = await response.json();
      if (response.ok) {
        // Assuming the backend returns a token in the response
        const token = data.token;
        const expirationTime = 1; // Set expiration time in days
        Cookies.set('token', token, { expires: expirationTime });
        setSuccessMsg(`Login successful. Welcome, ${email}!`);
      } else {
        throw new Error(data.message || 'Failed to login');
      }
    } catch (error) {
      console.error(error);
      setErrEmail("Failed to login");
    } finally {
      setLoading(false);
    }
  };
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  // ============= Event Handler End here ===============
  const register = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Enter your email");
    }

    if (!password) {
      setErrPassword("Create a password");
    }
    // ============== Getting the value ==============
    if (email && password) {
      setSuccessMsg(
        `Hello dear, Thank you for your attempt. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
      );
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="container h-screen flex items-center justify-center">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={logo} alt="logoImg" className="w-28" />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">
              Stay sign in for more
            </h1>
            <p className="text-base">When you sign in, you are with us!</p>
          </div>
          <div className="flex flex-col gap-3">
            <button
              // onClick={handleGoogleLogin}
              className="bg-red-500 text-white rounded-md h-10"
            >
              Sign in with Google
            </button>
            
          </div>
          {successMsg && (
            <p className="text-green-500">{successMsg}</p>
          )}
          {errEmail && (
            <p className="text-red-500">{errEmail}</p>
          )}
        </div>
      </div>
      <div className="w-full lgl:w-1/2 h-full">
        <div className="w-full h-full flex items-center justify-center">
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-email">
                  Email
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmail}
                  required
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                  Password
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password"
                  type="password"
                  placeholder="******************"
                  value={password}
                  onChange={handlePassword}
                  required
                />
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
