import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../../components/TodoItem/TodoItem';
import Images from '../../themes/Images';

class TodoItemContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: null,
            statusIndicator: null
        };
    }

    componentDidMount = () => {
        this._choosePriorityBackground(this.props.item.priority);
        this._chooseDueTimeIndicator(this.props.item.dueTime);
    }

    _chooseDueTimeIndicator = (time) => {
        const dueTime = new Date(time).getTime();
        const now = Date.now();
        const diff = now - dueTime;
        const dayInMillis = 24*3600*1000;
        const dayDiff = diff / dayInMillis;
        let indicator = null;

        console.log(diff, ' - ', dayInMillis, ' ---- ',diff / dayInMillis);
        
        if(diff > 0){
            indicator = Images.overDeadline;
        }
        else if(-dayDiff >= 0 && -dayDiff <= 3){//3 days till due time
            indicator = Images.nearDeadline;
        }
        else {
            indicator = Images.soonDeadline;
        }

        this.setState({statusIndicator: indicator});
    }

    _choosePriorityBackground = (priority) => {
        switch(priority){
            case 'High': {
                this.setState({backgroundColor: 'red'});
                break;
            }
            case 'Medium': {
                this.setState({backgroundColor: '#FFA000'});
                break;
            }
            case 'Low': {
                this.setState({backgroundColor: '#50C3B8'});
                break;
            }
            default: {
                this.setState({backgroundColor: '#CCCFCE'});
                break;
            }
        }
    }

    render(){
        return(
            <TodoItem
                name = {this.props.item.name}
                priority = {this.props.item.priority}
                dueTime = {this.props.item.dueTime}
                backgroundColor = {this.state.backgroundColor}
                statusIndicator = {this.state.statusIndicator}
            />
        );
    }
}

const mapStateToProps = ( state ) => ({

});

const mapDispatchToProps = ( dispatch, props ) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemContainer);
