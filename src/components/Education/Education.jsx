import "./Education.css";

const Education = () => {
    return (
        <>
            <section class="section">
                <div class="sectioncontainer">
                    <div class="columns">
                        <div class="column">
                            <div class="text">
                                <h1>About me</h1>
                                <p>
                                    I am a self-taught developer and I started
                                    my journey past 1 year. At the moment I am
                                    tailoring my skills on HTML, CSS,
                                    JavaScript, Bootstrap and React. This gives
                                    me a lot of joy when I see my progress,
                                    while I am learning and trying to take
                                    action on what I have learned.
                                </p>
                            </div>
                        </div>
                        <div class="educationsection">
                            <div class="isnarrow">
                                <div class="timeline">
                                    <div class="timeline-text">
                                        <h2>B.TECH</h2>
                                        <p>
                                            Electronics and Telecommunication,
                                            Don Bosco Technical Institute
                                        </p>
                                        <p>2018-present</p>
                                    </div>
                                    <div class="timeline-text">
                                        <h2>Diploma</h2>
                                        <p>
                                            Electronics and Telecommunication,
                                            St. Xaviers Technical Institute
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default Education;
