import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';

import L1 from "../assets/L1.jpg";
import L2 from "../assets/L2.jpg";
import L3 from "../assets/L3.jpg";
import L4 from "../assets/L4.png";


const useStyles = makeStyles({
  root: {
    width: 300,
    height: 300,
    justifyContent: 'center'
    
  },
  media: {
    height: 140,
  },
});

const theme = {
  spacing: 8,  

}



function Files() {
  const classes = useStyles();

    return (
      <div className="Files" style={{display: 'flex', justifyContent: 'center'}}>
        <Box  p={5} mt={10}>
        <Card className={classes.root}>
          <CardActionArea >
            <CardMedia 
              className={classes.media}
              image = { L1 } />
            <CardContent >
            <ButtonBase 
            size="small" color="primary" 
            onClick={(e) => {
             e.preventDefault();
             window.location.href='https://docs.google.com/document/d/12ZhM5l2tPlipTO5pBn_PHEVIMskigD5yMO5Spf2jhAk/edit?usp=sharing';
             }}>
               <div>
              <Typography variant="h5" align="center">
                Meeting #1: 
              </Typography>
              <Typography variant="h5" align="center">
                Starting the Business 
              </Typography>
              <Typography  variant="subtitle2" align="center">
                Review the basics of raising capital
              </Typography>
              </div>
              </ButtonBase>  
            </CardContent>
          
          <CardActions className={classes.root}>
            <Button size="small" color="primary"
               onClick={(e) => {
                e.preventDefault();
                window.location.href='https://docs.google.com/document/d/12ZhM5l2tPlipTO5pBn_PHEVIMskigD5yMO5Spf2jhAk/edit?usp=sharing';
                }}>
              Explore
            </Button>  
          </CardActions>
          </CardActionArea>
        </Card>
        </Box>

        <Box  p={5} mt={10}>
        <Card className={classes.root} p={1}>
          <CardActionArea >
            <CardMedia 
              className={classes.media}
              image = { L2 } />
            <CardContent >
            <ButtonBase 
            size="small" color="primary" 
            onClick={(e) => {
             e.preventDefault();
             window.location.href='https://docs.google.com/document/d/12ZhM5l2tPlipTO5pBn_PHEVIMskigD5yMO5Spf2jhAk/edit?usp=sharing';
             }}>
               <div>
              <Typography variant="h5" align="center">
                Meeting #2: 
              </Typography>
              <Typography variant="h5" align="center">
                Revenues and Expenses
              </Typography>
              <Typography  variant="subtitle2" align="center">
                Go through the daily transactions that a business encounters
              </Typography>
              </div>
              </ButtonBase>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.root}>
            <Button size="small" color="primary"
               onClick={(e) => {
                e.preventDefault();
                window.location.href='https://docs.google.com/document/d/1CspUvbA_K8PxIPR4BBhEvgbEpOdrDoOsbLsUwbjgfUk/edit?usp=sharing';
                }}>
              Explore
            </Button>  
          </CardActions>
        </Card>
        </Box>
        
        <Box  p={5} mt={10}>
        <Card className={classes.root} p={1}>
          <CardActionArea >
          
            <CardMedia 
              className={classes.media}
              image = { L3 } />
            <ButtonBase 
            size="small" color="primary" 
            onClick={(e) => {
             e.preventDefault();
             window.location.href='https://docs.google.com/document/d/12ZhM5l2tPlipTO5pBn_PHEVIMskigD5yMO5Spf2jhAk/edit?usp=sharing';
             }}>
            <CardContent >
              <Typography variant="h5" align="center">
                Meeting #3: 
              </Typography>
              <Typography variant="h5" align="center">
                Breaking Even 
              </Typography>
              <Typography  variant="subtitle2" align="center">
              See if you have enough revenue to make up for your expenses
              </Typography>
            </CardContent>
            </ButtonBase>
          </CardActionArea>
          <CardActions className={classes.root}>
            <Button size="small" color="primary"
               onClick={(e) => {
                e.preventDefault();
                window.location.href='https://docs.google.com/document/d/1ZDJzmaxm03a5hogW5CO83nanpOsAcrsRMHzd3d9f9w4/edit?usp=sharing';
                }}>
              Explore
            </Button>  
          </CardActions>
        </Card>
        </Box>

        <Box  p={5} mt={10}>
        <Card className={classes.root} p={1}>
          <CardActionArea >
            <CardMedia 
              className={classes.media}
              image = { L4 } />
             <ButtonBase 
            size="small" color="primary" 
            onClick={(e) => {
             e.preventDefault();
             window.location.href='https://docs.google.com/document/d/12ZhM5l2tPlipTO5pBn_PHEVIMskigD5yMO5Spf2jhAk/edit?usp=sharing';
             }}>
            <CardContent >
              <Typography variant="h5" align="center">
                Meeting #4: 
              </Typography>
              <Typography variant="h6" align="center">
                End of Accounting Period
              </Typography>
              <Typography  variant="subtitle2" align="center">
              Complete the necessary financial statements
              </Typography>
            </CardContent>
            </ButtonBase>
          </CardActionArea>
          <CardActions className={classes.root}>
            <Button size="small" color="primary"
               onClick={(e) => {
                e.preventDefault();
                window.location.href='https://docs.google.com/document/d/11qjBNVctUrjA2KYA3qVPVVmLiTWLwOtLZEmGNA6IjWs/edit?usp=sharing';
                }}>
              Explore
            </Button>  
          </CardActions>
        </Card>
        </Box>


      </div> 
    );
  }


export default Files; 