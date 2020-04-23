import React from 'react';
import {connect} from 'react-redux';
import { deleteTask, doneTask } from '../actions';
import './ButtonDisplay.css';

class ListTasks extends React.Component {
    renderList() {
        return this.props.tasks.map((task) => {
            return (
                <div className="item" key={task}>
                    <div className="ui left floated compact segment">
                        <div className="ui fitted slider checkbox">
                            <input type="checkbox" checked={this.props.checked} name="doneTask" onChange={this.onChange} />
                            <label></label>
                        </div>
                    </div>
                    <div className="content">{task}</div>
                    <div className="right floated content">
                        <button className="ui inverted red button" style={{ display: this.props.checked === true ? 'block' : 'none' }} onClick={() => this.props.deleteTask(task)}>
                            Delete
                        </button>
                    </div>
                </div>
            );
        });
    }
    onChange = (event) => {
        const target = event.target;
        const checked = target.checked;
        console.log(checked);
        this.props.doneTask(checked);
    };

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
        tasks: state.tasks,
    };
}

export default connect(mapStateToProps, {deleteTask, doneTask}) (ListTasks);