import React, { useState, useEffect } from 'react';
import { Card } from 'reactstrap';
import { Parallax } from "react-parallax";

const ProjectHeader = (props) => {
  const [bgImage, setBgImage] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [style, setStyle] = useState("");

  useEffect(() => {
    setBgImage(props.bgImage);
    setTitle(props.title);
    setDate(props.date);
    setDesc(props.desc);
    setStyle(props.style);
  }, [props]);

  return (
    <div>
      <Parallax bgImage={bgImage} strength={1000} className={style}>
        <div className="headerbg"></div>
      </Parallax>
      <div id="headerbox" className="rounded z-depth-2 mt-5">
        <div body className="text-center Card">
          <h2 className="mb-2">{title}</h2>
          <h5 className="blue-text headerDate">
            <i className="fa fa-calendar date" aria-hidden="true"> {date} </i>
          </h5>
          <p className="grey-text headerDesc">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;