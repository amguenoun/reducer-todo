import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const TodoCard = (props) => (
    <Card>
        <Card.Content header={props.todo.name} />
        <Card.Content>Completed: {props.todo.completed ? <Icon name='check' /> : <Icon name='close' />} </Card.Content>
        <Card.Content>Time Created: {props.todo.timeCreated}</Card.Content>
        {props.todo.completed ?
            <Card.Content>Time Completed: {props.todo.timeCompleted}</Card.Content> : null}
        <button onClick={() => props.handleComplete(props.todo.id)}>Change Complete Status</button>
    </Card>
)

export default TodoCard