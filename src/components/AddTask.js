import React from 'react';
import {connect} from 'react-redux';
import { addTask } from '../actions';
import ListForm from './ListForm';

class AddTask extends React.Component{
    onSubmit = (formValues) => {
        this.props.addTask(formValues);

    };
    render() {
        return (
            <ListForm onSubmit={this.onSubmit}/>
        );
    }
    
}


export default connect(null, {addTask}) (AddTask);