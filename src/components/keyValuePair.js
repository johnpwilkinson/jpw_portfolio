import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function KeyValuePair (props) {
    return (
        <Row className="row-cols-4 h1 code mt-4 mb-3 leftpush">
          <Col className="col-2 logo">
            {props.logo}
          </Col>
          <Col className="col-1 colon">:</Col>
          <Col className="col-8 desc_object" id="bb">
            <span>{props.value}{" "}</span>
          </Col>
          <Col className="col-1 comma">,</Col>
        </Row>
    )
}