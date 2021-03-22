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
                   <a href="https://www.linkedin.com/in/mangeshipatil/"> <i class="fab  fabicon fa-linkedin-in"></i></a>
                   <a href="https://github.com/mangeshii"><i class="fab fabicon fa-github"></i></a>
                   <a href="https://twitter.com/mangeshi_patil"><i class="fab fabicon fa-twitter"></i></a>
                </div>
                <div className="footerContent">
                <h5>Build with ♥️ by Mangeshi </h5>
                </div>
                <div className="quote" style={{display:'flex',justifyContent:'center'}}>
                    <h5 style={{width:'80%',textAlign:'center',color:'#656565'}}>Living, Learning and Leveling up one day at a time</h5>
                </div>
            </div>
            </div>
        </>
    );
};

export default Contact;
