import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 190,
    maxWidth: 345,
    paddingLeft: 10,
    paddingRight:15,
    paddingTop:15,
    paddingBottom: 10,
  },
  media: {
    height: 240,
  },
};

function MediaCard(props) {
  const {classes} = props;

  return (
    <Card className={classes.card}
    onClick={() => props.setClicked(props.id)}
    >
        <CardMedia
          className={classes.media}
          image={props.image} alt={props.name}
        />
    </Card>
  );
}

export default withStyles(styles)(MediaCard)