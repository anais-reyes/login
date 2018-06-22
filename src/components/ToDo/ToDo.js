// Library
import React, { Component } from 'react';
import styled, { consolidateStreamedStyles } from 'styled-components';

// Components
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import Button from '../Button/Button';

//Styled Component
const StyledUl = styled.ul`
	list-style-type: none;
`;

const inlineDiv = styled.div`
	display: inline-block;
`;

class ToDo extends Component {
	constructor() {
		super();
		this.state = {
			originalTasks: [],
			text: null,
			tasks: [],
			disabledButton: true,
			test: '',
		}; // End State
	} // End constructor

	handleChange = event => {
		event.target.value.trim().length !== 0
			? this.setState({ disabledButton: false, text: event.target.value })
			: this.setState({ disabledButton: true, text: event.target.value });
	}; // End handleChange

	handleClick = event => {
		switch (event.target.id) {
			case 'add-task':
				this.addTask(event);
				break;
			case 'all-tasks':
				this.allTasks(event);
				break;
			case 'completed-tasks':
				this.completedTasks(event);
				break;
			case 'unfinished-tasks':
				this.unfinishedTasks(event);
				break;
		} //End switch
	}; // End hanldeClick

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

	allTasks = event => {
		this.setState({ tasks: this.state.originalTasks });
	}; // End allTasks

	addTask = event => {
		let newArray = [...this.state.tasks, { task: this.state.text, checked: false, id: this.state.tasks.length }];
		this.setState({ tasks: newArray, originalTasks: newArray });
	}; //End addTask

	toggleChange = event => {
		this.state.tasks[event.target.id].checked = !this.state.tasks[event.target.id].checked;
		this.setState({ test: event.target.id });
	};

	render() {
		return (
			<div>
				<Input handleChange={this.handleChange} title={this.state.text} />
				<Button
					disabled={this.state.disabledButton}
					handleClick={this.handleClick}
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
					<Button id={'all-tasks'} handleClick={this.handleClick} title={'All Tasks'} />
				</inlineDiv>
				<inlineDiv>
					<Button id={'completed-tasks'} handleClick={this.handleClick} title={'Completed Tasks'} />
				</inlineDiv>
				<inlineDiv>
					<Button id={'unfinished-tasks'} handleClick={this.handleClick} title={'Unfinished Tasks'} />
				</inlineDiv>
			</div>
		); //End return
	} //End render
} // End ToDo

export default ToDo;
// comment
