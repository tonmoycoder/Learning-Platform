import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="Navbar_container bg-slate-500 ">
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
              <Link to="/">FAQ</Link>
            </li>
            <li className="px-5">
              <Link to="/">Blog</Link>
            </li>
            <li className="px-5">
              <Link to="/login">LogIn</Link>
            </li>
            <li className="px-5">
              <Link to="/register">Register</Link>
            </li>
            <li className="px-5">
              <Link to="/">LogOut</Link>
            </li>
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
              <img src="https://placeimg.com/192/192/people" alt="Avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
