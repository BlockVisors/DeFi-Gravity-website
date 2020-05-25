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
  CardTitle,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Pricing extends React.Component {
  render() {
    return (
      <>
        <div className="section section-pricing" id="sectionBuy">
          <Container>
            <div className="our-clients" id="logos">
              <Container>
              <hr className="line-info" />
              <h2 className="title" id="logo-title">The Technology</h2>
              <br />
                <Row>
                  <Col className="ml-auto" xs="4"md="2" lg="2">
                    <img
                      alt="..."
                      src={require("../../assets/img/truffle.png")}
                    />
                  </Col>
                  <Col xs="4" md="2" lg="2">
                    <img
                      alt="..."
                      src={require("../../assets/img/aavelogo.jpeg")}
                      style={{ marginTop: "-15px" }}
                    />
                  </Col>
                  <Col className="mr-auto" xs="4" md="2" lg="2">
                    <img
                      alt="..."
                      src={require("../../assets/img/compound2.jpg")}
                    />
                  </Col>
                  <Col className="ml-auto" xs="4"md="2" lg="2">
                    <img
                      alt="..."
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/stanford-white.png"
                    />
                  </Col>
                  <Col xs="2" md="2" lg="2">
                    <img
                      alt="..."
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/mit-white.png"
                      style={{ marginTop: "-15px" }}
                    />
                  </Col>
                  <Col className="mr-auto" xs="4" md="2" lg="2">
                    <img
                      alt="..."
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/harvard-white.png"
                    />
                  </Col>
                </Row>
              </Container>
            </div>
            {/* <Row id="pricing">
              <Col className="ml-auto mr-auto text-center mt-5" md="8">
                <h2 className="title">
                  Ready to{" "}
                  <span className="text-primary">
                    Be Featured, Help out, or Join?
                  </span>
                  ?
                </h2>
              </Col>
              <Col className="ml-auto mr-auto" md="8">
                <p className="description mb-5 text-center">
                  You have <b>Free Unlimited Updates</b> and{" "}
                  <b>Premium Support</b> on each package for 6 months. You also
                  have <b>24 hours</b> to request a refund if you're not happy
                  with your purchase.
                  <br /> Read more about{" "}
                  <b>
                    <a
                      href="https://www.creative-tim.com/license?ref=blkdspr-presentation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      licences here
                    </a>
                  </b>
                  .
                </p>
               
              </Col>
            </Row> */}
            <Row>
                <Col className="ml-auto mr-auto text-center mt-4" md="8">
                  <h3 className="title">Interested in Listing Your Project or Sponsoring a Challenge?</h3>
                  <h4 className="description mb-5">
                    Contact Us to developer commpany sponsored challenges and bounties targeting user acquistion or developer adoption.
                  </h4>
                  <Button color="success" size="lg">
                    Contact us
                  </Button>
                </Col>
              </Row>
  
          </Container>
        </div>{" "}
      </>
    );
  }
}

export default Pricing;
