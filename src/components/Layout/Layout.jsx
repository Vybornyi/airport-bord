import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
