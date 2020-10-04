import React from "react"

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
  FaDatabase as BE
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style={{ color: "white" }}>Hello, I'm</span> <br />
        John.
      </div>
      <div className="h1 code mt-4 mb-3">developer {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        <div className="h1 code mt-4 mb-3">
          <span style={{ color: "white" }}>"about" {":"}</span>
        </div>
        <span className="code">"A Passionate FullStack Developer, BlockChain Enthusiast, Ethereum Geek
        and SalesForce ecoSystem Builder. I am a life long learner, constantly
        curious, and infinitely coachable."</span>
      </div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        <div className="h1 code mt-4 mb-3">
          <span style={{ color: "white" }}>"experience" {":"}</span>
        </div><span className="code">
        ["Software Engineering Coach / TA @ Kenzie Academy", "Student Committee
        Member @ Kenzie Academy", "Owner @ HealUrSelf LLC", "Sales @ Wireless
        and Technology"]</span>
      </div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        <div className="h1 code mt-4 mb-3">
          <span style={{ color: "white" }}>"education" {":"}</span>
        </div><span className="code">
        ["Full Stack Software Engineering @ Kenzie Academy / Butler University",
        "Sales Force Admin Course @ PepUp Tech", "A.S. in Accounting @ IvyTech"]
        </span>
      </div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        <div className="h1 code mt-4 mb-3">
          <span style={{ color: "white" }}>"skills" {":"}</span>
        </div>
        <span id="sub-title">
          <span id="sub-left">
            <JS /> :{" "}
          </span>
          <span id="sub-right">
            ["Vanilla JavaScript", "DOM manipulation", "Scope && Closure",
            "Classes && Objects", "Sync / Async", "Types", "$JQuery"]{" "}
          </span>
          <div class="clear-both"></div>
        </span>
        <span id="sub-title">
          <span id="sub-left">
            <PY /> :{" "}
          </span>
          <span id="sub-right">
            ["Python3", "Built in Libraries", "Virtual Environments", "Web
            Scraping", "Async", "File Manipulation", "System Process
            Interaction"]{" "}
          </span>
          <div class="clear-both"></div>
        </span>
        <span id="sub-title">
          <span id="sub-left">
            <SalesForce /> :{" "}
          </span>
          <span id="sub-right">
            ["Setup, Deploy, Manage, and Administrate Professional SalesForce
            CRM solutions", "Translate employees needs into tangible custom
            SalesForce implementations", "Leverage the power of the platform to
            aggregate data into actionable intelligence", "Lightning Web Components"]{" "}
          </span>
          <div class="clear-both"></div>
        </span>
        <span id="sub-title">
          <span id="sub-left">
            <MS /> :{" "}
          </span>
          <span id="sub-right">
            ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"]{" "}
          </span>
          <div class="clear-both"></div>
        </span>
        <span id="sub-title">
          <span id="sub-left">
            <FE /> :{" "}
          </span>
          <span id="sub-right">
            ["HTML", "CSS", "ReactJs", "Styling Libraries: Bootstrap, Material, Gatsby", "Redux"]{" "}
          </span>
          <div class="clear-both"></div>
        </span>
        <span id="sub-title">
          <span id="sub-left">
            <BE /> :{" "}
          </span>
          <span id="sub-right">
            ["NodeJS", "MongoDB", PostgreSQL", "Django Python Framework", "RESTful API's", "Google FireBase", "SwaggerUI"]{" "}
          </span>
          <div class="clear-both"></div>
        </span>
      </div>

      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a
          target="_blank"
          className="mr-5 icon"
          href="https://twitter.com/jpw_dev"
        >
          <Twitter />
        </a>
        <a
          target="_blank"
          className="mr-5 icon"
          href="https://trailblazer.me/id?lang=en_US&_ga=2.177593575.351651615.1601832279-206589562.1601832279"
        >
          <SalesForce />
        </a>
        <a
          target="_blank"
          className="mr-5 icon"
          href="https://github.com/johnpwilkinson"
        >
          <Github />
        </a>
        <a
          target="_blank"
          className="mr-5 icon"
          href="https://www.linkedin.com/in/john-wilkinson-dev/"
        >
          <LinkedIn />
        </a>
        <a className="mr-5 icon" href="mailto://jpw.jsdev@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}
