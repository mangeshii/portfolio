import "./Skills.css";

const Skills = () => {
    return (
        <>
            <div className="skillWrapper">
                <div className="skillHeading">
                    <h2>Skill Stack</h2>
                    <h5>Below is the quick overview of my main technical skills sets and tools I use</h5>
                </div>
                <div className="container skillStack">
                    <div className="card col-md-4 col-sm-6">
                        <i class="fab fa-html5"></i>
                    </div>
                    <div className="card col-md-4 col-sm-6">
                        <i class="fab fa-css3-alt"></i>
                    </div>
                    <div className="card col-md-4 col-sm-6">
                        <i class="fab fa-js"></i>
                    </div>
                    <div className="card col-md-4 col-sm-6">
                        <i class="fab fa-bootstrap"></i>
                    </div>
                    <div className="card col-md-4 col-sm-6">
                        <i class="fab fa-react"></i>
                    </div>
                    <div className="card col-md-4 col-sm-6">
                        <i class="fas fa-database"></i>
                    </div>

                    <div className="card col-md-4 col-sm-6">
                        <i class="fab fa-sass"></i>
                    </div>
                    <div className="card col-md-4 col-sm-6">
                        <i class="fas fa-terminal"></i>
                    </div>

                    <div className="card col-md-4 col-sm-6">
                        <i class="fab fa-git-alt"></i>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Skills;
