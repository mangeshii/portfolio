import "./Project.css";
import pokedex from "../../images/pokedex.png";
import weatherapp from "../../images/weather_app.png";
import todo from "../../images/todo.png";
import randomquote from "../../images/random_quote.png";
import portfolio from "../../images/portfolio.png";

const Project = () => {
    return (
        <>
        <div className="projectWrapper container-fluid">
            <h3 className="projectHeading">MyWork</h3>
            <div className="contain projCont">
                <div class="flip-card col-md-4 col-xs-12 col-sm-6">
                    <div class="flip-card-inner">
                        <div
                            class="flip-card-front card1"

                        >
                            <img
                                className="frontcard"
                                src={weatherapp}
                                alt="Avatar"
                            />
                            <h3>WEATHER APP</h3>
                        </div>
                        <div class="flip-card-back">
                            <h3>John Doe</h3>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card col-md-4 col-xs-12 col-sm-6">
                    <div class="flip-card-inner">
                        <div class="flip-card-front card2">
                            <img
                                className="frontcard"
                                src={pokedex}
                                alt="Avatar"
                                // style={{ width: "100%", height: "300px",opacity:0.3 }}
                            />
                            <h3>POKEDEX</h3>
                        </div>
                        <div class="flip-card-back">
                            <h3>John Doe</h3>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card col-md-4 col-xs-12 col-sm-6">
                    <div class="flip-card-inner">
                        <div class="flip-card-front card3">
                            <img
                                className="frontcard"
                                src={todo}
                                alt="Avatar"
                                // style={{ width: "100%", height: "300px" ,opacity:0.3}}
                            />

                            <h3>TODO APP</h3>
                        </div>
                        <div class="flip-card-back">
                            <h3>John Doe</h3>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card col-md-4 col-xs-12 col-sm-6">
                    <div class="flip-card-inner">
                        <div class="flip-card-front card4">
                            <img
                                className="frontcard"
                                src={randomquote}
                                alt="Avatar"
                                // style={{ width: "100%", height: "300px" ,opacity:0.3}}
                            />
                            <h3>RANDOM QUOTE GENERATOR</h3>
                        </div>
                        <div class="flip-card-back">
                            <h3>John Doe</h3>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card col-md-4 col-xs-12 col-sm-6">
                    <div class="flip-card-inner">
                        <div class="flip-card-front card5">
                            <img
                                className="frontcard"
                                src={portfolio}
                                alt="Avatar"
                            />
                            <h3>PORTFOLIO</h3>
                        </div>
                        <div class="flip-card-back">
                            <h3>John Doe</h3>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <hr/>
        </>
    );
};
export default Project;
