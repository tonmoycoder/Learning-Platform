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
    <div class="container">
      <div class="card">
        <div class="login-panel">
          <div class="login-with-google">
            <h4>Log in to your account</h4>
            <button class="btn btn-google">Log In with Google</button>
            <button class="btn btn-google">Log In with Github</button>
          </div>

          <div class="divider">
            <p>OR</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="login-with-email">
              <label for="">Email address</label>
              <input
                type="email"
                name="email"
                id=""
                class="form-control"
                placeholder="Enter your email address"
                aria-describedby="helpId"
                required
              />
            </div>
            <div class="login-with-email mt-3">
              <label for="">Password</label>
              <input
                type="password"
                name="password"
                id=""
                class="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
                required
              />
            </div>
            <p className='text-yellow-500 text-lg'>{error}</p>
            <button class="btn">Login</button>
          </form>

          <div class="link-container">
            <p>
              Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
          </div>
        </div>
        <div class="text-panel">
          <div class="text">
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
