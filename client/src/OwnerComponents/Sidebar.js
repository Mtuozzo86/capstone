import { useNavigate } from "react-router-dom";
function Sidebar({ onHandlePageView, components }) {
  const clickComponent = components.map((component, index) => {
    return (
      <li key={index} onClick={() => handleViews(component.comp)}>
        {component.clickName}
      </li>
    );
  });

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(navigate("/"));
  }
  const navigate = useNavigate();

  function handleViews(component) {
    onHandlePageView(component);
  }

  return (
    <div className="sidebar">
      <div className="sidebar-nav">{clickComponent}</div>
      <li onClick={handleLogout} className="sidebar-logout">
        Log out
      </li>
    </div>
  );
}

export default Sidebar;
