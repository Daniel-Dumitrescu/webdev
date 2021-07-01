import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

//icons
import HomeIcon from '@material-ui/icons/Home';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    width: 1500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
     onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction 
        component={Link}
        to="/Home" 
        label="Home" 
        icon={<HomeIcon />} />
      <BottomNavigationAction 
        component={Link}
        to="/Calendar" 
        label="Calendar" 
        icon={<CalendarTodayIcon />} />
      <BottomNavigationAction 
        component={Link}
        to="/Files" 
        label="Files" 
        icon={<FileCopyIcon/>} />
    </BottomNavigation>
  );
}