import * as React from 'react'

type Props = {
  type?: string
  onClick?(event?: React.MouseEvent): any
}

const Button: React.SFC<Props> = (props) => (
  <button type={props.type} onClick={props.onClick}>{props.children}</button>
)

Button.displayName = 'Button'
Button.defaultProps = {
  type: 'button',
  onClick: () => {}
}

export default Button
