import * as React from 'react'

export type Props = {
  id: number
  text: string
  completed: boolean
}

export default class Todo extends React.Component<Props, {}> {
  public static readonly displayName = 'Todo'

  public render() {
    return <li>
      {this.props.text}
    </li>
  }
}

