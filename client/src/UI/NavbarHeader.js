import './NavbarHeader.css'

function NavbarHeader({children, style}) {

  return <div className={`nav-header ${style}`}>{children}</div>
}

export default NavbarHeader