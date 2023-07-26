import * as React from 'react'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import baba from '../../assets/baba-1.png'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 5s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '& .MuiAvatar-root': {
    width: '45px',
    height: '45px',
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '50%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
    '100%': {
      transform: 'scale(.8)',
      opacity: 0,
    },
  },
}))

interface Props {
  isShowStatusIcon?: boolean
}

export const CommonAva: React.FC<Props> = ({ isShowStatusIcon = true }) => {
  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      variant={isShowStatusIcon ? 'dot' : undefined}>
      <Avatar alt="Remy Sharp" src={baba} />
    </StyledBadge>
  )
}
