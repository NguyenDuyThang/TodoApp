import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../../components/TodoItem/TodoItem';

class TodoItemContainer extends React.Component {

    render(){
        return(
            <TodoItem
                name = {this.props.item.name}
                priority = {this.props.item.priority}
                dueTime = {this.props.item.dueTime}
            />
        );
    }
}

const mapStateToProps = ( state ) => ({

});

const mapDispatchToProps = ( dispatch, props ) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemContainer);
