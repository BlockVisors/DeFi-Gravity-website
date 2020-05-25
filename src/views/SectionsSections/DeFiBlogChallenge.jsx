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

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

class Blogs extends React.Component {
  render() {
    return (
      <>
        <div className="cd-section" id="blogs">
          {/* ********* BLOGS 1 ********* */}
          
           {/* ********* END BLOGS 5 ********* */}
           <div className="blogs-5">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="12">
                <hr className="line-info" />

                  <h2 className="title">Featured Challenges</h2>
                  <Row>
                    <Col lg="4" md="6">
                      <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("assets/img/steven-roe.jpg")}
                            />
                          </a>
                        </div>
                        <CardBody>
                          <h6 className="category text-primary">Investor</h6>
                          <CardTitle tag="h4">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                             Getting Ethereum - Reward - 10 XDEFI Tokens
                            </a>
                          </CardTitle>
                          <p className="card-description">
                            Investor Challenge 1 - Purchasing a small amount of Cryptocurrency
                          </p>
                          <CardFooter>
                            <div className="author">
                              <img
                                alt="..."
                                className="avatar img-raised"
                                src={require("assets/img/p10.jpg")}
                              />
                              <span className="ml-1">Dameon Green</span>
                            </div>
                            <div className="stats stats-right">
                              <i className="tim-icons icon-watch-time" /> 5 min
                              read
                            </div>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="6">
                      <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("assets/img/noah-wetering.jpg")}
                            />
                          </a>
                        </div>
                        <CardBody>
                          <h6 className="category text-info">Investor</h6>
                          <CardTitle tag="h4">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              portis wallet - reward 20 XDEFI Tokens
                            </a>
                          </CardTitle>
                          <p className="card-description">
                          Investor Challenge 2 - Getting your First Wallet on Portis - Recieving

                          </p>
                          <CardFooter>
                            <div className="author">
                              <img
                                alt="..."
                                className="avatar img-raised"
                                src={require("assets/img/johana.jpg")}
                              />
                              <span className="ml-1">Dameon Green</span>
                            </div>
                            <div className="stats stats-right">
                              <i className="tim-icons icon-watch-time" /> 5 min
                              read
                            </div>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" xs="12">
                      <Card className="card-blog card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              className="img rounded"
                              src={require("assets/img/mark-harrison.jpg")}
                            />
                          </a>
                        </div>
                        <CardBody>
                          <h6 className="category text-warning">Flash Loan Box</h6>
                          <CardTitle tag="h4">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              setup and edit Aave box - reward 20 XDEFI Tokens
                            </a>
                          </CardTitle>
                          <p className="card-description">
                            The first developer challenge is to clone the AAVE truffle box and make edits and submit..
                          </p>
                          <CardFooter>
                            <div className="author">
                              <img
                                alt="..."
                                className="avatar img-raised"
                                src={require("assets/img/christian.jpg")}
                              />
                              <span className="ml-1">Marc Oliver</span>
                            </div>
                            <div className="stats stats-right">
                              <i className="tim-icons icon-heart-2" /> 2.4K
                            </div>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END BLOGS 5 ********* */}
          {/* ********* BLOGS 2 ********* */}
          <div className="section blogs-2" id="blogs-2">
            <Container fluid>
            <hr className="line-info" />
              <h2 className="title">Latest Blogs</h2>
              <br />
              <Row>
                <Col lg="3">
                  <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                  >
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/steven-roe.jpg") + ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <h6 className="card-category">Information Byte</h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h3">Welcome to DeFi Gravity</CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="3">
                  <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                  >
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/noah-wetering.jpg") + ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <h6 className="card-category">Wallets</h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h3">
                            The Portis Wallet
                          </CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="3">
                  <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                  >
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/matthew-henry.jpg") + ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <h6 className="card-category">New Challenges</h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h3">Touch on a trend</CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="3">
                  <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                  >
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/waranont.jpg") + ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <h6 className="card-category">Driverless Future</h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h3">Self-Driving Cars</CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END BLOGS 2 ********* */}
         
          
         
        
        </div>{" "}
      </>
    );
  }
}

export default Blogs;
