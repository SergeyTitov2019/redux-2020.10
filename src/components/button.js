import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100px'
    },
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();
  const {variant, text, color, onClick} = props

  return (
    <div className={classes.root}>
      <Button
        variant={ variant }
        color={ color }
        onClick={onClick}
      >
        {text}
      </Button>


    </div>
  );
}
