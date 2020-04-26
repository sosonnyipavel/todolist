import React from 'react';
import {connect} from 'react-redux';
import { deleteTask, doneTask } from '../actions';

class ListTasks extends React.Component {
    renderList() {
        return this.props.tasks.map((task) => {
            return (
                <div className="item" key={task.id}>
                    <div className="ui left floated compact segment">
                        <div className="ui fitted slider checkbox">
                            <input type="checkbox" checked={task.checked} name="doneTask" onChange={() => this.props.doneTask(task.id)} />
                            <label></label>
                        </div>
                    </div>
                    <div className="content"> {task.text} {console.log(task)} </div>
                    <div className="right floated content">
                        <button className="ui inverted red button" style = {{ display: task.checked === true ? 'block' : 'none' }} onClick={() => this.props.deleteTask(task.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui inverted relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { 
        tasks: state.tasks
    };
}

export default connect(mapStateToProps, {deleteTask, doneTask}) (ListTasks);