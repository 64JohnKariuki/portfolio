import React from "react";

const Footer = () => {
  
  return (
    <>
      {/*-- FOOTER --*/}
      <footer className="container">
        <div className="flex">
          <div className="row">
            <div className="col">
              {/*-- Copyright --*/}
              <h6 className="d-flex align-items-center">
                <hr className="hr-sm me-3 h-1"/>
                &copy; 2021 <span className="text-secondary"> Touche</span>. All rights reserved.
              </h6>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
