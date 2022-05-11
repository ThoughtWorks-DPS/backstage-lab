import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  actionStyles: {
    display: "flex",
    padding: "8px",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonStyles: {
    color: "#fff",
    backgroundColor: "#2E77D0",
  }
}))

export const Actions = (props:{action:string; href:string}) => {

  const classes = useStyles();

  return (
    <div className={classes.actionStyles}>
      <Link to={props.href}>
        <Button className={classes.buttonStyles} variant="contained" style={{textTransform: 'none', alignContent: 'right'}} color="primary">
          {props.action}
        </Button>
      </Link>
    </div>
  );
};
