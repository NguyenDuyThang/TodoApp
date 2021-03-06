import React from 'react';
import { connect } from 'react-redux';
import * as TodoActions from '../../actions/TodoActions';
import { View, FlatList, Text, Alert, ActivityIndicator } from 'react-native';
import TodoItem from '../../containers/TodoItem/TodoItem';
import ButtonCreate from '../../components/ButtonCreate/ButtonCreate';
import ModalTodo from '../../components/ModalTodo/ModalTodo';
import styles from './TodoListStyle';
import firebase from 'react-native-firebase';
import NetInfo from '@react-native-community/netinfo';
import Loading from '../../components/Loading/Loading';

class TodoListContainer extends React.Component {
    constructor(props){
        super(props);
        this.collection = firebase.firestore().collection('todo-list');
        this.state = {
            openModal: false,
            refreshing: false
        };
    }

    componentDidMount = () => {
        this.unsubscribeNetInfo = NetInfo.addEventListener(this._handleNetInfo);
        this.props.updateTodoList([]);// for sorting todo list
    }

    componentWillUnmount = () => {
        this.unsubscribeNetInfo();
    }

    static navigationOptions = () => ({
        title: 'TO DO APP',
        headerStyle: {
            backgroundColor: '#2C7BBD',
            shadowOpacity: 0,
            shadowOffset: {
                height: 0,
                width: 0
            },
            shadowRadius: 0,
            elevation: 0
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
            fontSize: 18,
            lineHeight: 20,
            fontWeight: 'bold'
        },
        headerLeft: (
            <View
                style={styles.headerLeft}
            />
        ),
        headerRight: (
            <View
                style={styles.headerRight}
            />
        )
    });

    _handleNetInfo = async (state) => {
        if(state.isConnected){
            this.setState({refreshing: true});
            this.props.updateNetInfo(true);
            await this._syncOfflineListWithFirebase();
            this._onRefresh();
            this.props.resetOfflineList();
            this.props.resetDeleteOfflineList();
        }
        else{
            this.props.updateNetInfo(false);
        }
    }

    _checkItemExisted = (item) => {
        const itemExisted = this.props.todoList.find((value) => {
            return value.id == item.id;
        });

        if(itemExisted)
            return true;
        return false;
    }

    _getDocId = async (index) => {
        const itemId = typeof(index) == 'number' ? this.props.todoList[index].id : index;        
        const query = await this.collection.where('id', '==', itemId);
        const querySnap = await query.get();

        if(querySnap.docs.length > 0){
            if(querySnap.docs[0].exists){
                return querySnap.docs[0].id;
            }
        }
        return null;
    }

    _syncOfflineListWithFirebase = async () => {
        if(this.props.netInfo){
            this.props.offlineList.forEach(async(value) => {
                const firebaseItem = {
                    id: value.id,
                    name: value.name,
                    dueTime: new Date(value.dueTime).getTime(),
                    priority: value.priority
                }
                const docId = await this._getDocId(value.id);

                if(docId){//update todo item
                    this.collection.doc(docId).set(firebaseItem);
                }
                else{//add new todo item
                    this.collection.add(firebaseItem);
                }
            });
            this.props.deleteOfflineList.forEach(async (value) => {                
                const docId = await this._getDocId(value);
                this.collection.doc(docId).delete();
            });
        }
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        if(this.props.netInfo){
            this.props.resetTodoList();
            this._refreshTodoList();
        }
        else{
            this.setState({refreshing: false});
        }
    }

    _refreshTodoList = () => {
        if(this.unsubscribeSnap){
            this.unsubscribeSnap();
        }
        this.unsubscribeSnap = this.collection.onSnapshot(this._queryFromFirebase);
    }

