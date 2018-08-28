import * as React from 'react'

type Props = {
  value?: string
  onChange?(event: React.ChangeEvent<HTMLInputElement>): any
}

const Input: React.SFC<Props> = (props) => (
  <input type="text" value={props.value} onChange={props.onChange} />
)

Input.displayName = 'Input'

export default Input
