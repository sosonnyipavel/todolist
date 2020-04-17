import React from 'react';
import {connect} from 'react-redux';
import { addTask } from '../actions';

class ListTasks extends React.Component {
    
    renderList() {
            return (
                <div className="item">
                    <div className="ui left floated compact segment">
                        <div className="ui fitted slider checkbox">
                            <input type="checkbox" name="task" />
                            <label></label>
                        </div>
                    </div>
                    <div className="right floated content">
                        <button className="ui inverted red button">
                            Delete
                        </button>
                    </div>
                    <div className="content">{this.props.tasks.input}</div>
                </div>
            );
    }

    render() {
    return <div className="ui inverted relaxed divided list">{this.renderList()}</div>
    }
}
const mapStateToProps = (state) => {
    return { tasks: state.addTask };
}

export default connect(mapStateToProps, {addTask}) (ListTasks);