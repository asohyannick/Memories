import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux'; 
import { createPost } from '../../actions/posts';
import {
  TextField,
  Button,
  Typography,
  Paper,
} from '@material-ui/core';
import useStyles  from './styles';

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [ postData, SetPostData ] = useState({
    creator:'',
    title:'',
    message:'',
    tags:'',
    selectedFile:'',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  }
  const clear = () => {

  }
  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate 
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
        >
        <Typography variant='h6'>
          Creating Great Memories.
        </Typography>
        <TextField 
          name='creator' 
          variant='outlined' 
          label='creator' 
          fullWidth Value={postData.creator} 
          value={postData.creator}
          onChange={(e) => SetPostData(
            {...postData,creator: e.target.value }
          )}
        />
        <TextField 
          name='title' 
          variant='outlined' 
          label='title' 
          fullWidth Value={postData.creator}
          value={postData.creator}
          onChange={(e) => SetPostData(
            {...postData, title: e.target.value }
          )}
        />
        <TextField 
          name='message' 
          variant='outlined' 
          label='message' 
          fullWidth Value={postData.creator} 
          value={postData.creator}
          onChange={(e) => SetPostData(
            {...postData,message: e.target.value }
          )}
        />
        <TextField 
          name='tags' 
          variant='outlined' 
          label='tags' 
          fullWidth Value={postData.creator} 
          value={postData.creator}
          onChange={(e) => SetPostData(
            {...postData,tags: e.target.value }
          )}
        />
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={(base64) => SetPostData(
              {...postData, selectedFile: base64
            })}
            />
        </div>
        <Button className={classes.buttonSubmit}
         type='submit' 
         variant='container' 
         color='primary'
         size='large'
         fullWidth 
         >
         SUBMIT
        </Button>
        <Button
         type='submit' 
         variant='contain' 
         color='secondary'
         size='small'
         onClick={clear}
         fullWidth 
         >
         CLEAR
        </Button>
      </form>
    </Paper>
  )
}

export default Form;