    _queryFromFirebase = (querySnap) => {
        querySnap.forEach((doc) => {
            const { id, dueTime, name, priority } = doc.data();
            
            const firebaseItem = {
                id: id,
                name: name,
                dueTime: new Date(dueTime),
                priority: priority
            };

            if(!this._checkItemExisted(firebaseItem)){
                this.props.updateTodoList(firebaseItem);
            }
        });
        this.setState({refreshing: false});
    }

    _createNewToDoItem = () => {
        let time = null, year = null, month = null, date = null, hour = null, minute = null;
        if(this.props.todoDueTime){
            time = typeof(this.props.todoDueTime) == 'string' ? new Date(this.props.todoDueTime) : this.props.todoDueTime;
        }
        else{
            time = new Date();
        }
        year = time.getFullYear();
        month = time.getMonth();
        date = time.getDate();
        
        if(this.props.todoDueHour){
            time = typeof(this.props.todoDueHour) == 'string' ? new Date(this.props.todoDueHour) : this.props.todoDueHour;
            hour = time.getHours();
            minute = time.getMinutes();
        }

        const newItem = {
            id: Date.now().toString(),
            name: this.props.todoName,
            priority: this.props.todoPriority,
            dueTime: new Date(year, month, date, hour, minute)
        };

        return newItem;
    }

    _updateTodoList = async () => {
        const newItem = this._createNewToDoItem();
        const updateIndex = this.props.todoIndex;

        if(this.props.netInfo){//Add to firebase
            const firebaseItem = {
                id: newItem.id,
                name: newItem.name,
                dueTime: newItem.dueTime.getTime(),
                priority: newItem.priority
            };
            if(updateIndex != -1){//update todo item
                await this._updateTodoFirebaseItem(firebaseItem);                
            }
            else{
                this.collection.add(firebaseItem);
            }
        }
        else{
            if(updateIndex != -1){//update todo item
                const oldId = this.props.todoList[updateIndex].id;
                this.props.updateOfflineList({...newItem, id: oldId});
            }
            else{
                this.props.updateOfflineList(newItem);
            }
            this.props.updateTodoList(newItem);
        }

        this._resetTodoItem();
        this._openModalTodo();
    }

    _updateTodoFirebaseItem = async (newItem) => {
        const itemId = this.props.todoList[this.props.todoIndex].id;
        const docId = await this._getDocId(this.props.todoIndex);
        
        if(docId){
            this.collection.doc(docId).set({...newItem, id: itemId});
            await this.props.updateTodoList({...newItem, id: itemId, dueTime: new Date(newItem.dueTime)});
        }
    }

    _deleteTodoFirebaseItem = async (index) => {
        const docId = await this._getDocId(index);
        if(docId){
            this.collection.doc(docId).delete();
        }
    }

    _saveDeleteItem = async (index) => {        
        const deleteId = this.props.todoList[index].id;
        
        this.props.updateDeleteOfflineList(deleteId);
    }

