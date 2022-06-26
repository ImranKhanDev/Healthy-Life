import React from "react";

const Services = () => {
  return (
    <>
      <div>
        <h1>Our wonderful services</h1>
        <p style={{ fontWeight: 500 }}>
          Get 24/7 services from HEALTHY LIFE STORE
        </p>
      </div>

      <div className="container mt-3">
        <div className="service-content d-flex justify-content-between align-items-center">
          <img
            src="./delivery.png"
            alt="delivery"
            style={{ width: 350, height: 350, borderRadius: "50%" }}
          />
          <div className="desc ">
            <h3>Get Free Home Delivery</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              aspernatur, molestiae perferendis odit magni provident illo esse
              repudiandae iste in harum nemo commodi deleniti sit.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              aspernatur, molestiae perferendis odit magni provident illo esse
              repudiandae iste in harum nemo commodi deleniti sit.
            </p>
          </div>
        </div>

        <div className="service-content py-5 d-flex justify-content-between align-items-center">
          <div className="desc right">
            <h3>Return & Refund Policy is Available.</h3>
            <p>
              Offering free return shipping also has major benefits for
              retailers. Consumers overwhelmingly prefer to support merchants
              with generous return policies, while a seamless and easy returns
              process makes them much more likely to shop again with a brand in
              the future
            </p>

            <p>
              What is a return and refund policy? A return and refund policy is
              an agreement between customers and your business regarding returns
              and refunds. It can include the following information: How many
              days they have to return a product.
            </p>
          </div>
          <img
            src="./return.png"
            alt="delivery"
            style={{ width: 350, height: 350, borderRadius: "50%" }}
          />
        </div>

        <br />

        <div className="service-content py-5 d-flex justify-content-between align-items-center">
          <div className="desc right">
            <h3>24/7 Customer Support Available.</h3>
            <p>
              At Source Support Services, we live up to our name. Whether for
              on-site assistance, technical support, or remote support, Source
              is here to ensure our customers’ success and end-users’ business
              productivity. We offer dependable, on-demand support options
              including 24/7 technical and remote support and 4-hour and next
              business day global on-site support in over 100 countries
              worldwide
            </p>

            <p>
              Through our state-of-the-art training programs, Source Central
              case management platform, U.S.-based Support Operations Center,
              and our network of locally based field service professionals, we
              deliver complete, one-stop technical product support services with
              unparalleled scalability and expertise.
            </p>
          </div>
          <img
            src="./customer.png"
            alt="delivery"
            style={{ width: 350, height: 350, borderRadius: "50%" }}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
