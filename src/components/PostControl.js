import React from "react";
import PostList from "./PostList";
import PostDetails from "./PostDetails";
import NewPost from "./NewPost";
import EditPost from "./EditPost";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { formatDistanceToNow } from 'date-fns';
import { Button } from '@mui/material';

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      // editing: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedPost != null){
      const { dispatch } = this.props;
      const action = a.toggleEditForm();
        dispatch(action);
    } else {
    const { dispatch } = this.props;
    const action2 = a.toggleForm();
    dispatch(action2);
      this.setState({
        selectedPost: null,
        // editing: false,
      });  
    }
  };

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const action = a.addPost(newPost);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.mainPostList[id];
    this.setState({selectedPost: selectedPost});
  }

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = a.deletePost(id);
    dispatch(action);
    this.setState({selectedPost: null});
  }

  handleUpVotes = (id) => {
    const setCount = this.props.mainPostList[id];
    if (setCount.upVotes === 1) {
      return setCount.upVotes;
    } else {
      setCount.upVotes +=1;
    }
    this.setState({setCount: setCount})
   
  }
    
  handleDownVotes = (id) => {
    const setCount = this.props.mainPostList[id];
    console.log(setCount);
    if (setCount.downVotes === 1) {
      return setCount.downVotes;
    } else {
      setCount.downVotes +=1;
    }
    this.setState({setCount: setCount})    
  }

  handleEditClick = () => {
   const { dispatch } = this.props;
   const action = a.toggleEditForm();
   dispatch(action);
  }

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const action = a.addPost(postToEdit);
    dispatch(action);
    const action2 = a.toggleEditForm();
    dispatch(action2);  
    this.setState({
      // editing: false,
      selectedPost: null
    });
  }



  componentDidMount() {
    this.waitTimeUpdateTime = setInterval(() => this.updatePostElapsedWaitTime(), 60000);
  }
  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updatePostElapsedWaitTime = () => {
    const { dispatch } = this.props;
    Object.values(this.props.mainPostList).forEach(post => {
      const newFormattedWaitTime = formatDistanceToNow(post.timeOpen, {
        addSuffix:true
      });
      const action = a.updateTime(post.id, newFormattedWaitTime);
      dispatch(action);
    })
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;


    if (this.props.editing){
      currentlyVisibleState = <EditPost post = {this.state.selectedPost} onEditPost = {this.handleEditingPostInList}/>
      buttonText = "Return to Post List";
    }
    else if (this.state.selectedPost !== null){
      currentlyVisibleState = <PostDetails post = {this.state.selectedPost} 
      onClickingDelete = {this.handleDeletingPost}
      onClickingUpVote = {this.handleUpVotes}
      onClickingDownVote = {this.handleDownVotes}
      onClickingEdit = {this.handleEditClick}/>
      buttonText= "Return to Post List";
    }
    else if (this.props.formVisibleOnPage){
      currentlyVisibleState = <NewPost onNewPostCreation={this.handleAddingNewPostToList} />
      buttonText = "Return to Post List";
    } 
     else {
      currentlyVisibleState = <PostList postList= {this.props.mainPostList} onPostSelection={this.handleChangingSelectedPost}/>

      buttonText = "Add New Post";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <div className="d-flex justify-content-center top">
        <Button variant="outlined" onClick={this.handleClick}>{buttonText}</Button>
        </div>
      </React.Fragment>
    )

  

  }
}

const mapStateToProps = state => {

  return {
    mainPostList: state.mainPostList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing,
  }
}
PostControl.propTypes = {
  mainPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editing: PropTypes.bool
};

PostControl = connect(mapStateToProps)(PostControl);


export default PostControl;