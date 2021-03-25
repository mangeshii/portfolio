import "./Home.css";
import avtar from "../../images/avtar.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    return (
        <>
            <div className="wrapper">

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
                                    <a href="#contact"><button className="contactmebtn">Contact Me</button></a>
                                    <a href="https://drive.google.com/file/d/1gMp6VlUAfziPd2LU86oEaY6N_QhdopIX/view?usp=sharing" rel="noreferrer" target="_blank"><button className="resumebtn">My Resume</button></a>
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
