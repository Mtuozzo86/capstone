import { useNavigate } from "react-router-dom";
import { MdOutlineWarningAmber } from "react-icons/md";
import { useState } from "react";

function Sidebar({ onHandlePageView, components, setOwnerWarning }) {
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
      <div>
        <li onClick={handleLogout} className="sidebar-logout">
          Log out
        </li>
        <div
          className="sidebar-warning"
          onClick={() => handleViews(setOwnerWarning)}
        >
          <MdOutlineWarningAmber />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
