import React from "react";
import PostList from "./PostList";
import PostDetails from "./PostDetails";
import NewPost from "./NewPost";
import EditPost from "./EditPost";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { formatDistanceToNow } from 'date-fns';

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPost: null,
      editing: false,
<<<<<<< HEAD
      count: 0
=======
>>>>>>> fee05e1d0a278d776b979e13c025fa8c9cf681f5
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedPost != null){
      this.setState({
        selectedPost: null,
        editing: false,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
      
    }
  };

  handleAddingNewPostToList = (newPost) => {
<<<<<<< HEAD
    const newMainPostList = this.state.mainPostList.concat(newPost);
    this.setState({
      mainPostList: newMainPostList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.state.mainPostList.filter(post => post.id === id)[0];
=======
    const { dispatch } = this.props;
    const action = a.addPost(newPost);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.props.mainPostList[id];
>>>>>>> fee05e1d0a278d776b979e13c025fa8c9cf681f5
    this.setState({selectedPost: selectedPost});
  }

  handleDeletingPost = (id) => {
<<<<<<< HEAD
    const newMainPostList = this.state.mainPostList.filter(post => post.id !== id);
    this.setState({
      mainPostList: newMainPostList,
=======
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
    this.setState({editing: true});
  }

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const action = a.addPost(postToEdit);
    dispatch(action);  
    this.setState({
      editing: false,
>>>>>>> fee05e1d0a278d776b979e13c025fa8c9cf681f5
      selectedPost: null
    });
  }

<<<<<<< HEAD

  handleUpVotes = (id) => {
    const setCount = this.state.mainPostList.filter(post => post.id === id)[0];
    if (setCount.count === 1) {
      return setCount.count;
    } else {
      setCount.count +=1;
    }
    const editedMainPostList = this.state.mainPostList
        .filter((post) => post.id !== this.state.selectedPost.id)
        .concat(setCount);
      this.setState({
        mainPostList: editedMainPostList,
      });
    }
  
  handleDownVotes = (id) => {
    const setCount = this.state.mainPostList.filter(post => post.id === id)[0];
    if (setCount.count === -1) {
      return setCount.count;
    } else {
      setCount.count -=1;
    }
    const editedMainPostList = this.state.mainPostList
        .filter((post) => post.id !== this.state.selectedPost.id)
        .concat(setCount);
      this.setState({
        mainPostList: editedMainPostList,
      });
    }

=======
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
>>>>>>> fee05e1d0a278d776b979e13c025fa8c9cf681f5

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

<<<<<<< HEAD
    if (this.state.selectedPost !== null){
      currentlyVisibleState = <PostDetails post = {this.state.selectedPost}
      onClickingDelete = {this.handleDeletingPost}
      onClickingUpVote = {this.handleUpVotes}
      onClickingDownVote = {this.handleDownVotes}/>
      buttonText= "Return to Post List";
    }
    else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewPost onNewPostCreation={this.handleAddingNewPostToList} />
      buttonText = "Return to Post List";
    } else {
      currentlyVisibleState = currentlyVisibleState = <PostList postList= {this.state.mainPostList} onPostSelection={this.handleChangingSelectedPost}/>
=======
    if (this.state.editing){
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
>>>>>>> fee05e1d0a278d776b979e13c025fa8c9cf681f5
      buttonText = "Add New Post";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
<<<<<<< HEAD
=======
  
>>>>>>> fee05e1d0a278d776b979e13c025fa8c9cf681f5
  }
}

const mapStateToProps = state => {

  return {
    mainPostList: state.mainPostList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
PostControl.propTypes = {
  mainPostList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

PostControl = connect(mapStateToProps)(PostControl);


export default PostControl;