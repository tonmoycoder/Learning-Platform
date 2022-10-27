import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Pages/Header/Header';
import SideNav from '../Components/Shared/SideNav/SideNav';
import './Main.css'

const Main = () => {

  return (
    <>
      <Header></Header>
      <div className="container_all flex ">
        <div className="left_side">
          <SideNav></SideNav>
        </div>
        <div className="right_side">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Main;
