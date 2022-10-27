import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';



const Register = () => {
  const [error, setError] = useState('');
  const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError('');
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success('Please verify your email address.');
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="container">
        <div className="card_custom">
          <div className="login-panel">
           
            <form onSubmit={handleSubmit}>
              <div className="login-with-email mb-2 mt-2">
                <label htmlFor="">Your name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter your nickname"
                  aria-describedby="helpId"
                />
              </div>
              <div className="login-with-email mb-2">
                <label htmlFor="">Photo Url</label>
                <input
                  type="text"
                  name="photoURL"
                  className="form-control"
                  placeholder="Enter your photo url"
                  aria-describedby="helpId"
                />
              </div>
              <div className="login-with-email mb-2">
                <label htmlFor="">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  aria-describedby="helpId"
                  required
                />
              </div>
              <div className="login-with-email mb-3">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  aria-describedby="helpId"
                  required
                />
              </div>
              <p className="text-yellow-500 text-lg">{error}</p>
              <button className="btn">Register</button>
            </form>

            <div className="link-container">
              <p>
                Already have an account? <Link to="/register">Login</Link>
              </p>
            </div>
          </div>
          <div className="text-panel">
            <div className="text">
              <h3>Hurry up!!! Your course waiting for you.. 🙂</h3>
              <p>
                Don't worry!!! you're safe because we use Firebase for authentication.If you trust
                google,you can trust us. 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
