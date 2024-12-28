import React from "react";

function Testimonial() {
    return (
        <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="column-title">Testimonials</h3>
              <div id="testimonial-slide" className="testimonial-slide">
                <div className="item">
                  <div className="quote-item">
                    <span className="quote-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                      quos ad ex praesentium quae illo, velit a. Odio distinctio non,
                      itaque nisi doloremque atque aut officiis reprehenderit debitis.
                      Ipsum reprehenderit eveniet necessitatibus ratione, quas ipsa
                      adipisci possimus, unde, velit rem quam. Suscipit quibusdam
                      fugiat alias assumenda ducimus quas mollitia sit?
                    </span>
                    <div className="quote-item-footer">
                      <img
                        loading="lazy"
                        className="testimonial-thumb"
                        src="/assets/images/clients/testimonial1.png"
                        alt="testimonial"
                      />
                      <div className="quote-item-info">
                        <h3 className="quote-author">Halil Can ÇAYIR</h3>
                        <span className="quote-subtext">Bla Bla Bla</span>
                      </div>
                    </div>
                  </div>
                  {/* Quote item end */}
                </div>
                {/*/ Item 1 end */}
                <div className="item">
                  <div className="quote-item">
                    <span className="quote-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor inci done idunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitoa tion ullamco
                      laboris nisi aliquip consequat.
                    </span>
                    <div className="quote-item-footer">
                      <img
                        loading="lazy"
                        className="testimonial-thumb"
                        src="/assets/images/clients/testimonial2.png"
                        alt="testimonial"
                      />
                      <div className="quote-item-info">
                        <h3 className="quote-author">Gokce Çicek</h3>
                        <span className="quote-subtext">Bla Bla2</span>
                      </div>
                    </div>
                  </div>
                  {/* Quote item end */}
                </div>
                {/*/ Item 2 end */}
                <div className="item">
                  <div className="quote-item">
                    <span className="quote-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor inci done idunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitoa tion ullamco
                      laboris nisi ut commodo consequat.
                    </span>
                    <div className="quote-item-footer">
                      <img
                        loading="lazy"
                        className="testimonial-thumb"
                        src="/assets/images/clients/testimonial3.png"
                        alt="testimonial"
                      />
                      <div className="quote-item-info">
                        <h3 className="quote-author">Onur Cayır</h3>
                        <span className="quote-subtext">Director of Bla bla</span>
                      </div>
                    </div>
                  </div>
                  {/* Quote item end */}
                </div>
                {/*/ Item 3 end */}
              </div>
              {/*/ Testimonial carousel end*/}
            </div>
            {/* Col end */}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <h3 className="column-title">Happy Clients</h3>
              <div className="row all-clients">
                <div className="col-sm-4 col-6">
                  <figure className="clients-logo">
                    <a href="#!">
                      <img
                        loading="lazy"
                        className="img-fluid"
                        src="/assets/images/clients/client1.png"
                        alt="clients-logo"
                      />
                    </a>
                  </figure>
                </div>
                {/* Client 1 end */}
                <div className="col-sm-4 col-6">
                  <figure className="clients-logo">
                    <a href="#!">
                      <img
                        loading="lazy"
                        className="img-fluid"
                        src="/assets/images/clients/client2.png"
                        alt="clients-logo"
                      />
                    </a>
                  </figure>
                </div>
                {/* Client 2 end */}
                <div className="col-sm-4 col-6">
                  <figure className="clients-logo">
                    <a href="#!">
                      <img
                        loading="lazy"
                        className="img-fluid"
                        src="/assets/images/clients/client3.png"
                        alt="clients-logo"
                      />
                    </a>
                  </figure>
                </div>
                {/* Client 3 end */}
                <div className="col-sm-4 col-6">
                  <figure className="clients-logo">
                    <a href="#!">
                      <img
                        loading="lazy"
                        className="img-fluid"
                        src="/assets/images/clients/client4.png"
                        alt="clients-logo"
                      />
                    </a>
                  </figure>
                </div>
                {/* Client 4 end */}
                <div className="col-sm-4 col-6">
                  <figure className="clients-logo">
                    <a href="#!">
                      <img
                        loading="lazy"
                        className="img-fluid"
                        src="/assets/images/clients/client5.png"
                        alt="clients-logo"
                      />
                    </a>
                  </figure>
                </div>
                {/* Client 5 end */}
                <div className="col-sm-4 col-6">
                  <figure className="clients-logo">
                    <a href="#!">
                      <img
                        loading="lazy"
                        className="img-fluid"
                        src="/assets/images/clients/client6.png"
                        alt="clients-logo"
                      />
                    </a>
                  </figure>
                </div>
                {/* Client 6 end */}
              </div>
              {/* Clients row end */}
            </div>
            {/* Col end */}
          </div>
          {/*/ Content row end */}
        </div>
        {/*/ Container end */}
      </section>
      
    )
}

export default Testimonial