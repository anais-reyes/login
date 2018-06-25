// Library
import React, { Component } from 'react';

// Components
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import Button from '../Button/Button';

//StyledComponents
import { StyledContainer, StyledUl, inlineDiv } from './ToDoStyled';

//ToDo
class ToDo extends Component {
	constructor() {
		super();
		this.state = {
			originalTasks: [],
			text: null,
			tasks: [
				{ task: 'some', id: 0, checked: true },
				{ task: 'some2', id: 1, checked: true },
				{ task: 'some3', id: 2, checked: false },
			],
			disabledButton: true,
			test: '',
		}; // End State
	} // End constructor

	handleChange = event => {
		event.target.value.trim().length !== 0
			? this.setState({ disabledButton: false, text: event.target.value })
			: this.setState({ disabledButton: true, text: event.target.value });
	}; // End handleChange

	unfinishedTasks = event => {
		let filter = this.state.originalTasks.filter(task => {
			return task.checked === false;
		});
		this.setState({ tasks: filter });
	}; // End unfinishedTasks

	completedTasks = () => {
		let filter = this.state.originalTasks.filter(task => {
			return task.checked;
		});
		this.setState({ tasks: filter });
	}; // End completedTasks

	allTasks = () => {
		this.setState({ tasks: this.state.originalTasks });
	}; // End allTasks

	addTask = () => {
		let newArray = [...this.state.tasks, { task: this.state.text, checked: false, id: this.state.tasks.length }];
		this.setState({ tasks: newArray, originalTasks: newArray });
	}; //End addTask

	toggleChange = event => {
		console.log(this.state.tasks[event.target.id], this.state.tasks);
		let tasks = this.state.tasks;
		let newChecked = this.state.tasks[event.target.id].checked === true ? false : true;
		tasks[event.target.id].checked = newChecked;

		this.setState({ tasks: tasks });
	};

	render() {
		return (
			<StyledContainer>
				<Input handleChange={this.handleChange} title={this.state.text} />
				<Button
					disabled={this.state.disabledButton}
					onClick={() => {
						this.addTask();
					}}
					id={'add-task'}
					title={'Add task'}
				/>
				<StyledUl>
					{this.state.tasks.length === 0 ? (
						<p>No tasks</p>
					) : (
						this.state.tasks.map((task, key) => {
							return (
								<li key={key}>
									<Checkbox
										toggleChange={this.toggleChange}
										title={task.task}
										id={task.id}
										checked={task.checked ? true : false}
									/>
								</li>
							);
						}) // End map
					)}
				</StyledUl>
				<inlineDiv>
					<Button
						id={'all-tasks'}
						onClick={() => {
							this.allTasks();
						}}
						title={'All Tasks'}
					/>
				</inlineDiv>
				<inlineDiv>
					<Button
						id={'completed-tasks'}
						onClick={() => {
							this.completedTasks();
						}}
						title={'Completed Tasks'}
					/>
				</inlineDiv>
				<inlineDiv>
					<Button
						id={'unfinished-tasks'}
						onClick={() => {
							this.unfinishedTasks();
						}}
						title={'Unfinished Tasks'}
					/>
				</inlineDiv>
			</StyledContainer>
		); //End return
	} //End render
} // End ToDo

export default ToDo;
// comment
