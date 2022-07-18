import React from "react";
import "../Company/Company.css";

const Company = () => {
  return (
    <div className="container">
      <div className="company-cont">
        <div className="company-text">
          <h2 className="company-h2">
            We inspire the <br />
            world by sharing
            <br /> our passion for
            <br /> Mediterranean
            <br /> style and culture
          </h2>
          <p className="company-p">
            The water that bathes our coasts, the
            <br />
            warmth of its light and the joy of our people. At MANGO, we want to
            share <br /> the best of the Mediterranean essence we have
            cultivated for over 35 years.
            <br /> The taste for a slow life and an appreciation for detail,
            which we
            <br />
            translate from our collections into timeless designs that are
            <br />
            committed to the environment. A natural and contemporary style
            <br /> that also unites us through the enjoyment of culture in all
            its
            <br /> forms.
          </p>
        </div>
        <div className="our-collections">
          <h6 className="our-collections">OUR COLLECTIONS</h6>
          <p className="our-collections-p">
            Our Woman, Man and Kids collections reflect, by paying attention to
            fabrics and details, the essence of Mediterranean style with a
            contemporary twist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Company;
