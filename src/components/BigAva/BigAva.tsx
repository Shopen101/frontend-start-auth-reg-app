import React from 'react'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import BigAvaImg from '../../assets/niga.png'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    width: '17px',
    height: '17px',
    borderRadius: '50%',
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
    width: '130px',
    height: '130px',
    position: 'relative',
    boxShadow: `0px 0px 0px 3px ${theme.palette.primary.main}`,
    '&::before': {
      content: '""',
      position: 'absolute',
      display: 'block',
      width: '115px',
      height: '115px',
      borderRadius: '50%',
      border: '10px solid #fff',
    },
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

export const BigAva: React.FC = () => {
  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        variant="dot">
        <Avatar alt="Remy Sharp" src={BigAvaImg} />
      </StyledBadge>
    </Stack>
  )
}
