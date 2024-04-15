import React from "react"
import { Link } from "gatsby"
import { FaFilePdf as Pdf } from "react-icons/fa"
import { useLocation } from "@gatsbyjs/reach-router"

export default function Appbar() {
  const { pathname } = useLocation()
  console.log(pathname)
  const isActive = path => {
    return path === pathname
  }

  return (
    <div className="container-fluid">
      <ul className="nav justify-content-center container-fluid navItem">
        <li className="nav-item mx-4">
          <Link to="/" className={`navItem ${isActive("/") ? "active" : ""}`}>
            <span className="pdf ">Home</span>
          </Link>
        </li>
        <li className="nav-item mx-4">
          <Link
            to="/projects"
            className={`navItem ${isActive("/projects/") ? "active" : ""}`}
          >
            <span className="pdf ">Projects</span>
          </Link>
        </li>
        <li className="nav-item mx-4">
          <a
            href="https://drive.google.com/file/d/1c-mGBR9d9SPrFckozqkz3pLx243iS9x8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="navItem"
          >
            <span className="pdf">
              <Pdf />
              Resume
            </span>
          </a>
        </li>
        <li className="nav-item mx-4">
          <img
            src="https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000AH6hb&oid=00DF0000000gZsu&lastMod=1571903578000"
            className="sf"
            alt="Salesforce Logo"
          />
        </li>
      </ul>
    </div>
  )
}
