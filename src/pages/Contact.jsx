import React from "react";

function Contact() {
    return (
        <>
  <section className="subscribe no-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="subscribe-call-to-acton">
            <h3>Can We Help?</h3>
            <h4>+1 (215) 512-9020</h4>
          </div>
        </div>
        {/* Col end */}
        <div className="col-lg-8">
          <div className="ts-newsletter row align-items-center">
            <div className="col-md-5 newsletter-introtext">
              <h4 className="text-white mb-0">Contact Us</h4>
              <p className="text-white">Anytime You Need</p>
            </div>
            <div className="col-md-7 newsletter-form">
              <div className="form-group">
                <div className="footer-contact">
                  <ul>
                    <li className="icon-item whatsapp-icon">
                      <i className="fab fa-whatsapp" />
                    </li>
                    <li className="icon-item mail-icon">
                      <i className="fas fa-envelope" />
                    </li>
                    <li className="icon-item messenger-icon">
                      <i className="fab fa-facebook-messenger" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Contact end */}
        </div>
        {/* Col end */}
      </div>
      {/* Content row end */}
    </div>
    {/*/ Container end */}
  </section>
  {/*/ subscribe end */}
  <section id="main-container" className="main-container">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="column-title">We love to hear</h3>
          <form id="contact-form" action="#" method="post" role="form">
            <div className="error-container" />
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    className="form-control form-control-name"
                    name="name"
                    id="name"
                    placeholder=""
                    type="text"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control form-control-email"
                    name="email"
                    id="email"
                    placeholder=""
                    type="email"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label>Subject</label>
                  <input
                    className="form-control form-control-subject"
                    name="subject"
                    id="subject"
                    placeholder=""
                    required=""
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                className="form-control form-control-message"
                name="message"
                id="message"
                placeholder=""
                rows={10}
                required=""
                defaultValue={""}
              />
            </div>
            <div className="text-right">
              <br />
              <button className="btn btn-primary solid blank" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/*/ Title row end */}
  {/*/ Container end */}
</>

    )
}

export default Contact