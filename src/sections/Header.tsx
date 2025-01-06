import { NavLink } from "react-router-dom"

export const HeaderSection = () => {
  return (
    <div className="header">
      {/*<img className="metakgp-logo=metakgp-logo-one-line" src={MetaKGPLogoOneLine} width="150rem" />*/}
        <NavLink to="/">
          <h1 className="metakgp-logo" data-set="metaKGP">
            <span className="bold">meta</span><span className="black">KGP</span>
          </h1>
        </NavLink>
      
      <nav className="nav-bar">
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-element active" : "nav-element"
          }>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-element active" : "nav-element"
          }>
          Projects
        </NavLink>
        <NavLink to="/contribute" className={({ isActive }) => isActive ? "nav-element active" : "nav-element"
          }>
          Contribute
        </NavLink>
        <NavLink to="/dc" className={({ isActive }) => isActive ? "nav-element active" : "nav-element"
          }>
          DC++
        </NavLink>
      </nav>
    </div>
  )
}
