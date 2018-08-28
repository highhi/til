import * as React from 'react'
import CheckBox from '../../components/CheckBox/CheckBox'
import Button from '../../components/Button/Button'

export type Props = {
  id: number
  text: string
  completed: boolean
  onChange(id: number): void
  onClick(id: number): void
}

export default class Todo extends React.Component<Props, {}> {
  public static readonly displayName = 'Todo'

  public render() {
    return <li>
      <CheckBox onChange={this.onChange} checked={this.props.completed} />
      {this.props.text}
      <Button onClick={this.onClick}>Delete</Button>
    </li>
  }

  private onChange = () => { 
    this.props.onChange(this.props.id)
  }

  private onClick = () => {
    this.props.onClick(this.props.id)
  }
}
