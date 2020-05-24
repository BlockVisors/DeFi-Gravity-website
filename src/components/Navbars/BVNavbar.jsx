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
//import { logo } from "../../assets/img/blockfestsvg.png"
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class BVNavbar extends React.Component {
  state = {
    navbarColor: "navbar-transparent"
  };
  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarColor);
  }
  changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      this.setState({
        //navbarColor: "bg-info"
        navbarColor: "navbar-transparent"

      });
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        navbarColor: "navbar-transparent"
      });
    }
  };
  render() {
    return (
      <>
        <Navbar className={"fixed-top " + this.state.navbarColor} expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand to="/index" tag={Link} id="tooltip6619950104">
              <img
              src={require("assets/img/DefiGravityLogoWhite.png")}
              width="184"
              height="56"
              className="d-inline-block align-middle"
              //alt="React Bootstrap logo"
              />
                 <span id="logo-text"></span>
              </NavbarBrand>
              <UncontrolledTooltip delay={0} target="tooltip6619950104">
                Designed and Coded by BlockVisors
              </UncontrolledTooltip>
              <button className="navbar-toggler" id="navigation">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#navigation">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      BLK• <span>PRO React</span>
                    </a>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button className="navbar-toggler" id="navigation">
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-auto" navbar>
              <UncontrolledDropdown color="success" nav>
                  <DropdownToggle caret color="success" nav>
                    <i className="fa fa-cogs d-lg-none d-xl-none" />
                      XDEFI                  
                    </DropdownToggle>
                  <DropdownMenu className="dropdown-with-icons">
                    <DropdownItem to="/index" tag={Link}>
                      <i className="tim-icons icon-paper" />
                      About
                    </DropdownItem>
                    <DropdownItem to="/presentation" tag={Link}>
                      <i className="tim-icons icon-bullet-list-67" />
                      Get Token
                    </DropdownItem>
                    <DropdownItem
                      href="https://demos.creative-tim.com/blk-design-system-pro-react/#/documentation/overview?ref=blkdspr-pages-navbar"
                      target="_blank"
                    >
                      <i className="tim-icons icon-book-bookmark" />
                      Get Wallet
                    </DropdownItem>
                    <DropdownItem
                      href="https://demos.creative-tim.com/blk-design-system-pro-react/#/documentation/overview?ref=blkdspr-pages-navbar"
                      target="_blank"
                    >
                      <i className="tim-icons icon-book-bookmark" />
                      Token Faq
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                  <DropdownToggle caret color="default" nav>
                    <i className="fa fa-cogs d-lg-none d-xl-none" />
                      Investors                  
                    </DropdownToggle>
                  <DropdownMenu className="dropdown-with-icons">
                    <DropdownItem to="/index" tag={Link}>
                      <i className="tim-icons icon-paper" />
                      About
                    </DropdownItem>
                    <DropdownItem to="/presentation" tag={Link}>
                      <i className="tim-icons icon-bullet-list-67" />
                      Challenges
                    </DropdownItem>
                    <DropdownItem
                      href="https://demos.creative-tim.com/blk-design-system-pro-react/#/documentation/overview?ref=blkdspr-pages-navbar"
                      target="_blank"
                    >
                      <i className="tim-icons icon-book-bookmark" />
                      Education
                    </DropdownItem>
                    <DropdownItem
                      href="https://demos.creative-tim.com/blk-design-system-pro-react/#/documentation/overview?ref=blkdspr-pages-navbar"
                      target="_blank"
                    >
                      <i className="tim-icons icon-book-bookmark" />
                      Investor Faq
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle caret color="default" nav>
                    <i aria-hidden={true} className="tim-icons icon-paper" />
                    <p>Developers</p>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem to="/sections#headers" tag={Link}>
                      <i className="tim-icons icon-app" />
                      About
                    </DropdownItem>
                    <DropdownItem to="/sections#features" tag={Link}>
                      <i className="tim-icons icon-settings" />
                      Features
                    </DropdownItem>
                    <DropdownItem to="/sections#blogs" tag={Link}>
                      <i className="tim-icons icon-align-left-2" />
                      Tutorials
                    </DropdownItem>
                    <DropdownItem to="/sections#teams" tag={Link}>
                      <i className="tim-icons icon-user-run" />
                      Challenges
                    </DropdownItem>
                    <DropdownItem to="/sections#projects" tag={Link}>
                      <i className="tim-icons icon-paper" />
                      Projects
                    </DropdownItem>
                    <DropdownItem to="/sections#tables" tag={Link}>
                      <i className="tim-icons icon-chart-bar-32" />
                      Get Started
                    </DropdownItem>
                    <DropdownItem to="/sections#accordion" tag={Link}>
                      <i className="tim-icons icon-paper" />
                     Developer Faq
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                  <DropdownToggle caret color="default" nav>
                    <i
                      aria-hidden={true}
                      className="tim-icons icon-book-bookmark"
                    />
                    <p>Info</p>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem to="/about-us" tag={Link}>
                      <i className="tim-icons icon-bulb-63" />
                      About-us
                    </DropdownItem>
                    <DropdownItem to="/blog-post" tag={Link}>
                      <i className="tim-icons icon-align-center" />
                      Blog Articles
                    </DropdownItem>
                    <DropdownItem to="/contact-us" tag={Link}>
                      <i className="tim-icons icon-square-pin" />
                      Contact Us
                    </DropdownItem>
                    <DropdownItem to="/profile-page" tag={Link}>
                      <i className="tim-icons icon-lock-circle" />
                      Roadmap
                    </DropdownItem>
                    
                  
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <Button
                    className="nav-link"
                    color="success"
                    href="https://app.defigravity.org"
                    size="sm"
                    target="_blank"
                  >
                    <p>Launch App</p>
                  </Button>
                </NavItem>
                {/* <NavItem>
                  <Button
                    className="nav-link"
                    color="default"
                    href="https://www.creative-tim.com/product/blk-design-system-pro-react?reaf=blkdspr-pages-navbar"
                    size="sm"
                    target="_blank"
                  >
                    <p>Partner</p>
                  </Button>
                </NavItem> */}
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default BVNavbar;
