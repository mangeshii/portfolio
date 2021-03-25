import "./Home.css";
import avtar from "../../images/avtar.png";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../Navbar/Navbar"
import { Navbar, Nav } from "react-bootstrap";

const Home = () => {
    return (
        <>
            <Navbar className="nav" bg="light" expand="md" fixed="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
                        <Nav.Link className="nav-link" href="#about">About</Nav.Link>
                        <Nav.Link className="nav-link" href="#education">Education</Nav.Link>
                        <Nav.Link  className="nav-link" href="#project">Projects</Nav.Link>
                        <Nav.Link className="nav-link" href="#skill">Skills</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="wrapper" id="home">
                <div className="container-fluid">
                    <div className="cont">
                        <div className="row">
                            <div className="avtar col-md-3 col-xs-12">
                                <img
                                    src={avtar}
                                    className="img-fluid avtarimg"
                                    alt="avtarImage"
                                />
                            </div>
                            <div className="aboutme col-md-9 col-xs-12">
                                <h6>Hello! I'm Mangeshi</h6>
                                <h3>Front-End Developer</h3>
                                <h6>
                                    I design and develop responsive, optimized
                                    and efficient websites.
                                </h6>
                                <div className="buttons">
                                    <a href="#contact">
                                        <button className="contactmebtn">
                                            Contact Me
                                        </button>
                                    </a>
                                    <a
                                        href="https://drive.google.com/file/d/1gMp6VlUAfziPd2LU86oEaY6N_QhdopIX/view?usp=sharing"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <button className="resumebtn">
                                            My Resume
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
