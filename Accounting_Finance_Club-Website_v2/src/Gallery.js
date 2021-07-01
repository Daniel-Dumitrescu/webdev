import React, { useCallback, useState } from "react";
import { animated, useTransition, config } from "react-spring";

import mountains from "./assets/Meeting.jpg";
import beach from "./assets/Game.jpg";
import desert from "./assets/Camera.jpg";

import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from '@material-ui/core/styles';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import "./gallery.css";


const images = [
  ({ style }) => <div>
    <animated.img src={mountains} alt="Mountains" style={style} /> 
    <Typography className="gallery-desc" variant="h5" align="center"> The next Accounting & Finance Club meeting will take place on Monday, January 13th </Typography></div>,
  ({ style }) => <div> <animated.img src={beach} alt="Beach" style={style} />,
    <animated.img src={beach} alt="Mountains" style={style} /> 
    <Typography className="gallery-desc" variant="h5" align="center"> Form for next round of Accounting & Finance Game is due by Friday, January 17th </Typography></div>,

 /*  Yearbook photos will take place on Thursday, January 23rd
  The next Accounting & Finance Club meeting will take place on Monday, January 13th
  Form for next round of Accounting & Finance Game is due by Friday, January 17th */


  ({ style }) => <div>
  <animated.img src={desert} alt="Desert" style={style} />
  <Typography className="gallery-desc" variant="h5" align="center">Yearbook photos will take place on Thursday, January 23rd</Typography></div>
];

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const onClick = useCallback(() => setIndex(state => (state + 1) % 3), []);

  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-150%)" },
    config: config.slow
  });

  return (
    <div className="gallery" onClick={onClick}>
      <ArrowForwardIosIcon className="gallery-directions"></ArrowForwardIosIcon>
      {/* <p className="gallery-directions">Click anywhere to see the next image</p> */}
      {transitions.map(({ item, props, key }) => {
        const Image = images[item];
        return <Image key={key} style={props} />;
      })}
    </div>
  );
};

export default Gallery;
