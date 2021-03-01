  import React from 'react';
  import { makeStyles } from '@material-ui/core/styles';
  import Card from '@material-ui/core/Card';
  import CardActions from '@material-ui/core/CardActions';
  import CardContent from '@material-ui/core/CardContent';
  import Button from '@material-ui/core/Button';
  import Typography from '@material-ui/core/Typography';

  
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxHeight : 180,
      backgroundColor: "#90caf9",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
  export default function Game({homeTeam,awayTeam, handleScore,uniqueId}) {
    const classes = useStyles();
      
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
           {homeTeam}
          </Typography>
          <Typography variant="h5" component="h2">
           VS
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          {awayTeam}
          </Typography>
        
        </CardContent>
        <CardActions>
          <Button onClick={()=>handleScore(uniqueId)}size="small" color="primary" variant="contained">Check Score</Button>
        </CardActions>
      </Card>
    );
  }
  






  
