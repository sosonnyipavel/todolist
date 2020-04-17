import React from 'react';
import { Field, reduxForm } from 'redux-form';

class ListForm extends React.Component{
    
    renderInput = ({input}) => {
        return (
            <div className="field">
                <input {...input} autoComplete="off" placeholder="Write the new task..." />
            </div>
        );
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui inverted form">
                <Field name="input" component={this.renderInput} />
                <button className="ui inverted primary button">ADD</button>
            </form>
        );
    }
}
export default reduxForm({
    form: 'listForm',
}) (ListForm);