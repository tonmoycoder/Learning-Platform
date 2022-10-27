import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);
    const handleRegister = (event) => {
      event.preventDefault();
      setSuccessMessage(false);
      const form = event.target;
      const email = form.faltumail.value;
      const name = form.name.value;
      const password = form.secret.value;
      console.log(name,email, password);
      if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        setErrorMessage('Please provide at least two Capital character');
        return;
      }
      if (!/(?=.*[!@#$&*])/.test(password)) {
        setErrorMessage('Please provide at least one Special character');
        return; // return na korle firebase problem korbe. akhan theke return korle false hole ar age jabe na
      }
      if (password.length < 6) {
        setErrorMessage('Password must be 6 character');
        return;
      }
  
      setErrorMessage('');
  
    /*   createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          setSuccessMessage(true);
          console.log(user);
          form.reset();
          EmailVerifications();
          updateUserName(name);
        })
        .catch((error) => {
          console.error('error message : ', error);
          setErrorMessage(error.message);
        });
    };
  
    const EmailVerifications = () => {
      sendEmailVerification(auth.currentUser).then(() => {
        alert('Verification Email link sent');
      });
    };
  
    const updateUserName = (name) => {
      updateProfile(auth.currentUser,{
        displayName: name
      })
      .then(() => {
        console.log('display name updated')
      })
      .catch(error => {
        console.log(error);
      })
    } */
  
    // const handleEmailBlur = (event) => {
    //   console.log(event.target.value);
    // };
    // const handlePasswordBlur = (event) => {
    //   console.log(event.target.value);
    // };
}
  
    return (
      <div className="App py-10">
        <div className="form-control pb-5  bg-orange-400 rounded-lg w-1/4 mx-auto">
          <h3 className="text-2xl text-blue-700 my-3">Please Register here</h3>
          <form onSubmit={handleRegister}>
            <input
              // onBlur={handleEmailBlur}
              type="email"
              name="faltumail"
              required
              placeholder="Enter Email here"
              className="input input-bordered input-primary border-2 rounded-lg p-3  w-full max-w-xs"
            />
            <br />
            <br />
            <input
              // onBlur={handleEmailBlur}
              type="text"
              name="name"
              required
              placeholder="Enter Name here"
              className="input input-bordered input-primary border-2 rounded-lg p-3  w-full max-w-xs"
            />
            <br />
            <br />
            <input
              // onBlur={handlePasswordBlur}
              type="password"
              name="secret"
              required
              placeholder="Enter Password here"
              className="input border-2 rounded-lg p-3 input-bordered input-primary w-full max-w-xs"
            />
            <br />
            <p className="text-red-600 text-lg font-bold">{errorMessage}</p>
            {successMessage && (
              <p className="text-indigo-700 text-lg font-bold">User created successfully</p>
            )}
            <button className="btn btn-primary p-4 mt-4" type="submit">
              Register
            </button>
          </form>
          <p className="text-blue-600 text-xl mt-3">
            If you already have an account,{' '}
            <Link to="/login">
              <span className="text-green-700 underline-offset-2 underline">Login</span>{' '}
            </Link>{' '}
            now
          </p>
        </div>
      </div>
    );
  };

export default Register;