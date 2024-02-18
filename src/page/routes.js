
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomepageComponent } from "./page/HomepageComponent";
import { MenuComponent } from "./page/MenuComponent";
import { StaffComponent } from "./page/StaffComponent";
// import { NavbarComponent } from "./page/navbar";
export const RouterComponent = () => {
  return (
    <div>
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/staff">Staff</Link>
        </div>
        <Routes>
          <Route path="/" element={<HomepageComponent />} />
          <Route path="/menu" element={<MenuComponent />} />
          <Route path="/staff" element={<StaffComponent />} />
          <Route path="*" element={"page not found"} />
        </Routes>
      </Router>
    </div>
  );
};

