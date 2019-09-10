import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const TodoCard = (props) => (
    <Card>
        <Card.Content header={props.todo.name} />
        <Card.Content>Completed: {props.todo.completed ? <Icon name='check' /> : <Icon name='close' />} </Card.Content>
        <button onClick={() => props.handleComplete(props.todo.id)}>Change Complete Status</button>
    </Card>
)

export default TodoCard