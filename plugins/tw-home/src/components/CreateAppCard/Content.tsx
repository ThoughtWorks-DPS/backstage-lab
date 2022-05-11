import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

    spacing: {
      margin: 0,
    },
    
    styles: {
      fontSize: "1.5rem",
      fontFamily: "Helvetica Neue, Helvetica, Roboto, Arial, sans-serif",
      fontWeight: 700,
      display: 'block',
      lineHeight: '1.3', 
   },

   padding: {
     padding: "22px 22px 22px 20px",
   },

   content: {
     flexGrow: 1,
     flexShrink: 1,
     flexBasis: "auto",
   },

   hrStyles: {
     border: "none",
     height: "1px",
     margin: 0,
     flexShrink: 0,
     backgroundColor: "rgba(0, 0, 0, 0.12)",
   },

   descriptionStyles: {
     padding: "16px",
     flexGrow: 1,
   }
   
}));

export const Content = (props:{title:string; description:string}) => {

  const classes = useStyles();

  return (
    <div>
      <div className={`${classes.padding} ${classes.content}`}>
        <span className={`${classes.spacing} ${classes.styles}` }>{props.title}</span>
      </div>
      <hr className={classes.hrStyles}/>
      <div className={classes.descriptionStyles}>
        <p>{props.description}</p>
      </div>
    </div>
  );
};