    _confirmDelete = (index) => {
        Alert.alert(
            'CONFIRM', 
            'Are your sure to delete this to-do task ?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: async () => {
                        if(this.props.netInfo){
                            this._deleteTodoFirebaseItem(index);
                        }
                        else{
                            await this._saveDeleteItem(index);
                        }
                        this.props.deleteTodoItem(index);
                    }
                }
            ]
        );
    }

    _pressCreateNewTodoTask = () => {
        this._openModalTodo();
    }

    _resetTodoItem = () => {
        this.props.updateToDoName(null);
        this.props.updateToDoPriority('HIGH');
        this.props.updateToDoDueTime(null);
        this.props.updateTodoHour(null);
        this.props.updateTodoIndex(-1);
    }

    _onChangeTextName = (value) => {
        this.props.updateToDoName(value);
    }

    _onChangePriority = (value) => {
        this.props.updateToDoPriority(value);
    }

    _onChangeDueTime = (dateStr, date) => {
        this.props.updateToDoDueTime(date);
    }

    _onChangeDueHour = (dateStr, date) => {
        this.props.updateTodoHour(date);
    }

    _openModalTodo = () => {
        this.setState({openModal: !this.state.openModal});
    }

    _renderItem = ({item, index}) => {
        return(
            <TodoItem
                _openModalTodo = {this._openModalTodo}
                _confirmDelete = {this._confirmDelete}
                item = {item}
                index = {index}
            />
        );
    }

    _footer = () => {
        return(
            <View
                style = {styles.footer}
            />
        );
    }

    render(){
        if(!this.state.refreshing){
            return(
                <View
                    style = {styles.container}
                >
                    {this.props.todoList.length == 0 && <Text
                        style = {styles.emptyText}
                    >
                        You don't have any task,
                    </Text>}
                    {this.props.todoList.length == 0 && <Text
                        style = {styles.emptyText}
                    >
                        Let's create one with us !
                    </Text>}
                    {this.props.todoList.length > 0 && <FlatList
                        data = {this.props.todoList}
                        renderItem = {this._renderItem}
                        showsVerticalScrollIndicator = {false}
                        keyExtractor = {(item, index) => index.toString()}
                        ListFooterComponent = {this._footer}
                        refreshing = {this.state.refreshing}
                        onRefresh = {this._onRefresh}
                    />}
                    <View
                        style = {styles.bottomDeco}
                    />
                    <ButtonCreate
                        executeTask = {this._pressCreateNewTodoTask}
                    />
                    <ModalTodo
                        openModal = {this.state.openModal}
                        buttonTitle = {this.props.todoIndex != -1 ? 'Update' : 'Create'}
                        todoName = {this.props.todoName}
                        todoPriority = {this.props.todoPriority}
                        todoDueTime = {this.props.todoDueTime}
                        todoDueHour = {this.props.todoDueHour}
                        _openModalTodo = {this._openModalTodo}
                        _updateTodoList = {this._updateTodoList}
                        _onChangeTextName = {this._onChangeTextName}
                        _onChangePriority = {this._onChangePriority}
                        _onChangeDueTime = {this._onChangeDueTime}
                        _onChangeDueHour = {this._onChangeDueHour}
                        _resetTodoItem = {this._resetTodoItem}
                    />
                </View>
            );
        }
        else{
            return(
                <View style = {styles.refreshing}>
                    <Loading/>
                    <View
                        style = {styles.bottomDeco}
                    />
                    <ButtonCreate
                        executeTask = {this._pressCreateNewTodoTask}
                    />
                </View>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    netInfo: state.TodoReducer.netInfo,
    offlineList: state.TodoReducer.offlineList,
    deleteOfflineList: state.TodoReducer.deleteOfflineList,
    todoIndex: state.TodoReducer.todoIndex,
    todoList: state.TodoReducer.todoList,
    todoName: state.TodoReducer.todoName,
    todoPriority: state.TodoReducer.todoPriority,
    todoDueTime: state.TodoReducer.todoDueTime,
    todoDueHour: state.TodoReducer.todoDueHour
});

const mapDispatchToProps = (dispatch, props) => ({
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
    },
    updateOfflineList: (item) => {
        return dispatch(TodoActions.updateOfflineList(item));
    },
    updateTodoList: (item) => {
        return dispatch(TodoActions.updateTodoList(item));
    },
    updateDeleteOfflineList: (item) => {
        return dispatch(TodoActions.updateDeleteOfflineList(item));
    },
    updateNetInfo: (netInfo) => {
        return dispatch(TodoActions.updateNetInfo(netInfo));
    },
    deleteTodoItem: (index) => {
        return dispatch(TodoActions.deleteTodoItem(index));
    },
    resetOfflineList: () => {
        return dispatch(TodoActions.resetOfflineList());
    },
    resetTodoList: () => {
        return dispatch(TodoActions.resetTodoList());
    },
    resetDeleteOfflineList: () => {
        return dispatch(TodoActions.resetDeleteOfflineList());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
