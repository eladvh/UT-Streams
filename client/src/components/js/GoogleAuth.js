import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions';

class GoogleAuth extends React.Component {

  componentDidMount() {
   window.gapi.load('client:auth2', () => {
     window.gapi.client.init({
       clientId: '407039608600-8ejjl6e3uvkrngf5rekv5g5g8bqvlrq4.apps.googleusercontent.com',
       scope: 'email'
     }).then(() =>{
       this.auth = window.gapi.auth2.getAuthInstance();
       this.onAuthChange(this.auth.isSignedIn.get());
       this.auth.isSignedIn.listen(this.onAuthChange);
     });
   });
 }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    }else if (this.props.isSignedIn) {
      return (
        <div onClick={this.onSignOutClick}>
          <img
           src="http://www.stickpng.com/assets/images/5a951939c4ffc33e8c148af2.png"
           alt="g"
           style={{width:"20px",paddingRight:"5px",}}
           />
           Sign Out
        </div>
      );
    }else {
      return (
        <div onClick={this.onSignInClick}>
          <img
           src="http://www.stickpng.com/assets/images/5a951939c4ffc33e8c148af2.png"
           alt="g" 
           style={{width:"20px",paddingRight:"5px",}} 
           />
           Sign In
        </div>
      );
    }
  }

  render () {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);