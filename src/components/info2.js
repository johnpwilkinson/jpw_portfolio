import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaEnvelope as Mail,
  FaLinkedin as LinkedIn,
  FaSalesforce as SalesForce,
  FaJsSquare as JS,
  FaPython as PY,
  FaMicrosoft as MS,
  FaCode as FE,
  FaDatabase as BE,
} from "react-icons/fa"

export default function Info2() {
  return (
    <Container>
      <div className="my-5"></div>
      <Row>
        <div className="display-3" style={{ color: "#FF8A00" }}>
          <span style={{ color: "white" }}>Hello, I'm</span> <br />
          John.
        </div>
      </Row>
      <Row>
        <div className="h1 code mt-4 mb-3">developer {"{"}</div>
      </Row>
      <Row>
        <div className="text-muted mx-5 my-4 h3 text-justify info">
          <div className=" code mt-4 mb-3">
            <span style={{ color: "white" }}><h1>"about" {":"}</h1></span>
          </div>
          <span className="t">
            "A Passionate FullStack Developer, BlockChain Enthusiast, Ethereum
            Geek and SalesForce ecoSystem Builder. I am a life long learner,
            constantly curious, and infinitely coachable."
          </span>
        </div>
      </Row>
      <Row>
        <div className="text-muted mx-5 my-4 h3 text-justify info">
          <div className=" code mt-4 mb-3">
            <span style={{ color: "white" }}>
              <h1>"experience" {":"}</h1>
            </span>
          </div>
          <span className="t">
            ["Software Engineering Coach / TA @ Kenzie Academy", "Student
            Committee Member @ Kenzie Academy", "Owner @ HealUrSelf LLC", "Sales
            @ Wireless and Technology"]
          </span>
        </div>
      </Row>
      <Row>
        <div className="text-muted mx-5 my-4 h3 text-justify info">
          <div className="h1 code mt-4 mb-3">
            <span style={{ color: "white" }}><h1>"education" {":"}</h1></span>
          </div>
          <Row>
            <Col className="col-11 ">
              <span className="t">
                ["Full Stack Software Engineering @ Kenzie Academy / Butler
                University", "Sales Force Admin Course @ PepUp Tech", "A.S. in
                Accounting @ IvyTech"],
              </span>
            </Col>
            <Col className="col-1 ">,</Col>
          </Row>
        </div>
      </Row>
      <Row className="text-muted mx-5 my-4 h3 text-justify info">
        <Row className="h1 code mt-4 mb-3">
          <span style={{ color: "white" }}><h1>"skills" {":"}</h1></span>
        </Row>
        <Row className="row-cols-4 h1 code mt-4 mb-3 leftpush">
          <Col className="col-2 logo">
            <JS />
          </Col>
          <Col className="col-1 colon">:</Col>
          <Col className="col-8 desc_object">
            ["Vanilla JavaScript", "DOM manipulation", "Scope && Closure",
            "Classes && Objects", "Sync / Async", "Types", "$JQuery"]{" "}
          </Col>
          <Col className="col-1 comma">,</Col>
        </Row>
        <Row className="row-cols-4 h1 code mt-4 mb-3 leftpush">
          <Col className="col-2 logo">
            <PY />
          </Col>
          <Col className="col-1 colon">:</Col>
          <Col className="col-8 desc_object">
            ["Python3", "Built in Libraries", "Virtual Environments", "Web
            Scraping", "Async", "File Manipulation", "System Process
            Interaction"]{" "}
          </Col>
          <Col className="col-1 comma">,</Col>
        </Row>
        <Row className="row-cols-4 h1 code mt-4 mb-3 leftpush">
          <Col className="col-2 logo">
            <SalesForce />
          </Col>
          <Col className="col-1 colon">:</Col>
          <Col className="col-8 desc_object">
            ["Setup, Deploy, Manage, Maintain Professional SalesForce CRM
            solutions", "Translate employees needs into custom SalesForce
            implementations", "Leverage the power of the platform to aggregate
            data into actionable intelligence", "Lightning Web Components"]{" "}
          </Col>
          <Col className="col-1 comma">,</Col>
        </Row>
        <Row className="row-cols-4 h1 code mt-4 mb-3 leftpush">
          <Col className="col-2 logo">
            <MS />
          </Col>
          <Col className="col-1 colon">:</Col>
          <Col className="col-8 desc_object">
            ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint",
            "Microsoft Outlook"]{" "}
          </Col>
          <Col className="col-1 comma">,</Col>
        </Row>
        <Row className="row-cols-4 h1 code mt-4 mb-3 leftpush">
          <Col className="col-2 logo">
            <FE />
          </Col>
          <Col className="col-1 colon">:</Col>
          <Col className="col-8 desc_object">
            ["HTML", "CSS", "ReactJs", "Styling Libraries: Bootstrap, Material,
            Gatsby", "Redux"]{" "}
          </Col>
          <Col className="col-1 comma">,</Col>
        </Row>
        <Row className="row-cols-4 h1 code mt-4 mb-3 leftpush">
          <Col className="col-2 logo">
            <BE />
          </Col>
          <Col className="col-1 colon">:</Col>
          <Col className="col-8 desc_object">
            ["NodeJS", "MongoDB", PostgreSQL", "Django Python Framework",
            "RESTful API's", "Google FireBase", "SwaggerUI"]{" "}
          </Col>
          <Col className="col-1 comma">,</Col>
        </Row>
        <Row className="h1 code mt-4 mb-3">{"}"}</Row>
      </Row>
      <div className="h1 code mt-4 mb-3">{"}"}</div>
      <Row className="h1 mt-5">
        <Col>
          {" "}
          <a
            target="_blank"
            className="mr-5 icon logo-footer"
            href="https://twitter.com/jpw_dev"
          >
            <Twitter />
          </a>
        </Col>
        <Col>
          <a
            target="_blank"
            className="mr-5 icon logo-footer"
            href="https://trailblazer.me/id?lang=en_US&_ga=2.177593575.351651615.1601832279-206589562.1601832279"
          >
            <SalesForce />
          </a>
        </Col>
        <Col>
          <a
            target="_blank"
            className="mr-5 icon logo-footer"
            href="https://github.com/johnpwilkinson"
          >
            <Github />
          </a>
        </Col>
        <Col>
          <a
            target="_blank"
            className="mr-5 icon logo-footer"
            href="https://www.linkedin.com/in/john-wilkinson-dev/"
          >
            <LinkedIn />
          </a>
        </Col>
        <Col>
          <a
            className="mr-5 icon logo-footer"
            href="mailto://jpw.jsdev@gmail.com"
          >
            <Mail />
          </a>
        </Col>
      </Row>
    </Container>
  )
}
