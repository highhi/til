import * as React from 'react'

interface IProps {
  type?: string
}

const Button: React.SFC<IProps> = (props): JSX.Element => {
  return <button type={props.type}>{props.children}</button>
}

Button.defaultProps = {
  type: 'button',
}

export default Button

