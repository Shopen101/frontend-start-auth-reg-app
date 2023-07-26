import React from 'react'
import { LogoContainer } from './logo-styled'
import { ReactComponent as LogoSVG } from '../../assets/LOGO.svg'

export const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <LogoSVG width="48" />
      <h1>Chat - App</h1>
    </LogoContainer>
  )
}
