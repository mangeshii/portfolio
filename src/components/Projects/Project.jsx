import "./Project.css";
import pokedex from "../../images/pokedex.png";
import weatherapp from "../../images/weather_app.png";
import todo from "../../images/todo.png";
import randomquote from "../../images/random_quote.png";
import portfolio from "../../images/portfolio.png";

const Project = () => {
    return (
        <div className="projectWrapper container-fluid">
            <h1>MyWork</h1>
            <div className="contain projCont">
                <div class="flip-card col-md-4 col-xs-12">
                    <div class="flip-card-inner">
                        <div
                            class="flip-card-front card1"

                        >
                            <img
                                className="frontcard"
                                src={weatherapp}
                                alt="Avatar"
                                // style={{
                                //     width: "100%",
                                //     height: "300px",
                                //     opacity:0.3
                                // }}
                            />
                            <h1>WEATHER APP</h1>
                        </div>
                        <div class="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card col-md-4 col-xs-12">
                    <div class="flip-card-inner">
                        <div class="flip-card-front card2">
                            <img
                                className="frontcard"
                                src={pokedex}
                                alt="Avatar"
                                // style={{ width: "100%", height: "300px",opacity:0.3 }}
                            />
                            <h1>POKEDEX</h1>
                        </div>
                        <div class="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card col-md-4 col-xs-12">
                    <div class="flip-card-inner">
                        <div class="flip-card-front card3">
                            <img
                                className="frontcard"
                                src={todo}
                                alt="Avatar"
                                // style={{ width: "100%", height: "300px" ,opacity:0.3}}
                            />

                            <h1>TODO APP</h1>
                        </div>
                        <div class="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card col-md-4 col-xs-12">
                    <div class="flip-card-inner">
                        <div class="flip-card-front card4">
                            <img
                                className="frontcard"
                                src={randomquote}
                                alt="Avatar"
                                // style={{ width: "100%", height: "300px" ,opacity:0.3}}
                            />
                            <h1>RANDOM QUOTE GENERATOR</h1>
                        </div>
                        <div class="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card col-md-4 col-xs-12">
                    <div class="flip-card-inner">
                        <div class="flip-card-front card5">
                            <img
                                className="frontcard"
                                src={portfolio}
                                alt="Avatar"
                                // style={{ width: "100%", height: "300px" ,opacity:0.3}}
                            />
                            <h1>PORTFOLIO</h1>
                        </div>
                        <div class="flip-card-back">
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default Project;
