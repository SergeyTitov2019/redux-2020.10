import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CameraRollTwoToneIcon from '@material-ui/icons/CameraRollTwoTone';
import DeckTwoToneIcon from '@material-ui/icons/DeckTwoTone';
import LongMenu from './menu';
import TemporaryDrawer from './drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

export default function DenseAppBar () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static"
              style={{backgroundColor: 'peru'}}
      >
        <Toolbar variant="dense">
          <TemporaryDrawer/>
          {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
          {/*</IconButton>*/}
          <Typography variant="h6" color="inherit">
            Learning Redux
          </Typography>
          <CameraRollTwoToneIcon style={{marginLeft: '15px'}} />
          {/*<DeckTwoToneIcon/>*/}
          <LongMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}
