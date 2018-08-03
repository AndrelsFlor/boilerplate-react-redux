import React from 'react';
import { NavLink } from "react-router-dom"
const Navigation = () => {
    return (
        <div>
          <NavLink to="/">Home&nbsp;</NavLink>
          <NavLink to="/about">About&nbsp;</NavLink>
          <NavLink to="/contact">Contact&nbsp;</NavLink>
        </div>
    );
}

export default Navigation;