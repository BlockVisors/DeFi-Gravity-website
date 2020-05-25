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
// react plugin used to create charts
import { Line } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.jsx";
import BVNavbar from "components/Navbars/BVNavbar.jsx";

import DemoFooter from "components/Footers/DemoFooter.jsx";
import DeFiParters from "../SectionsSections/DeFiPartners.jsx";
import DeFiBlogChallenge from "../SectionsSections/DeFiBlogChallenge.jsx";
import DeFiFaq from "../SectionsSections/DeFiFaq.jsx";
import DeFiPartnerLogo from "../PresentationSections/DeFiPartnerLogo.jsx";



import { chartExample1 } from "variables/charts.js";

class LandingPage extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("landing-page");
  }
  render() {
    return (
      <>
      <BVNavbar/>
        {/* <ColorNavbar /> */}
        <div className="wrapper" ref="wrapper">
          <div className="page-header" id="main-header">
            <img
              alt="..."
              className="path"
              src={require("assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path2.png")}
            />
            <img
              alt="..."
              className="shapes triangle"
              src={require("assets/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className="shapes wave"
              src={require("assets/img/waves.png")}
            />
            <img
              alt="..."
              className="shapes squares"
              src={require("assets/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("assets/img/cercuri.png")}
            />
            <Container>
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6">
                  <h1 className="text-white" id="header-1">
                    Down to Earth <br />
                    <span className="text-white">DeFi Education</span>
                  </h1>
                  <p className="text-white mb-3" id="subheader">
                  DeFi Gravity is a platform for on-boarding of decentralized finance startups 
                  in the blockchain space. It includes gamification, incentives, education, news
                   and articles. It is intended for both developers and investors alike.
                  </p>
                  <div className="btn-wrapper mb-3">
                    <p className="category text-success d-inline">
                      Learn more
                    </p>
                    <Button
                      className="btn-link"
                      color="success"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      <i className="tim-icons icon-minimal-right" />
                    </Button>
                  </div>
                  <div className="btn-wrapper">
                    <div className="button-container">
                      <Button
                        className="btn-icon btn-simple btn-round mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-youtube" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-medium" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-telegram" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-github" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-trello" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-linkedin" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-instagram" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg="4" md="5">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/BigDeFiGreen.png")}
                    width="480"
                    height="400"
                  />
                </Col>
              </Row>
            </Container>
          </div>

          <section className="section section-lg">
           
          </section>
          
          {/* <section className="section section-lg">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path5.png")}
            />
            <img
              alt="..."
              className="path3"
              src={require("assets/img/path2.png")}
            />
           
          </section>
          <section className="section section-lg section-safe">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path5.png")}
            />
            
          </section> */}
          {/* <section className="section section-lg">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path2.png")}
            />
            <Col md="12">
              <Card className="card-chart card-plain">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <hr className="line-info" />
                      <h5 className="card-category">Total Investments</h5>
                      <CardTitle tag="h2">Performance</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
              
              </Card>
            </Col>
          </section> */}
          <DeFiBlogChallenge />
          <DeFiPartnerLogo />
          <DeFiFaq />
          <DemoFooter />
        </div>
      </>
    );
  }
}

export default LandingPage;
