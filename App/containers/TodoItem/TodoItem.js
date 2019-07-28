import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../../components/TodoItem/TodoItem';
import Images from '../../themes/Images';
import * as TodoActions from '../../actions/TodoActions';

class TodoItemContainer extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount = () => {
        this._choosePriorityBackground(this.props.item.priority);
        
        this._chooseDueTimeIndicator(this.props.item.dueTime);
    }

    _chooseDueTimeIndicator = (time) => {
        const dueTime = typeof(time) == 'string' ? new Date(time).getTime() : time.getTime();
        const now = Date.now();
        const diff = now - dueTime;
        const dayInMillis = 24*3600*1000;
        const dayDiff = diff / dayInMillis;
        let indicator = null;
        
        if(diff > 0){
            indicator = Images.overDeadline;
        }
        else if(-dayDiff >= 0 && -dayDiff <= 3){//3 days till due time
            indicator = Images.nearDeadline;
        }
        else {
            indicator = Images.soonDeadline;
        }

        return indicator;
    }

    _choosePriorityBackground = (priority) => {
        let color = null;
        switch(priority){
            case 'HIGH': {
                color = 'red';
                break;
            }
            case 'MEDIUM': {
                color = '#FFA000';
                break;
            }
            case 'LOW': {
                color = '#50C3B8';
                break;
            }
            default: {
                color = '#CCCFCE';
                break;
            }
        }
        return color;
    }

    _updateToDoItem = () => {
        this.props._openModalTodo();
        this.props.updateToDoName(this.props.item.name);
        this.props.updateToDoPriority(this.props.item.priority);
        this.props.updateToDoDueTime(this.props.item.dueTime);
        this.props.updateTodoHour(this.props.item.dueTime);
        this.props.updateTodoIndex(this.props.index);
    }

    render(){
        return(
            <TodoItem
                index = {this.props.index}
                name = {this.props.item.name}
                priority = {this.props.item.priority}
                dueTime = {this.props.item.dueTime}
                _chooseDueTimeIndicator = {this._chooseDueTimeIndicator}
                _choosePriorityBackground = {this._choosePriorityBackground}
                _updateToDoItem = {this._updateToDoItem}
                _confirmDelete = {this.props._confirmDelete}
            />
        );
    }
}

const mapStateToProps = ( state ) => ({

});

const mapDispatchToProps = ( dispatch, props ) => ({
    updateTodoIndex: (index) => {
        return dispatch(TodoActions.updateTodoIndex(index));
    },
    updateToDoName: (name) => {
        return dispatch(TodoActions.updateTodoName(name));
    },
    updateToDoPriority: (priority) => {
        return dispatch(TodoActions.updateTodoPriority(priority));
    },
    updateToDoDueTime: (dueTime) => {
        return dispatch(TodoActions.updateTodoDueTime(dueTime));
    },
    updateTodoHour: (hour) => {
        return dispatch(TodoActions.updateTodoHour(hour));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemContainer);
