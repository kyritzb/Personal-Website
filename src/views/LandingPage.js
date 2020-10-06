import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

import { Fade, Grow } from "@material-ui/core";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";
import axios from "axios";
import moment from "moment";

import Pdf from "../assets/resume.pdf";
import SmLogo from "../assets/img/SecureMeetingLogoOutline.svg";
import Scout from "../assets/img/scout.svg";
import Cympl from "../assets/img/cympl.svg";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      currProjPage: 1,
      timeRefreshed: "N/A",
    };
    this.setProjPage = this.setProjPage.bind(this);
    this.getRepos = this.getRepos.bind(this);
  }

  getRepos = async () => {
    let res = await axios
      .get("https:" + "//" + "api.github.com" + "/users/kyritzb/repos")
      .then((res) => {
        let arr = res.data;

        arr.sort((a, b) => {
          return moment(b.updated_at).diff(a.updated_at);
        });

        this.setState({ repos: arr });
        this.setState({ timeRefreshed: moment().calendar() });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  setProjPage = (newPage) => {
    this.setState({ currProjPage: newPage });
  };

  componentDidMount() {
    this.getRepos();
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <>
        {/*<ExamplesNavbar /> */}

        <div className="wrapper">
          <div className="page-header">
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
            <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="11" md="11">
                  <h4 className="text-grey">Hi, my name is</h4>
                  <h1 className="text-white" style={{ fontSize: "80px" }}>
                    Bryan Kyritz <br />
                  </h1>
                  <h4 className="text-grey" style={{ fontSize: "30px" }}>
                    Computer Engineering Student
                  </h4>
                  <p className="text-white mb-3" style={{ fontSize: "20px" }}>
                    I'm a computer engineer based in Hoboken, NJ specializing in
                    building (and occasionally designing) exceptional websites,
                    applications, and everything in between.
                  </p>
                  <Row>
                    <Col>
                      <div className="btn-wrapper mb-3">
                        <Button
                          color="success"
                          onClick={() => {
                            window.location.href = "mailto:kyritzb@gmail.com";
                          }}
                        >
                          Get In Touch
                        </Button>

                        <Button
                          className="btn-link"
                          color="success"
                          onClick={() => {
                            window.location.href = Pdf;
                          }}
                          style={{ marginLeft: "40px" }}
                        >
                          My CV
                        </Button>
                      </div>
                    </Col>
                  </Row>

                  <Row className="row-grid justify-content-between align-items-center">
                    <Col lg="8">
                      <div className="btn-wrapper">
                        <div className="button-container">
                          <Button
                            className="btn-icon btn-simple btn-round btn-neutral"
                            color="default"
                            href="https://www.linkedin.com/in/bryan-kyritz-500b40179/"
                            style={{ marginLeft: "20px" }}
                            onClick={(e) => {
                              e.preventDefault();
                              window.location.href =
                                "https://www.linkedin.com/in/bryan-kyritz-500b40179/";
                            }}
                          >
                            <i className="fab fa-linkedin" />
                          </Button>
                          <Button
                            className="btn-icon btn-simple btn-round btn-neutral"
                            color="default"
                            href="https://github.com/kyritzb"
                            onClick={(e) => {
                              e.preventDefault();
                              window.location.href =
                                "https://github.com/kyritzb";
                            }}
                          >
                            <i className="fab fa-github" />
                          </Button>
                          <Button
                            className="btn-icon btn-simple btn-round btn-neutral"
                            color="default"
                            href="https://stevens.joinhandshake.com/users/15080742"
                            onClick={(e) => {
                              e.preventDefault();
                              window.location.href =
                                "https://stevens.joinhandshake.com/users/15080742";
                            }}
                          >
                            <i className="tim-icons icon-single-02" />
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col lg="4" md="5"></Col>
              </Row>
            </div>
          </div>
          <section className="section section-lg">
            <section className="section">
              <img
                alt="..."
                className="path"
                src={require("assets/img/path4.png")}
              />
              <Container>
                <Row className="row-grid justify-content-between">
                  <Col md="6">
                    <div className="pl-md-5">
                      <h1>About Me</h1>
                      <p>
                        Hello! My name is Bryan Kyritz. I am a junior computer
                        engineering student at Stevens Institute of Technology,
                        located in Hoboken, NJ.
                      </p>
                      <br />
                      <p>
                        I love building things for the web including both
                        frontend and backend. My ultimate goal is to build
                        technologies that impact the way we live our lives.
                      </p>
                      <br />
                      <p>
                        Here are some technologies i've been working with
                        recently:
                      </p>
                      <Row
                        className="row-grid justify-content-between"
                        style={{ marginTop: "10%" }}
                      >
                        <Col>
                          <ul>
                            <li>JavaScript (ES6+)</li>
                            <br />
                            <li>Node.js</li>
                            <br />
                            <li>React</li>
                          </ul>
                        </Col>
                        <Col>
                          <ul>
                            <li>Azure</li>
                            <br />
                            <li>AWS</li>
                            <br />
                            <li>React Native</li>
                          </ul>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col lg="4" md="5">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/Bryan.JPG")}
                    />
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
          <section className="section section-lg">
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
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h1 className="text-center">My Main Projects</h1>
                  <Row className="row-grid justify-content-center">
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-primary"></div>
                        <img
                          src={SmLogo}
                          alt="logo"
                          style={{
                            height: "50px",
                            width: "50px",
                          }}
                        />
                        <div className="btn-wrapper mb-3">
                          <p className="info-title d-inline">Secure Meeting</p>
                          <Button
                            className="btn-link"
                            href="www.securemeeting.org"
                            onClick={(e) => {
                              e.preventDefault();
                              window.location.href =
                                "https://www.securemeeting.org";
                            }}
                            size="sm"
                            style={{ color: "#f6f9fc" }}
                          >
                            <i className="tim-icons icon-minimal-right" />
                          </Button>
                        </div>
                        <hr className="line-primary" />
                        <p className="info-title d-inline">Co-founder & CTO</p>
                        <p>
                          Secure Meeting is on a mission to build the safest and
                          most reliable video chat. This will be done by
                          building an advanced, autoscaling backend with an army
                          of SFU's and MCU's that intelligenly switch servers
                          throughout your call.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-warning">
                          <img
                            src={Cympl}
                            alt="logo"
                            style={{
                              height: "50px",
                              width: "50px",
                            }}
                          />
                        </div>
                        <div className="btn-wrapper mb-3">
                          <p className="info-title d-inline">Cympl</p>
                          <Button
                            className="btn-link"
                            href="#pablo"
                            onClick={(e) => {
                              e.preventDefault();
                              window.location.href = "https://www.cympl.io";
                            }}
                            size="sm"
                            style={{ color: "#f6f9fc" }}
                          >
                            <i className="tim-icons icon-minimal-right" />
                          </Button>
                        </div>
                        <hr className="line-warning" />
                        <p className="info-title d-inline">Co-founder & CTO</p>
                        <p>
                          Cympl believes that the future of work is from your
                          phone. Cympl is on a mission to provide the virtual
                          workspace of the future.
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info">
                        <div className="icon icon-success">
                          <img
                            src={Scout}
                            alt="logo"
                            style={{
                              height: "50px",
                              width: "50px",
                            }}
                          />
                        </div>
                        <div className="btn-wrapper mb-3">
                          <p className="info-title d-inline">Scout</p>
                          <Button
                            className="btn-link"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                            style={{ color: "#f6f9fc" }}
                          >
                            <i className="tim-icons icon-minimal-right" />
                          </Button>
                        </div>
                        <hr className="line-success" />
                        <p className="info-title d-inline">Project Lead</p>
                        <p>
                          Scout is a multiplayer, mobile game that is a new take
                          on the neighborhood game, manhunt. Invite your friends
                          to a lobby and select a boundary to play.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section>
            <Container>
              <h3>My Recent Repos...</h3>
              <p>Last updated {this.state.timeRefreshed}</p>
              <Row className="justify-content-center">
                {this.state.repos.map((value, index) => {
                  if (
                    index >= this.state.currProjPage * 3 - 3 &&
                    index < this.state.currProjPage * 3
                  ) {
                    return (
                      <Grow
                        in={true}
                        timeout={1000}
                        style={{ transformOrigin: "0 0 0" }}
                        {...(true ? { timeout: 1000 * ((index % 3) + 1) } : {})}
                      >
                        <Col sm="4">
                          <Card
                            style={{ minHeight: "250px", maxHeight: "250px" }}
                          >
                            <CardHeader>
                              <Row>
                                <Col>
                                  <a href={value.html_url}>
                                    <h6>{value.full_name}</h6>
                                  </a>
                                </Col>
                                <Col sm="4">
                                  <h6>
                                    {moment(value.updated_at).format(
                                      "MMM Do YY"
                                    )}
                                  </h6>
                                </Col>
                              </Row>
                            </CardHeader>
                            <CardBody>
                              <CardText
                                style={{
                                  marginTop: "20px",
                                  textOverflow: "ellipsis",
                                  wordWrap: "break-word",
                                  overflow: "hidden",
                                  maxHeight: "7.2em",
                                  lineHeight: "1.8em",
                                }}
                              >
                                {value.description
                                  ? value.description
                                  : "No description..."}
                              </CardText>
                            </CardBody>
                            <CardFooter style={{ color: "#00f2c3" }}>
                              {value.language}
                            </CardFooter>
                          </Card>
                        </Col>
                      </Grow>
                    );
                  }
                })}
              </Row>
              <Row className="justify-content-center">
                <Pagination>
                  {this.state.repos.map((value, index) => {
                    if (index % 3 === 0) {
                      let page = index / 3 + 1;
                      if (page === this.state.currProjPage) {
                        return (
                          <PaginationItem active>
                            <PaginationLink>{page}</PaginationLink>
                          </PaginationItem>
                        );
                      } else {
                        return (
                          <PaginationItem>
                            <PaginationLink
                              onClick={() => {
                                this.setProjPage(page);
                              }}
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      }
                    }
                  })}
                </Pagination>
              </Row>
              {/*<Footer /> */}
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center">
                <Col lg="6">
                  <Row className="justify-content-center">
                    <h1 className="text-center">Get In Touch!</h1>
                  </Row>
                  <Row className="justify-content-center">
                    <p className="text-center" style={{ fontSize: "20px" }}>
                      I'm always looking for any new opportunities! My inbox is
                      always open. Whether you have a question or just want to
                      say hi, I'll try my best to get back to you!
                    </p>
                  </Row>
                  <Row
                    className="justify-content-center"
                    style={{ marginTop: "30px" }}
                  >
                    <Button
                      color="success"
                      onClick={() => {
                        window.location.href = "mailto:kyritzb@gmail.com";
                      }}
                    >
                      Say Hello!
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer />
        </div>
      </>
    );
  }
}

export default LandingPage;
