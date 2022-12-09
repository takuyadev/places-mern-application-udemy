import React, { useState } from "react"
import { Link } from "react-router-dom"

import MainHeader from "./MainHeader"
import SideDrawer from "./SideDrawer"
import NavLinks from "./NavLinks"
import Backdrop from "../UIElements/Backdrop"

import "./MainNavigation.css"

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const setDrawer = () => setDrawerIsOpen((prev) => !prev)

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={setDrawer} />}
      <SideDrawer onClick={setDrawer} show={drawerIsOpen}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button onClick={setDrawer} className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  )
}

export default MainNavigation
