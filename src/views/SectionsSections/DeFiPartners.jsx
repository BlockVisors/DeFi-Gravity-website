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
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class DeFiPartners extends React.Component {
  state = {
    activeTab: "1"
  };
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  render() {
    return (
      <>
        <div className="cd-section" id="projects">
          {/* ********* PROJECTS 1 ********* */}
          <div className="projects-1">
            <div className="projects-1">
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto text-center mb-5" lg="8">
                    <h2 className="title">Some Awesome DeFi Projects</h2>
                  </Col>
                </Row>
              </Container>
              <Navbar className="bg-transparent mb-5" expand="lg">
                <Container>
                  <div className="navbar-translate">
                    <p>52 projects found</p>
                  </div>
                  <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown nav>
                      <DropdownToggle
                        aria-expanded={false}
                        caret
                        color="default"
                        data-toggle="dropdown"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        id="navbarOrder"
                        nav
                      >
                        <p>A-to-Z</p>
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Z-to-A
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Newest
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav>
                      <DropdownToggle
                        aria-expanded={false}
                        caret
                        color="default"
                        data-toggle="dropdown"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        id="navbarLatest"
                        nav
                      >
                        <p>Latest</p>
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Newest
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          High interest
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Container>
              </Navbar>
              <Container>
                <Row>
                  <Col md="4">
                    <Card>
                      <CardHeader className="mt-2">
                        <div className="float-left">
                          <i className="tim-icons icon-tag d-inline text-info" />
                          <p className="d-inline ml-1">H-23</p>
                        </div>
                        <div className="float-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              aria-expanded={false}
                              caret
                              className="btn-icon"
                              color="link"
                              data-toggle="dropdown"
                              type="button"
                            >
                              <i className="tim-icons icon-settings-gear-63" />
                            </DropdownToggle>
                            <DropdownMenu right x-placement="bottom-end">
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Something else
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </CardHeader>
                      <CardBody className="text-center p-4">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-fluid rounded-circle shadow"
                            src={require("assets/img/slack.png")}
                            style={{ width: "100px" }}
                          />
                        </a>
                        <CardTitle className="mb-0" tag="h4">
                          Slack
                        </CardTitle>
                        <p className="card-description">
                          We are happy to work at such a great project.
                        </p>
                        <CardTitle className="mt-4" tag="h5">
                          Members
                        </CardTitle>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm rounded-circle mr-2"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip343637047"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/james.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip343637047"
                          >
                            Ryan Tompson
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm rounded-circle mr-2"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip346352270"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/ryan.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip346352270"
                          >
                            Romina Hadid
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm rounded-circle mr-2"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip532183863"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/lora.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip532183863"
                          >
                            Alexander Smith
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm rounded-circle"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip551759668"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/mike.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip551759668"
                          >
                            Jessica Doe
                          </UncontrolledTooltip>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card>
                      <CardHeader className="mt-2">
                        <div className="float-left">
                          <i className="tim-icons icon-tag d-inline text-success" />
                          <p className="d-inline ml-1">F-43</p>
                        </div>
                        <div className="float-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              aria-expanded={false}
                              caret
                              className="btn-icon"
                              color="link"
                              data-toggle="dropdown"
                              type="button"
                            >
                              <i className="tim-icons icon-settings-gear-63" />
                            </DropdownToggle>
                            <DropdownMenu right x-placement="bottom-end">
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Something else
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </CardHeader>
                      <CardBody className="text-center p-4">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-fluid rounded-circle shadow"
                            src={require("assets/img/spotify.jpeg")}
                            style={{ width: "100px" }}
                          />
                        </a>
                        <CardTitle className="mb-0" tag="h4">
                          Spotify
                        </CardTitle>
                        <p className="card-description">
                          We strive to embrace and drive change in our industry.
                        </p>
                        <CardTitle className="mt-4" tag="h5">
                          Members
                        </CardTitle>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm rounded-circle mr-2"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip462477495"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/james.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip462477495"
                          >
                            Ryan Tompson
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm rounded-circle mr-2"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip300140885"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/ryan.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip300140885"
                          >
                            Romina Hadid
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm rounded-circle mr-2"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip571610782"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/lora.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip571610782"
                          >
                            Alexander Smith
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm rounded-circle"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip273194938"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/mike.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip273194938"
                          >
                            Jessica Doe
                          </UncontrolledTooltip>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card>
                      <CardHeader className="mt-2">
                        <div className="float-left">
                          <i className="tim-icons icon-tag d-inline text-danger" />
                          <p className="d-inline ml-1">J-11</p>
                        </div>
                        <div className="float-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              aria-expanded={false}
                              caret
                              className="btn-icon"
                              color="link"
                              data-toggle="dropdown"
                              type="button"
                            >
                              <i className="tim-icons icon-settings-gear-63" />
                            </DropdownToggle>
                            <DropdownMenu right x-placement="bottom-end">
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Something else
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </CardHeader>
                      <CardBody className="text-center p-4">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-fluid rounded-circle shadow"
                            src={require("assets/img/dribbble.png")}
                            style={{ width: "100px" }}
                          />
                        </a>
                        <CardTitle className="mb-0" tag="h4">
                          Dribbble
                        </CardTitle>
                        <p className="card-description">
                          The time has come to bring our plans and ideas to
                          life.
                        </p>
                        <CardTitle className="mt-4" tag="h5">
                          Members
                        </CardTitle>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm rounded-circle mr-2"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip76177270"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/james.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip76177270"
                          >
                            Ryan Tompson
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm rounded-circle mr-2"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip784059972"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/ryan.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip784059972"
                          >
                            Romina Hadid
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm rounded-circle mr-2"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip876709653"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/lora.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip876709653"
                          >
                            Alexander Smith
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm rounded-circle"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip101701505"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/mike.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip101701505"
                          >
                            Jessica Doe
                          </UncontrolledTooltip>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card>
                      <CardHeader className="mt-2">
                        <div className="float-left">
                          <i className="tim-icons icon-tag d-inline text-warning" />
                          <p className="d-inline ml-1">A-11</p>
                        </div>
                        <div className="float-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              aria-expanded={false}
                              caret
                              className="btn-icon"
                              color="link"
                              data-toggle="dropdown"
                              type="button"
                            >
                              <i className="tim-icons icon-settings-gear-63" />
                            </DropdownToggle>
                            <DropdownMenu right x-placement="bottom-end">
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Something else
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </CardHeader>
                      <CardBody className="text-center p-4">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-fluid rounded-circle shadow"
                            src={require("assets/img/Tim.png")}
                            style={{ width: "100px" }}
                          />
                        </a>
                        <CardTitle className="mb-0" tag="h4">
                          CreativeTim
                        </CardTitle>
                        <p className="card-description">
                          We are developing the best design projects.
                        </p>
                        <CardTitle className="mt-4" tag="h5">
                          Members
                        </CardTitle>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm rounded-circle mr-2"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip380380732"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/james.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip380380732"
                          >
                            Ryan Tompson
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm rounded-circle mr-2"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip383345211"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/ryan.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip383345211"
                          >
                            Romina Hadid
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm rounded-circle mr-2"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip364077597"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/lora.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip364077597"
                          >
                            Alexander Smith
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm rounded-circle"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip988655272"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/mike.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip988655272"
                          >
                            Jessica Doe
                          </UncontrolledTooltip>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card>
                      <CardHeader className="mt-2">
                        <div className="float-left">
                          <i className="tim-icons icon-tag d-inline text-primary" />
                          <p className="d-inline ml-1">A-11</p>
                        </div>
                        <div className="float-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              aria-expanded={false}
                              caret
                              className="btn-icon"
                              color="link"
                              data-toggle="dropdown"
                              type="button"
                            >
                              <i className="tim-icons icon-settings-gear-63" />
                            </DropdownToggle>
                            <DropdownMenu right x-placement="bottom-end">
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Something else
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </CardHeader>
                      <CardBody className="text-center p-4">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-fluid rounded-circle shadow"
                            src={require("assets/img/dropbox.png")}
                            style={{ width: "100px" }}
                          />
                        </a>
                        <CardTitle className="mb-0" tag="h4">
                          DropBox
                        </CardTitle>
                        <p className="card-description">
                          It is important to save every project safely with our
                          app.
                        </p>
                        <CardTitle className="mt-4" tag="h5">
                          Members
                        </CardTitle>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm rounded-circle mr-2"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip989314295"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/james.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip989314295"
                          >
                            Ryan Tompson
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm rounded-circle mr-2"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip230919456"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/ryan.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip230919456"
                          >
                            Romina Hadid
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm rounded-circle mr-2"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip437311836"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/lora.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip437311836"
                          >
                            Alexander Smith
                          </UncontrolledTooltip>
                          <a
                            className="avatar avatar-sm rounded-circle"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip120355921"
                          >
                            <img
                              alt="..."
                              src={require("assets/img/mike.jpg")}
                            />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip120355921"
                          >
                            Jessica Doe
                          </UncontrolledTooltip>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card>
                      <CardHeader className="mt-2">
                        <div className="float-left">
                          <i className="tim-icons icon-tag d-inline" />
                          <p className="d-inline ml-1">E-28</p>
                        </div>
                        <div className="float-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              aria-expanded={false}
                              caret
                              className="btn-icon"
                              color="link"
                              data-toggle="dropdown"
                              type="button"
                            >
                              <i className="tim-icons icon-settings-gear-63" />
                            </DropdownToggle>
                            <DropdownMenu right x-placement="bottom-end">
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Something else
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                      </CardHeader>
                      <CardBody className="text-center p-4">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img-fluid rounded-circle shadow"
                            src={require("assets/img/unass.jpg")}
                            style={{ width: "100px" }}
                          />
                        </a>
                        <CardTitle className="mb-0" tag="h4">
                          Unassigned
                        </CardTitle>
                        <p className="card-description">
                          Here you can add your description and bellow add your
                          members.
                        </p>
                        <CardTitle className="mt-4" tag="h5">
                          Members
                        </CardTitle>
                        <div className="avatar-group">
                          <a
                            className="avatar avatar-sm rounded-circle"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            id="tooltip406568354"
                          >
                            <i className="tim-icons icon-lock-circle" />
                          </a>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip406568354"
                          >
                            Add memberss
                          </UncontrolledTooltip>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <footer className="mt-5">
                  <Pagination
                    className="pagination float-left"
                    listClassName="float-left"
                  >
                    <PaginationItem>
                      <PaginationLink
                        aria-label="Previous"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <span aria-hidden={true}>
                          <i
                            aria-hidden={true}
                            className="tim-icons icon-double-left"
                          />
                        </span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        ...
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        6
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        aria-label="Next"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <span aria-hidden={true}>
                          <i
                            aria-hidden={true}
                            className="tim-icons icon-double-right"
                          />
                        </span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                  <div className="text-right">
                    <p>Showing 6 out of 36</p>
                    <div />
                  </div>
                </footer>
              </Container>
            </div>
          </div>
          {/* ********* END PROJECTS 1 ********* */}
          {/* ********* PROJECTS 2 ********* */}
          <div className="projects-2 project-raised">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center mb-5" lg="8">
                  <h2 className="title">Our Partners</h2>
                  <div className="section-space" />
                </Col>
              </Row>
              <Nav
                className="nav-pills-info nav-pills-icons nav-pills-lg"
                pills
                role="tablist"
              >
                <NavItem className="m-auto">
                  <NavLink
                    className={this.state.activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    <i className="tim-icons icon-spaceship" />
                    Project 1
                  </NavLink>
                </NavItem>
                <NavItem className="m-auto">
                  <NavLink
                    className={this.state.activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    <i className="tim-icons icon-bag-16" />
                    Project 2
                  </NavLink>
                </NavItem>
                <NavItem className="m-auto">
                  <NavLink
                    className={this.state.activeTab === "3" ? "active" : ""}
                    onClick={() => {
                      this.toggle("3");
                    }}
                  >
                    <i className="tim-icons icon-light-3" />
                    Project 3
                  </NavLink>
                </NavItem>
                <NavItem className="m-auto">
                  <NavLink
                    className={this.state.activeTab === "4" ? "active" : ""}
                    onClick={() => {
                      this.toggle("4");
                    }}
                  >
                    <i className="tim-icons icon-molecule-40" />
                    Project 4
                  </NavLink>
                </NavItem>
                <NavItem className="mx-auto">
                  <NavLink
                    className={this.state.activeTab === "5" ? "active" : ""}
                    onClick={() => {
                      this.toggle("5");
                    }}
                  >
                    <i className="tim-icons icon-planet" />
                    Project 5
                  </NavLink>
                </NavItem>
              </Nav>
              <Row>
                <Col className="ml-auto mr-auto text-center mt-4" md="8">
                  <h3 className="title">Interested in Listing Your Project/Company?</h3>
                  <h4 className="description mb-5">
                    This is the paragraph where you can write more details about
                    your projects. Keep you user engaged by providing meaningful
                    information.
                  </h4>
                  <Button color="primary" size="lg">
                    Contact us
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END PROJECTS 2 ********* */}
       
        </div>{" "}
      </>
    );
  }
}

export default DeFiPartners;
