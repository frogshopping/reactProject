import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export const NavbarComponent = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/staff">Staff</Link>
    </div>
  );
};
