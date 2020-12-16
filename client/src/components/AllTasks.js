import React from 'react';
import Task from './Task';
import {AddTask} from './AddTask';
import {CgPlayListAdd} from "react-icons/cg";
import axios from 'axios';

export default class AllTasks extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
            allTasks: [],
            showAddTask: false
        }; 
    }
    
    showAddTask = () => {
        this.setState((prevstate) => ({showAddTask: !prevstate.showAddTask}))
    }
    
    handleDoneTask = (taskToChange) => {
        const newState = {...this.state};
        newState.allTasks.map(task => {
            if(taskToChange === task._id)
                task.isDone = !task.isDone;
            return task;
        })

        this.setState({state: newState})
    }

    handleDeleteTask = (idTaskToDelete) => {
        console.log(idTaskToDelete);
       axios.put(`http://localhost:4000/task/${idTaskToDelete}`)
       .then(res => {
           var newState = this.state.allTasks;
           newState.forEach(task => {
               if(task._id === res.data._id) task.isValid = false;
           });
           this.setState({allTasks: newState});    
       })
    }

    handleDeleteAll = () => {
        this.setState({allTasks: []});
    }
    
    handeleAddTask = (text) => {
        if(text === "")
            return;
        const newTask = {
            taskText: text,
            isDone: false,
            isValid: true
        };
        axios.post(`http://localhost:4000/task`, {newTask})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        this.setState({allTasks: [...this.state.allTasks, newTask]});

    }
    componentDidMount() {
        try{ 
            axios.get(`http://localhost:4000/task`)
            .then(res => {
                console.log("this is from component did mount");
                console.log("res data",res.data);
                var allTasks = [];

                console.log("all task ",allTasks)
                this.setState({allTasks: res.data});
            })
        } catch (e) {
                console.log("errororor");
        }
   
    }
    //     handeleAddTask = (text) => {
    //     if(text === "")
    //         return;
    //     const newTask = {
    //         id: this.state.allTasks.length,
    //         taskText: text,
    //         isDone: false,
    //         isValid: true
    //     };
    //     axios.post(`http://localhost:4000/`, { newTask })
    //         .then(res => {
    //             console.log(res);
    //             console.log(res.data);
    //         })

    // }
    // componentDidMount() {
    //     try{ 
    //         axios.get(`http://localhost:4000/`)
    //         .then(res => {
    //             const persons = res.data;
    //             this.setState({ persons });
    //         })
    //     } catch (e) {
    //         //nothing at all!
    //     }
   
    // }

    componentDidUpdate(prevProps , prevstate) {
        if (prevstate.allTasks.length !== this.state.allTasks.length) {
            const json =JSON.stringify(this.state.allTasks);
            localStorage.setItem('allTasks' , json);
        }
    }
    
    render(){
        return(
            <div className="AllTasks">
                <div className="AllTasks-container">
                    <div className="AllTasks-title_container">
                        <div className="AllTasks-title">Still in progress:</div>
                        <CgPlayListAdd
                            onClick={(e) => {
                                this.showAddTask();
                            }}
                        />
                    </div>
                    {this.state.showAddTask && <AddTask handeleAddTask = {this.handeleAddTask} showAddTask = {this.showAddTask}/>}
                    {
                        this.state.allTasks.filter(task => task.isValid && !task.isDone).map(filterdTask => (
                            <Task
                                id={filterdTask._id}
                                taskText={filterdTask.taskText}
                                isDone={filterdTask.isDone}
                                isValid={filterdTask.isValid}
                                handleDoneTask = {this.handleDoneTask}
                                handleDeleteTask = {this.handleDeleteTask}
                            />
                        ))
                    }
                </div>
                <div className="AllTasks-container">
                    <div className="AllTasks-title_container">
                        <div className="AllTasks-title">Done:</div>
                    </div>
                    {
                        this.state.allTasks.filter(task => task.isValid && task.isDone).map(filterdTask => (
                            <Task
                                id={filterdTask._id}
                                taskText={filterdTask.taskText}
                                isDone={filterdTask.isDone}
                                isValid={filterdTask.isValid}
                                handleDoneTask = {this.handleDoneTask}
                                handleDeleteTask = {this.handleDeleteTask}
                            />
                        ))
                    } 
                </div>
            </div>
        );
    }
}
