import React, {Component} from 'react';

class AddComment extends Component {
	constructor(props) {
        super(props);
        this.state = {commentText: ''};
    }

 handleSubmit(e) {
    e.preventDefault();
    const comment = {commentText : this.state.commentText};
    this.props.addComment(comment); //jakie propsy, jaki addComment, undefined, nic tu nie przekazuje przez propsy
    this.setState({ commentText: '' });
  }

 changeHandler(e) { 
    this.setState({ commentText : e.target.value });
  }

  render() {
    return(
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          onChange={e => this.changeHandler(e)} 
          value={this.state.commentText}
          placeholder='Your comment'
        />
      </form>
    );
  }
}

export default AddComment;
