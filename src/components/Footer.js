import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {
  FaGithub as Github,
  FaEnvelope as Mail,
  FaLinkedin as LinkedIn,
  FaSalesforce as SalesForce,
} from "react-icons/fa"

export default function Footer() {
  return (
    <Row className="h1 mt-3 k text-center">
      <Col>
        <a
          target="_blank noreferrer"
          aria-label="nav-item"
          className=" icon logo-footer"
          href="https://trailblazer.me/id?lang=en_US&_ga=2.177593575.351651615.1601832279-206589562.1601832279"
        >
          <SalesForce />
        </a>
      </Col>
      <Col>
        <a
          target="_blank noreferrer"
          aria-label="nav-item"
          className=" icon logo-footer"
          href="https://github.com/johnpwilkinson"
        >
          <Github />
        </a>
      </Col>
      <Col>
        <a
          target="_blank noreferrer"
          aria-label="nav-item"
          className=" icon logo-footer"
          href="https://www.linkedin.com/in/john-wilkinson-dev/"
        >
          <LinkedIn />
        </a>
      </Col>
      <Col>
        <a
          className=" icon logo-footer"
          href="mailto://jpw.jsdev@gmail.com"
          aria-label="nav-item"
        >
          <Mail />
        </a>
      </Col>
    </Row>
  )
}
