import React from "react"
import Intent from "./link"
import { FaFilePdf as PDF } from "react-icons/fa"
import resume from '../../../static/JohnWilkinsonResume.pdf'

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
          <a className="nav-link" href={resume}><span className="pdf"><PDF />Download Resume</span></a>
        </li>
      </ul>
    </div>
  )
}
