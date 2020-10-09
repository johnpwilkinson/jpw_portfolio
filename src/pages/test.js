import React from "react"
import { Helmet } from "react-helmet"
import Appbar from "../components/appbar"
import  Container  from "react-bootstrap/Container"
import Info2 from "../components/info2"
import "../style.css"
// import {
//   FaTwitter as Twitter,
//   FaGithub as Github,
//   FaEnvelope as Mail,
//   FaLinkedin as LinkedIn,
//   FaSalesforce as SalesForce,
//   FaJsSquare as JS,
//   FaPython as PY,
//   FaMicrosoft as MS,
//   FaCode as FE,
//   FaDatabase as BE,
// } from "react-icons/fa"

export default function test() {
  return (
    <div>
    <Appbar />
    <Info2 />
    <Helmet>
      <meta charSet="utf-8" />
      <title>Projects | Sumanth</title>
    </Helmet>
    </div>
  )}
