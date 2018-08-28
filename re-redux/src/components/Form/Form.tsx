import * as React from 'react'
import Input from '../Input/Inpurt'
import Button from '../Button/Button'
import { DispatchProps } from '../../containers/Form/Form'

type State = {
  text: string
}

type Props = DispatchProps

export default class Form extends React.Component<Props, State> {
  public static readonly displayName = 'Form'
  public readonly state = { text: '' }

  public render() {
    return <form onSubmit={this.onSubmit}>
      <Input value={this.state.text} onChange={this.onChange}></Input>
      <Button type="submit">Submit</Button>
    </form>
  }

  private onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.currentTarget.value.trim()
    this.setState({ text })
  }

  private onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    this.props.addTodo(this.state.text)
    this.setState({ text: '' })
  }
}

