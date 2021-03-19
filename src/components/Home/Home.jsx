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

                <div className="container-fluid aboutWrapper">
                    <div className="row">
                        <div className="about text-center col-md-12 col-xs-12">
                            <div className="aboutcontent">
                                <h3>About Me</h3>
                                <h6 >
                                    I am a self-taught developer and I started
                                    my journey past 1 year. At the moment I am
                                    tailoring my skills on HTML, CSS, JavaScript,
                                    Bootstrap and React. This gives me a lot of
                                    joy when I see my progress, while I am
                                    learning and trying to take action on what I
                                    have learned.
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
