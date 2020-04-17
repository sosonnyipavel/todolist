import React from 'react';
import AddTask from './AddTask';
import ListTasks from './ListTasks';

const App = () => {

    return (
        <div className="ui container">
            <div className="ui inverted segment">
                <AddTask />
            </div>
            <div className="ui inverted segment">
                <ListTasks />
            </div>
        </div> 
    );

}
export default App;