import React, {Component} from 'react';

class AddComment extends Component {
	constructor(props) {
        super(props);
        this.state = {commentText: ''};
    }

 handleSubmit(e) {
    e.preventDefault();
    //const comment = this.state.commentText; // mniej elegancko
    this.props.addComment(this.state.commentText); 
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
