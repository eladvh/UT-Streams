import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../../actions';
import StreamForm from './StreamForm';
import '../css/StreamCreate.css';

class StreamCreate extends React.Component {
onSubmit = (formValues) => {
  this.props.createStream(formValues);
}

  render() {
      return (
        <div>
          <h3 style={{margin:'10px'}}>Create a stream</h3>
          <StreamForm onSubmit={this.onSubmit} />
        </div>
      );
  }
}


export default connect(null, { createStream })(StreamCreate);