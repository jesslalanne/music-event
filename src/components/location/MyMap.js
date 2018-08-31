import React from "react";

const MyMap = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="Plan Wild Code School"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2896.68114256744!2d-1.5549106849988914!3d43.446374979128905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51151b04400001%3A0x5e8e4026b1a5e55f!2sWild+Code+School+Formation+d%C3%A9veloppeur+web%2Fmobile!5e0!3m2!1sfr!2sfr!4v1535706161772"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      ></iframe>

        <div className="location_tag">
            <div>Location</div>
        </div>
    </div>
  );
};

export default MyMap;
