import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
//   const [errorMessage, setErrorMessage] = useState('');
//   const [success, setSuccess] = useState(false);
//   const [userEmail, setUserEmail] = useState('');

//   const handleLogIN = (event) => {
//     event.preventDefault();
//     setSuccess(false);
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     signInWithEmailAndPassword(auth, email, password)
//       .then((result) => {
//         const user = result.user;
//         setSuccess(true);
//         console.log(user);
//         form.reset();
//       })
//       .catch((error) => {
//         console.error(error);
//         setErrorMessage(error);
//       });
//   };

//   const handleEmail = (event) => {
//     const email = event.target.value;
//     console.log(email);
//     setUserEmail(email);
//   };

//   const handleResetPass = () => {
//     if (!userEmail) {
//       alert('Please enter your email address.');
//       return;
//     }
//     sendPasswordResetEmail(auth, userEmail)
//       .then(() => {
//         alert('Password Reset email sent. Please check your email.');
//       })
//       .catch((error) => {
//         console.log(error);
//         setErrorMessage(error);
//       });
//   };
  return (
    <div className="App py-10">
      <div className="form-control pb-5  bg-slate-400 rounded-lg w-1/4 mx-auto">
        <h3 className="text-2xl text-blue-700 my-3">Please LogIn here</h3>
        <form >
          <input
            // onBlur={handleEmail}
            type="email"
            name="email"
            required
            placeholder="Type Email here"
            className="input input-bordered input-primary border-2 rounded-lg p-3  w-full max-w-xs"
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            required
            placeholder="Type Password here"
            className="input border-2 rounded-lg p-3 input-bordered input-primary w-full max-w-xs"
          />
          <br />
          {/* <p className="text-red-600 text-lg font-bold">{errorMessage}</p>
          {success && (
            <p className="text-indigo-700 text-lg font-bold">User successfully logged in</p>
          )} */}
          <button className="btn btn-primary p-4 mt-4" type="submit">
            LogIn
          </button>
        </form>
        <p className="text-blue-600 text-xl mt-3">
          If you didn't Register yet,{' '}
          <Link to="/register">
            <span className="underline-offset-2 underline text-orange-800">Register</span>
          </Link>{' '}
          now
        </p>
        <p className="text-blue-600 text-xl mt-3">
          If you Forget your password,{' '}
          <button  className="underline-offset-2 underline text-white">
            Reset Password
          </button>{' '}
          now
        </p>
      </div>
    </div>
  );
};

export default LogIn;
