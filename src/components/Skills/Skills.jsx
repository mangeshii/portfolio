import "./Skills.css";
import Contact from "../Contact/Contact";

const Skills = () => {
    return (
        <>
            <section className="skillsection" id="skill">
                <div className="skillHeader">
                    <div className="headingContainer">
                        <div className="skillcolumn">
                            <h1>Skill Stack</h1>
                            <p>
                                Below is the quick overview of my main technical
                                skills sets and tools I use
                            </p>
                        </div>
                        <div className="skillContainer">
                            <div className="skillStack">
                                <div className="card col-md-4 col-sm-6 col-xs-12">
                                    <i className="fab fa-html5"></i>
                                </div>
                                <div className="card col-md-4 col-sm-6 col-xs-12">
                                    <i className="fab fa-css3-alt"></i>
                                </div>
                                <div className="card col-md-4 col-sm-6 col-xs-12">
                                    <i className="fab fa-js"></i>
                                </div>
                                <div className="card col-md-4 col-sm-6 col-xs-12">
                                    <i className="fab fa-bootstrap"></i>
                                </div>
                                <div className="card col-md-4 col-sm-6 col-xs-12">
                                    <i className="fab fa-react"></i>
                                </div>
                                <div className="card col-md-4 col-sm-6 col-xs-12">
                                    <i className="fas fa-database"></i>
                                </div>
                                <div className="card col-md-4 col-sm-6 col-xs-12">
                                    <i className="fab fa-sass"></i>
                                </div>
                                <div className="card col-md-4 col-sm-6 col-xs-12">
                                    <i className="fas fa-terminal"></i>
                                </div>
                                <div className="card col-md-4 col-sm-6 col-xs-12">
                                    <i className="fab fa-git-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr style={{ marginTop: "10%" }} />
                    <Contact />
                </div>
            </section>
        </>
    );
};
export default Skills;
