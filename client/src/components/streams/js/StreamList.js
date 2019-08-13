import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/StreamList.css';
import { fetchStreams } from '../../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if(stream.userId === this.props.currentUserId) {
      return (
        <div className="buttPose">
          <Link to={`/streams/edit/${stream.id}`} className="butt" style={{backgroundColor:"#3498db"}}>
            Edit
          </Link>
          <Link 
            to={`/streams/delete/${stream.id}`}
            className="butt" 
            style={{backgroundColor:"#f4511e"}}
          >
              Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
        return(
            <div className="item" key={stream.id}>
              <i className="fa fa-camera" style={{fontSize:"24px"}}/>
              <div className="content">
                <Link to={`/streams/${stream.id}`} className="header">
                {stream.title}
                </Link>
                <div className="description">{stream.description}</div>
              </div>
              {this.renderAdmin(stream)}
            </div>
        )
    })
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div className="buttPose">
          <Link to="/streams/new" className="butt" style={{backgroundColor:"#46c43f"}}>
            Create Stream
          </Link>
        </div>
      )
    }
  }

  render() {
    return (
        <div>
          <h2 style={{textAlign:"center"}}>Streams</h2><br />
          <div className="ui_list">{this.renderList()}</div>
          {this.renderCreate()}
        </div>
    )
  }
}

const mapStateToProps = (state) => {  
  return { 
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn:state.auth.isSignedIn
   };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);