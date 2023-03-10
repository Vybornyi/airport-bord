import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notification from '../Notification/Notification';

const Layout: React.FC = () => (
  <>
    <Header />
    <Notification />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
