import "./Contact.css";

const Contact = () => {
    return (
        <>
            <div className="contactWrapper">
                <div className="footer">
                <div className="contactHeading">
                    <h3>LET'S CONNECT</h3>
                </div>
                <div className="contactIcons">
                   <a href="https://www.linkedin.com/in/mangeshipatil/"> <i class="fab fa-linkedin-in"></i></a>
                   <a href="https://github.com/mangeshii"><i class="fab fa-github"></i></a>
                   <a href="https://twitter.com/mangeshi_patil"><i class="fab fa-twitter"></i></a>
                </div>
                <div className="footerContent">
                <h5>Build with ♥️ Mangeshi </h5>
                </div>
                <div className="quote">
                    <h5>Living, Learning and Leveling up one day at a time</h5>
                </div>
            </div>
            </div>
        </>
    );
};

export default Contact;
