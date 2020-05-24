/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

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
  UncontrolledTooltip
} from "reactstrap";

class DemoFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <Container>
            <Row>
              <Col md="3">
              <img
              src={require("assets/img/DefiGravityLogoWhite.png")}
              width="180"
              height="52"
              className="title"
              //alt="React Bootstrap logo"
              />
              <br/>
              <p id="footer-text">DeFi Gravity is platform with a goal of demystifying the Blockchain and DeFi space</p>
          </Col>
              <Col md="3" xs="6">
                <Nav>
                  <NavItem>
                    <NavLink to="/index" tag={Link}>
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/landing-page" tag={Link}>
                      Launch App
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/register-page" tag={Link}>
                      XDEFI Token
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/profile-page" tag={Link}>
                      FAQ
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col md="3" xs="6">
                <Nav>
                  <NavItem>
                    <NavLink
                      href="https://creative-tim.com/contact-us?ref=blkdspr-footer"
                      target="_blank"
                    >
                      Contact
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://creative-tim.com/about-us?ref=blkdspr-footer"
                      target="_blank"
                    >
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="http://creative-tim.com/blog?ref=blkdspr-footer"
                      target="_blank"
                    >
                      Medium
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://opensource.org/licenses/MIT?ref=blkdspr-footer"
                      target="_blank"
                    >
                      Education
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col md="3">
                <h3 className="title">Follow us:</h3>
                <div className="btn-wrapper profile text-left">
                  <Button
                    className="btn-icon btn-neutral btn-round btn-simple"
                    color="default"
                    href="https://twitter.com/creativetim"
                    id="tooltip39661217"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip39661217">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-neutral btn-round btn-simple ml-1"
                    color="default"
                    href="https://www.facebook.com/creativetim"
                    id="tooltip206037619"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip206037619">
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-neutral btn-round btn-simple ml-1"
                    color="default"
                    href="https://dribbble.com/creativetim"
                    id="tooltip750293512"
                    target="_blank"
                  >
                    <i className="fab fa-youtube" />
                  </Button>
                  <Button
                    className="btn-icon btn-neutral btn-round btn-simple"
                    color="default"
                    href="https://twitter.com/creativetim"
                    id="tooltip39661217"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip39661217">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-neutral btn-round btn-simple ml-1"
                    color="default"
                    href="https://www.facebook.com/creativetim"
                    id="tooltip206037619"
                    target="_blank"
                  >
                    <i className="fab fa-medium" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip206037619">
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-neutral btn-round btn-simple ml-1"
                    color="default"
                    href="https://dribbble.com"
                    id="tooltip750293512"
                    target="_blank"
                  >
                    <i className="fab fa-github" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip750293512">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-neutral btn-round btn-simple ml-1"
                    color="default"
                    href="https://dribbble.com"
                    id="tooltip750293512"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip750293512">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-neutral btn-round btn-simple ml-1"
                    color="default"
                    href="https://dribbble.com"
                    id="tooltip750293512"
                    target="_blank"
                  >
                    <i className="fab fa-trello" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip750293512">
                    Follow us
                  </UncontrolledTooltip>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default DemoFooter;
