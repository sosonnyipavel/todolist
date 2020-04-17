import React from 'react';
import {connect} from 'react-redux';

class ListTasks extends React.Component {
    
    renderList() {
        return this.props.tasks.map((task,idTask) => {
            return (
                <div className="item" key={idTask}>
                    <div className="ui left floated compact segment">
                        <div className="ui fitted slider checkbox">
                            <input type="checkbox" name="task" />
                            <label></label>
                        </div>
                    </div>
                    <div className="content">{task}</div>
                    <div className="right floated content">
                        <button className="ui inverted red button">
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
    return { tasks: state.tasks };
}

export default connect(mapStateToProps) (ListTasks);