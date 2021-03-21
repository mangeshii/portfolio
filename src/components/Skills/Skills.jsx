import "./Skills.css";

const Skills = () => {
    return (
        <>
            <div className="skillWrapper">
                <div className="skillHeading">
                    <h3>Skill Stack</h3>
                    <h6>Below is the quick overview of my main technical skills sets and tools I use</h6>
                </div>
                <div className="skillcontainer">
                <div className="container skillStack">
                    <div className="card col-md-4 col-sm-6 col-xs-12">
                        <i class="fab fa-html5"></i>
                    </div>
                    <div className="card col-md-4 col-sm-6 col-xs-12">
                        <i class="fab fa-css3-alt"></i>
                    </div>
                    <div className="card col-md-4 col-sm-6 col-xs-12">
                        <i class="fab fa-js"></i>
                    </div>
                    <div className="card col-md-4 col-sm-6 col-xs-12">
                        <i class="fab fa-bootstrap"></i>
                    </div>
                    <div className="card col-md-4 col-sm-6 col-xs-12">
                        <i class="fab fa-react"></i>
                    </div>
                    <div className="card col-md-4 col-sm-6 col-xs-12">
                        <i class="fas fa-database"></i>
                    </div>

                    <div className="card col-md-4 col-sm-6 col-xs-12">
                        <i class="fab fa-sass"></i>
                    </div>
                    <div className="card col-md-4 col-sm-6 col-xs-12">
                        <i class="fas fa-terminal"></i>
                    </div>

                    <div className="card col-md-4 col-sm-6 col-xs-12">
                        <i class="fab fa-git-alt"></i>
                    </div>
                </div>
            </div>
            </div>
            <hr style={{marginTop:'10%'}}/>
        </>
    );
};
export default Skills;
