import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer id="sticky-footer" class="fixed-bottom bg-body-tertiary">
        <div class="row my-5 border-top py-5 row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col mb-3">
            <div>logo</div>
            <div>copyright</div>
          </div>
          <div className="col mb-3">
            <div>Contact Info</div>
          </div>
          <div className="col mb-3">
            <div>Services</div>
          </div>
          <div className="col mb-3">
            <div>Connect</div>
          </div>
        </div>
      </footer>
    </div>
  );
};
