import React from 'react'
import { Base } from './messenger-base-styled'

export const MessengerBase: React.FC<{ children: JSX.Element }> = ({
  children,
}) => <Base>{children}</Base>
