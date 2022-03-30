import { useNavigate } from "react-router-dom";
function Sidebar({ onHandlePageView, components }) {
  const {
    setIsEditting,
    setOpenCalendar,
    setLandingPageContainer,
    setOwnerProfile,
  } = components;
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(navigate("/"));
  }
  const navigate = useNavigate();

  function handleViews(component) {
    console.log(component);
  }

  return (
    <div className="sidebar">
      <div className="sidebar-nav">
        <li onClick={() => handleViews(setLandingPageContainer)}>Dashboard</li>
        <li onClick={() => handleViews(setIsEditting)}>Address</li>
        <li onClick={() => handleViews(setOpenCalendar)}>Calendar</li>
        <li onClick={() => handleViews(setOwnerProfile)}>Profile</li>
      </div>
      <li onClick={handleLogout} className="sidebar-logout">
        Log out
      </li>
    </div>
  );
}

export default Sidebar;
