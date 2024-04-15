import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import KeyValuePair from "./KeyValuePair"
import Footer from "./footer"
import {
  FaSalesforce as SalesForce,
  FaJsSquare as JS,
  FaPython as PY,
  FaMicrosoft as MS,
  FaCode as FE,
  FaDatabase as BE,
} from "react-icons/fa"

export default function Main() {
  let blazer =
    '<a href="https://trailblazer.me/id/jwilkinsondev">trailblazer.me</a>'
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
          <div className="h1 code mt-4 mb-3">
            <span style={{ color: "white" }} className="t">
              "about" {":"}
            </span>
          </div>
          <span className="code tt">
            "A passionate FullStack Developer, Blockchain && Bitcoin Enthusiast,
            Ethereum Geek and smart contractor. I am a life long learner,
            constantly curious, and infinitely coachable."
          </span>
        </div>
      </Row>
      <Row>
        <div className="text-muted mx-5 my-4 h3 text-justify info">
          <div className="h1 code mt-4 mb-3">
            <span style={{ color: "white" }} className="t">
              "experience" {":"}
            </span>
          </div>
          <span className="code tt">
            ["React Developer && DeFi Researcher @ FutureWonder", "Software
            Engineering Facilitator @ Kenzie Academy", "Owner @ HealUrSelf LLC",
            "Sales @ Wireless and Technology"]
          </span>
        </div>
      </Row>
      <Row>
        <div className="text-muted mx-5 my-4 h3 text-justify info">
          <div className="h1 code mt-4 mb-3">
            <span style={{ color: "white" }} className="t">
              "education" {":"}
            </span>
          </div>
          <Row>
            <Col className="col-11 ">
              <span className="code tt">
                ["GitCoin Kernel Block2 Security Fellowship", "Full Stack
                Software Engineering @ Kenzie Academy / Butler University",
                "Sales Force Admin Course @ PepUp Tech", "A.S. in Accounting @
                IvyTech", "B.S. I.T. / Software Development in Web Languages @
                Purdue Global"]
              </span>
            </Col>
            <Col className="col-1 "></Col>
          </Row>
        </div>
      </Row>
      <Row className="text-muted mx-5 my-4 h3 text-justify info">
        <Row className="h1 code mt-4 mb-3">
          <span style={{ color: "white" }} className="t">
            "skills" {":"}
          </span>
          <span className="t">{"{"}</span>
        </Row>
        <div className="x">
          <KeyValuePair
            logo={<JS />}
            value={`["Vanilla JavaScript", "DOM manipulation", "Scope && Closure",
            "Classes && Objects", "Sync / Async", "Types", "$JQuery"]`}
          />
          <KeyValuePair
            logo={<PY />}
            value={`["Python3", "Built in Libraries", "Virtual Environments", "Web Scraping", "Async", "File Manipulation", "System Process Interaction"]`}
          />
          <KeyValuePair
            logo={<SalesForce />}
            value={`["Setup, Deploy, Manage, Maintain Professional SalesForce CRM solutions", "Translate employees needs into custom SalesForce implementations", "Leverage the power of the platform to aggregate data into actionable intelligence", "Lightning Web Components"]`}
          />
          <KeyValuePair
            logo={<MS />}
            value={`["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Microsoft Outlook"]`}
          />
          <KeyValuePair
            logo={<FE />}
            value={`["HTML", "CSS", "ReactJs", "Styling Libraries: Bootstrap, Material, Gatsby", "Redux", "EVM"]`}
          />
          <KeyValuePair
            logo={<BE />}
            value={`["NodeJS", "MongoDB", "PostgreSQL", "Django Python Framework", "RESTful API's", "Google FireBase", "SwaggerUI"]`}
          />
        </div>
        <Row className="h1 code mt-4 mb-3">
          <span className="t">{"}"}</span>
        </Row>
      </Row>
      <Row className="text-muted mx-5 my-4 h3 text-justify info">
        <Row className="h1 code mt-4 mb-3">
          <span style={{ color: "white" }} className="t">
            "certifications" {":"}
          </span>
          <span className="t">{"{"}</span>
        </Row>
        <KeyValuePair
          logo={<FE />}
          value={`"Front End, Back End, and Full Stack Software Engineer Certification from Kenzie Academy && Butler University"`}
        />

        <Row className="row-cols-4 h1 code mt-4 mb-3 leftpush">
          <Col className="col-2 logo">
            <SalesForce />
          </Col>
          <Col className="col-1 colon">:</Col>
          <Col className="col-8 desc_object" id="bb">
            <span className="">
              ["Sales Force Certified Administrator", "ID=21319067", "Certified
              on 7/2020", "
              <a href="https://trailblazer.me/id/jwilkinsondev">
                trailblazer.me
              </a>
              "]{" "}
            </span>
          </Col>
          <Col className="col-1 comma"> ,</Col>
        </Row>
        <Row className="h1 code mt-4 mb-3">
          <span className="t">{"}"}</span>
        </Row>
      </Row>

      <div className="h1 code mt-4 mb-3">{"}"}</div>
      <Footer />
    </Container>
  )
}
