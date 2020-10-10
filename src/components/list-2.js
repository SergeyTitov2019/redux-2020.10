import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 700,
    backgroundColor: theme.palette.background.paper
  }
}));

function ListItemLink (props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/*<List component="nav" aria-label="main mailbox folders">*/}


        {/*<ListItem button>*/}
        {/*  <ListItemIcon>*/}
        {/*    <InboxIcon />*/}
        {/*  </ListItemIcon>*/}
        {/*  <ListItemText primary="Inbox" />*/}
        {/*</ListItem>*/}
        {/*<ListItem button>*/}
        {/*  <ListItemIcon>*/}
        {/*    <DraftsIcon />*/}
        {/*  </ListItemIcon>*/}
        {/*  <ListItemText primary="Drafts" />*/}
        {/*</ListItem>*/}

      {/*</List>*/}

      <List component="nav" aria-label="secondary mailbox folders">
      <Divider/>

        <ListItem button>
          <ListItemText primary="Content 0"/>
        </ListItem>
        <Divider/>

        <ListItemLink href="#simple-list">
          <ListItemText primary="Content 1"/>
        </ListItemLink>
        <Divider/>

        <ListItemLink href="#simple-list">
          <ListItemText primary="Content 2"/>
        </ListItemLink>
        <Divider/>

        <ListItemLink href="#simple-list">
          <ListItemText primary="Content 3"/>
        </ListItemLink>
        <Divider/>



      </List>
    </div>
  );
}
