import React from 'react';
import useStyles from './styles';
import {
  Card,
  CardActions,
  CardContainer,
  CardMedia,
  Button,
  Typography,
  CardContent
} from '@material-ui/core';
import moment from 'moment';
import thumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon  from '@material-ui/icons/MoreHoriz'
const Post = ({ post }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media}
        image={post.selectedFile}
        title={post.title}/>
        <div className={classes.overlay}>
            <Typography variant='6'>
            {post.creator}
            </Typography>
            <Typography variant='body2'>
            {moment(post.createdAt).fromNow()}
            </Typography>
        </div>
        <div className={classes.overlay2}>
            <Button 
              style={{ color: 'white'}}
              size='small'
              onClick={() => {}}  
              >
                <MoreHorizIcon fontSize='default'/>
            </Button>
        </div>
        <div className={classes.details}>
          <Typography 
            variant='body2'
            color='textSecondary'
            >
            {post.tags.map((tag) =>`#${tag} `)}
          </Typography>
        </div>
        <div className={classes.title}>
          <CardContent>
            <Typography 
              variant='h5'
              gutterBottom
              >
              {post.message}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button 
            size='small'
            color='primary'
            onClick={() => {} }
            >
              <thumbUpAltIcon fontSize='small'/>
              Like
              {post.likeCount}
            </Button>
            <Button 
              size='small'
              color='primary'
              onClick={() => {} }
            >
              <DeleteIcon fontSize='small'/>
              Delete
              {post.likeCount}
            </Button>
          </CardActions>
        </div>
    </Card>
  );
}

export default Post;
