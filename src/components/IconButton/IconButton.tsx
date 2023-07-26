import * as React from 'react'
import IconButton from '@mui/material/IconButton'

export const IconButtons: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  return <IconButton aria-label="delete">{children}</IconButton>
}
