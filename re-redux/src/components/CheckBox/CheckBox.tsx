import * as React from 'react'

type Props = {
  checked?: boolean
  onChange?(event: React.ChangeEvent<HTMLInputElement>): any
}

const CheckBox: React.SFC<Props> = (props) => (
  <input type="checkbox" checked={props.checked} onChange={props.onChange} />
)

CheckBox.displayName = 'CheckBox'
CheckBox.defaultProps = {
  checked: false,
  onChange: () => {},
}

export default CheckBox
