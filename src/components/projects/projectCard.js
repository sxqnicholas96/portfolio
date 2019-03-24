import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  }
};

const ProjectCard = props => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="200"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography component="p">{props.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {!!props.githubLink && (
          <a
            style={{ textDecoration: "None" }}
            href={props.githubLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button size="small" color="primary">
              GitHub
            </Button>
          </a>
        )}

        {!!props.demoLink && (
          <a
            style={{ textDecoration: "None" }}
            href={props.demoLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button size="small" color="primary">
              Demo
            </Button>
          </a>
        )}
      </CardActions>
    </Card>
  );
};

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectCard);
