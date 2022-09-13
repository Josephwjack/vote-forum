import React from "react";
import PostList from "./PostList";
import PostDetails from "./PostDetails";
import NewPost from "./NewPost";

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPostList: [],
      selectedPost: null,
      editing: false,
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedPost != null){
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false,
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  };

  handleAddingNewPostToList = (newPost) => {
    const newMainPostList = this.state.mainPostList.concat(newPost);
    this.setState({
      mainPostList: newMainPostList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedPost = (id) => {
    const selectedPost = this.state.mainPostList.filter(post => post.id === id)[0];
    this.setState({selectedPost: selectedPost});
  }

  handleDeletingPost = (id) => {
    const newMainPostList = this.state.mainPostList.filter(post => post.id !== id);
    this.setState({
      mainPostList: newMainPostList,
      selectedPost: null
    });
  }


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


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

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
      buttonText = "Add New Post";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}


export default PostControl;