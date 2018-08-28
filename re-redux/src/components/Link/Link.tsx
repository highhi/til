import * as React from 'react'

type Props = {
  active?: boolean,
  onClick(event: React.MouseEvent): void
}

const Link: React.SFC<Props> = (props) => {
  if (props.active) { return <span>{props.children}</span> }
  return <a href="#" onClick={props.onClick}>{props.children}</a>
}

export default Link

