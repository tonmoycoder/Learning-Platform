import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="Navbar_container  ">
      <div className="all-content py-2  flex items-center justify-between">
        <div className="left_part flex items-center">
          {/* image of website or logo */}
          <Link to="/">
            <div className="avatar">
              <div className="w-12 mr-4 rounded-xl">
                <img
                  src="https://play-lh.googleusercontent.com/XDiye8wlBGFoAkxAyoxB5mPidDLtvViBBA9-DXWPmD6NxltrhFFTdJK2Eiv_h7EvaFc"
                  alt="logo"
                />
              </div>
            </div>
          </Link>
          <p>FireShip.</p>
        </div>
        <div className="middle_part">
          <ul className="flex">
            <li className="px-5">
              <Link to="/">Courses</Link>
            </li>
            <li className="px-5">
              <Link to="/faq">FAQ</Link>
            </li>
            <li className="px-5">
              <Link to="/blog">Blog</Link>
            </li>

            <>
              {user?.uid ? (
                <>
                  <li className="px-5" onClick={handleLogOut}>
                    LogOut
                  </li>
                </>
              ) : (
                <>
                  <li className="px-5">
                    <Link to="/login">LogIn</Link>
                  </li>
                  <li className="px-5">
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </>
          </ul>
        </div>
        <div className="right_part flex items-center">
          <div className="form-control">
            <label className="label cursor-pointer mr-4">
              <span className="label-text mr-2">Theme</span>
              <input type="checkbox" className="toggle toggle-accent" />
            </label>
          </div>

          {/* user Image */}
          <div className="avatar online">
            <div className="w-14 rounded-full">
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="Avatar" />
              ) : (
                <img
                  src="https://assets.newglue.com/assets/avatar_placeholder-c4a9963ad86c68649100b476add586667aaaf4672a3dbfd6abf0e7338f4f5337.jpg"
                  alt="dummy Avatar"
                />
              )}
            </div>
          </div>
          {user?.uid && <span className="ml-5">{user?.displayName}</span>}
        </div>
      </div>
    </div>
  );
};

export default Header;
