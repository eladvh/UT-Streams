import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../css/StreamCreate.css';

class StreamForm extends React.Component {
    renderError({ error, touched }) {
      if ( touched && error) {
        return (
          <div>
            <div>
              <p className="err">{error}</p>
            </div>
          </div>
        );
      }
    }

    renderInput = ({ input, label, meta }) => {
      const className = `field ${meta.error && meta.touched ? 'error': ''}`;
      return (
        <div className={className}>
        <label><b>{label}</b></label><br />
        <input className="inp" {...input} autoComplete="off"/>
        {this.renderError(meta)}
        </div>
      );
    }

onSubmit = (formValues) => {
  this.props.onSubmit(formValues);
}

    render() {
        return (
          <form className="createForm" onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field className="title" name="title" component={this.renderInput} label="Enter Title" />
            <Field className="description" name="description" component={this.renderInput} label="Enter description" /><br />
            <button className="button">Submit</button>
          </form>
        )
    }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);