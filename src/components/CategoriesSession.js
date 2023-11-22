import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getCategory } from '../api/api';

export const CategoriesSession = () => {
  const { sessions } = useParams();
  const data = getCategory(sessions);

  const navLinkStyles = ({ isActive }) => {
    return {
      border: isActive ? '2px solid #5F9EA0' : '2px solid black',
      color: isActive ? '#5F9EA0' : 'gray',
    };
  };

  return (
    <>
      {data ? (
        <>
          <h2>{data.name}</h2>
          <div className="div-as-button">
            {data.sessions.map((session) => (
              <NavLink
                to={session.id}
                style={navLinkStyles}
                className='button-session'
                key={session.id}
              >
                <p className="bold-size">{session.name}</p>
                <p>{session.id}</p>
              </NavLink>
            ))}
          </div>
        </>
      ) : (
        <p>Loading or no data available...</p>
      )}
      <Outlet />
    </>
  );
};
