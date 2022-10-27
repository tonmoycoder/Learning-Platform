import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './LogIn.css';

const LogIn = () => {
  const [error, setError] = useState('');
  const { signIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
        navigate(from, { replace: true });
        toast.success('Yayy! Successfully logged In');
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="container">
      <div className="card">
        <div className="login-panel">
          <div className="login-with-google">
            <h4>Log in to your account</h4>
            <button  className="btn btn-google">Log In with Google</button>
            <button className="btn btn-google">Log In with Github</button>
          </div>

          <div className="divider">
            <p>OR</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="login-with-email">
              <label >Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                aria-describedby="helpId"
                required
              />
            </div>
            <div className="login-with-email mt-3">
              <label >Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                aria-describedby="helpId"
                required
              />
            </div>
            <p className='text-yellow-500 text-lg'>{error}</p>
            <button className="btn">Login</button>
          </form>

          <div className="link-container">
            <p>
              Don't have an account? <Link to="/register">Sign Up</Link>
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
  );
};

export default LogIn;
