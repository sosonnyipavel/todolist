import React from 'react';
import {connect} from 'react-redux';
import { deleteTask } from '../actions';
import './ButtonDisplay.css';

class ListTasks extends React.Component {
    renderList() {
        return this.props.tasks.map((task) => {
            return (
                <div className="item" key={task}>
                    <div className="ui left floated compact segment">
                        <div className="ui fitted slider checkbox">
                            <input type="checkbox" name="doneTask" checked={this.props.checked} onChange={this.classChange} />
                            <label></label>
                        </div>
                    </div>
                    <div className="content">{task}</div>
                    <div className="right floated content">
                        <button className={this.className} onClick={() => this.props.deleteTask(task)}>
                            Delete
                        </button>
                    </div>
                </div>
            );
        });
    }

    classChange = (event) => {
        let className = "notDone";
        const checked = event.target.checked;
        console.log(checked);
            if (checked === true){
                className="ui inverted red button";
                console.log(className);
            }
            return className;
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

export default connect(mapStateToProps, {deleteTask}) (ListTasks);