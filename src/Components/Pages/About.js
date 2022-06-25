import React from "react";

const About = () => {
  return (
    <div className="about-us">
      <div className="py-5" style={{ background: "black", color: "#fff" }}>
        <h1>About Healthy Life </h1>
        <p>
          <span style={{ fontWeight: "bold" }}>HEALTHY LIFE </span>is one of the
          biggest e-commerce site{" "}
        </p>
      </div>
      <div className="container mt-4">
        <div className="item row">
          <div className="item-img col">
            <img
              src="./fresh.jpg"
              alt="fresh-meat"
              style={{ height: "320px", width: "400px" }}
            />
          </div>
          <div className="item-content text-start col">
            <h1> Good Food , Good Life</h1>
            <p>
              <span>Get fresh food from healthy life store</span> <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              voluptas sunt doloribus, ad neque
              <br />
              ratione quia quidem, ducimus impedit placeat rem. Atque aspernatur
              dolores suscipit similique, esse nihil provident voluptatem.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              veniam odio perspiciatis esse maxime, possimus eligendi non unde
              hic a!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
