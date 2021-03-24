import "./Skills.css";
import Contact from "../Contact/Contact"

const Skills = () => {
    return (
        <>
            <section class="skillsection">
                <div class="skillHeader">
                    <div class="headingContainer">
                        <div class="skillcolumn">
                            <h1>Skill Stack</h1>
                            <p>
                                Below is the quick overview of my main technical
                                skills sets and tools I use
                            </p>
                        </div>
                        <div class="skillContainer">
                            <div class="skillStack">
                                <div class="card col-md-4 col-sm-6 col-xs-12">
                                    <i class="fab fa-html5"></i>
                                </div>
                                <div class="card col-md-4 col-sm-6 col-xs-12">
                                    <i class="fab fa-css3-alt"></i>
                                </div>
                                <div class="card col-md-4 col-sm-6 col-xs-12">
                                    <i class="fab fa-js"></i>
                                </div>
                                <div class="card col-md-4 col-sm-6 col-xs-12">
                                    <i class="fab fa-bootstrap"></i>
                                </div>
                                <div class="card col-md-4 col-sm-6 col-xs-12">
                                    <i class="fab fa-react"></i>
                                </div>
                                <div class="card col-md-4 col-sm-6 col-xs-12">
                                    <i class="fas fa-database"></i>
                                </div>
                                <div class="card col-md-4 col-sm-6 col-xs-12">
                                    <i class="fab fa-sass"></i>
                                </div>
                                <div class="card col-md-4 col-sm-6 col-xs-12">
                                    <i class="fas fa-terminal"></i>
                                </div>
                                <div class="card col-md-4 col-sm-6 col-xs-12">
                                    <i class="fab fa-git-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                <Contact/>
                </div>
            </section>
        </>
    );
};
export default Skills;
