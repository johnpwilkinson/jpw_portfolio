import React from "react"
import Intent from "./link"
import { FaFilePdf as PDF } from "react-icons/fa"
import  Container  from "react-bootstrap/Container"


export default function Appbar() {

  return (
    <div>
    <Container fluid />
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
        <li className="nav-item mx-4">
        <img src="https://drm--c.na114.content.force.com/servlet/servlet.ImageServer?id=0153k00000AH6hb&oid=00DF0000000gZsu&lastMod=1571903578000" className="sf"></img>

        </li>
      </ul>
    </div>
    <Container />
    </div>
  )
}
