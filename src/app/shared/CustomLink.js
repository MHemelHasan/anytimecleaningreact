import React from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavLink
      className={`${match} ${
        match ? "text-emerald-500 font-semibold" : "text-black"
      } block py-2 px-4 hover:text-emerald-500`}
      to={to}
      {...props}
    >
      {children}
    </NavLink>
  );
}

export default CustomLink;
