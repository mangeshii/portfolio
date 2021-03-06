import "./Education.css";
import Project from "../Projects/Project";

const Education = () => {
    return (
        <>
            <div class="section"  id="about">
                <div class="aboutcontainer">
                    <div class="outeraboutcontainer">
                        <div class="inneraboutcontainer">
                            <div class="text">
                                <h1>About Me</h1>
                                <h6>
                                    I am a self-taught developer and I started
                                    my journey past 1 year. At the moment I am
                                    tailoring my skills on HTML, CSS,
                                    JavaScript, Bootstrap and React. This gives
                                    me a lot of joy when I see my progress,
                                    while I am learning and trying to take
                                    action on what I have learned.
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div class="educationWrapper" id="education">

                        <div className="educationcontainer">
                        <h1>Education</h1>
                            <div class="timeline">
                                <div class="timeline-text">
                                    <h2>B.TECH</h2>
                                    <p>
                                        Electronics and Telecommunication, Don
                                        Bosco Technical Institute
                                    </p>
                                    <p>2018-present</p>
                                </div>
                                <div class="timeline-text">
                                    <h2>Diploma</h2>
                                    <p>
                                        Electronics and Telecommunication, St.
                                        Xaviers Technical Institute
                                    </p>
                                    <p>2015-2018</p>
                                </div>
                                <div class="timeline-text">
                                    <h2>SSC</h2>
                                    <p>Maharashtra State Board</p>
                                    <p> Till 2015</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Project />
                </div>
            </div>

            {/* <div className="main">
                <div className=" educationWrapper text-center" id="education">
                    <div class="container1">
                        <div>
                            <h3 className="edu">Education</h3>
                        </div>
                        <div class="timeline">
                            <div class="timeline-text">
                                <h2>B.TECH</h2>
                                <p>
                                    Electronics and Telecommunication, Don Bosco
                                    Technical Institute
                                </p>
                                <p>2018-present</p>
                            </div>
                            <div class="timeline-text">
                                <h2>Diploma</h2>
                                <p>
                                    Electronics and Telecommunication, St.
                                    Xaviers Technical Institute
                                </p>
                                <p>2015-2018</p>
                            </div>
                            <div class="timeline-text">
                                <h2>SSC</h2>
                                <p>Maharashtra State Board</p>
                                <p> Till 2015</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <hr /> */}
        </>
    );
};

export default Education;
