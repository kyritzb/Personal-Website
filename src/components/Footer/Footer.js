/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row className="row-grid justify-content-between align-items-center text-left">
            <Col md="3">
              <h1 className="title">Bryan Kyritz</h1>
            </Col>
            <Col md="3">
              <h4 className="title">kyritzb@gmail.com</h4>
            </Col>
            <Col md="3">
              <h4 className="title">845-521-4046</h4>
            </Col>
            <Col md="3">
              <h4 className="title">My Links:</h4>
              <div className="btn-wrapper profile">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.linkedin.com/in/bryan-kyritz-500b40179/"
                  id="tooltip622135962"
                  target="_blank"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://www.linkedin.com/in/bryan-kyritz-500b40179/";
                  }}
                >
                  <i className="fab fa-linkedin" />
                </Button>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://github.com/kyritzb"
                  id="tooltip230450801"
                  target="_blank"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://github.com/kyritzb";
                  }}
                >
                  <i className="fab fa-github" />
                </Button>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://stevens.joinhandshake.com/users/15080742"
                  id="tooltip318450378"
                  target="_blank"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "https://stevens.joinhandshake.com/users/15080742";
                  }}
                >
                  <i className="tim-icons icon-single-02" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
