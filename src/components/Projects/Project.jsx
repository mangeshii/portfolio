import "./Project.css";
import pokedex from "../../images/pokedex.png";
import weatherapp from "../../images/weather_app.png";
import todo from "../../images/todo.png";
import randomquote from "../../images/random_quote.png";
import portfolio from "../../images/portfolio.png";
import technicalpaper from "../../images/technicalpaper.png";
import Skills from "../Skills/Skills";
import "bootstrap/dist/css/bootstrap.min.css";

const Project = () => {
    return (
        <>
            <section className="projectsection" id="project">
                <div className="projectHeader">
                    <h1>My Recent Work</h1>
                    <h6>Here are a few projects I've worked on recently.</h6>
                </div>
                <div className="container-lg">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                        <div className="col">
                            <div class="flip-card ">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front card1">
                                        <img
                                            className="frontcard"
                                            src={weatherapp}
                                            alt="Avatar"
                                        />
                                        <h3>WEATHER APP</h3>
                                    </div>
                                    <div class="flip-card-back">
                                        <p>
                                            A Weather App is capable of pulling
                                            weather information such as
                                            temperature, weather description,
                                            city and country name from the API.
                                        </p>
                                        <a href="https://github.com/mangeshii/weather-app-using-react">
                                            <button className="gitbutton">
                                                See on Github{" "}
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front card2">
                                        <img
                                            className="frontcard"
                                            src={todo}
                                            alt="Avatar"
                                        />
                                        <h3>TODO APP</h3>
                                    </div>
                                    <div class="flip-card-back">
                                        <p>
                                            A Todo App is designed which has the
                                            capability to add, delete and mark
                                            as complete
                                        </p>

                                            <button className="gitbutton">
                                                See on Github
                                            </button>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front card3">
                                        <img
                                            className="frontcard"
                                            src={pokedex}
                                            alt="Avatar"
                                        />
                                        <h3>POKEDEX</h3>
                                    </div>
                                    <div class="flip-card-back">
                                        <p>
                                            It consists of all the pokemon data
                                            which is fetched from API. Once you
                                            click in a particular pokemon card
                                            it with render a page will more
                                            information about that pokemon.
                                        </p>
                                        <a href="https://github.com/mangeshii/pokedex-using-react">
                                            <button className="gitbutton">
                                                See on Github
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front card4">
                                        <img
                                            className="frontcard"
                                            src={portfolio}
                                            alt="Avatar"
                                        />
                                        <h3>PORTFOLIO</h3>
                                    </div>
                                    <div class="flip-card-back">
                                        <p>
                                            It is a responsive website made with
                                            the help of html, css, react and
                                            bootstrap
                                        </p>
                                        <a href="https://github.com/mangeshii/portfolio">
                                            <button className="gitbutton">
                                                See on Github{" "}
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div class="flip-card ">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front card5">
                                        <img
                                            className="frontcard"
                                            src={randomquote}
                                            alt="Avatar"
                                        />
                                        <h3>RANDOM QUOTE GENERATOR</h3>
                                    </div>
                                    <div class="flip-card-back">
                                        <p>
                                            A Random Quote Generator is capable
                                            of pulling quotes randomly from an
                                            API. It is also capable of tweeting
                                            one of the random quote to the
                                            twitter
                                        </p>
                                        <a href="https://github.com/mangeshii/random-quote-generator">
                                            <button className="gitbutton">
                                                See on Github
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front card6">
                                        <img
                                            className="frontcard"
                                            src={technicalpaper}
                                            alt="Avatar"
                                        />
                                        <h3>TECHNICAL PAPER</h3>
                                    </div>
                                    <div class="flip-card-back">
                                        <p>
                                            A Weather App is capable of pulling
                                            weather information such as
                                            temperature, weather description,
                                            city and country name from the API.
                                        </p>
                                        <a href="https://github.com/mangeshii/weather-app-using-react">
                                            <button className="gitbutton">
                                                See on Github
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Skills />
        </>
    );
};
export default Project;
