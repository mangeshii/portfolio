import "./Education.css";

const Education = () => {
    return (
        <>
            <div
                class="container-fluid educationWrapper text-center"
                id="education"
            >
                <div class="container1">
                    <div class="edu">Education</div>
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
                                Electronics and Telecommunication, St. Xaviers
                                Technical Institute
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
        </>
    );
};

export default Education;