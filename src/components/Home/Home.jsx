import "./Home.css";
import avtar from "../../images/avtar.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    return (
        <>
            <div className="wrapper">
                <nav className="navbar sticky-top navbar-light bg-light">
                    {/* <a className="navbar-brand" href="#">
                        <ul></ul>
                    </a> */}
                </nav>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="avtar col-md-3 col-xs-12">
                                <img
                                    src={avtar}
                                    className="img-fluid"
                                    alt="avtarImage"
                                />
                            </div>
                            <div className="aboutme col-md-9 col-xs-12">
                                <h6>Hello! I'm Mangeshi</h6>
                                <h1>Front-End Developer</h1>
                                <h6>
                                    I design and develop responsive, optimized
                                    and efficient websites.
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
