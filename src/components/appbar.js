import React from "react"
import Intent from "./link"
import { FaFilePdf as PDF } from "react-icons/fa"


export default function Appbar() {
  return (
    <div className="container my-5">
      <ul className="nav justify-content-center">
        <li className="nav-item mx-4">
          <Intent to="/"><span className="pdf">Home</span></Intent>
        </li>
        <li className="nav-item mx-4">
          <Intent to="/projects"><span className="pdf">Projects</span></Intent>
        </li>
        <li className="nav-item mx-4">
          <a href="https://drive.google.com/file/d/1ua4vOGDjcfMx-D6OdKoknYxd72NGojxD/view?usp=sharing" className="nav-link" ><span className="pdf"><PDF />Download Resume</span></a>
        </li>
      </ul>
    </div>
  )
}
