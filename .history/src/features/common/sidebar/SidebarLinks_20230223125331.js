import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const SidebarLinks = () => {
  const location = useLocation();

  const links = [
    { id: 1, path: '/carlist', text: 'HOME' },
    { id: 2, path: '/reserve', text: 'RESERVE' },
    { id: 3, path: '/myreservations', text: 'MY RESERVATIONS' },
    { id: 4, path: '/newcar', text: 'ADD CAR' },
    { id: 5, path: '/deletecar', text: 'DELETE CAR' },
  ];
  return (
    <div className="sidebar-routes-links">
      {links.map((el) => (
        <NavLink
          to={el.path}
          key={el.id}
          id={location.pathname.includes(el.path) ? 'link_active' : ''}
        >
          {el.text}
        </NavLink>
      ))}
    </div>
  );
};

export default SidebarLinks;
