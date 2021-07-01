import React from "react";
import ReactDOM from "react-dom";

import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

function Calendar() {
    return (
      <div className="Calendar">
        <WhiteTextTypography  variant="h4" align="center" color="white"> When and Where </WhiteTextTypography>
        <WhiteTextTypography  variant="h6" align="center" color="white"> Meetings take place in Room 131 </WhiteTextTypography>
        <WhiteTextTypography  variant="h6" align="center" color="white"> Every other Day 4 (Except Wednesdays) </WhiteTextTypography>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23F4511E&amp;ctz=America%2FToronto&amp;src=b2Nkc2IuY2FfdXFta3VnbXNobWRoaXFiNDQwZ3A1dmhkdGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%236633CC" title="af-calendar" width="750" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
      </div>
    );
  }


export default Calendar; 


