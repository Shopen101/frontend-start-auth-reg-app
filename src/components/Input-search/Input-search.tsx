import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'

export const InputSearch: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        height: '35px',
        width: 250,
        maxWidth: '100%',
        paddingLeft: '18px',
        '& MuiInputBase-root': {
          width: '100px !important',
        },
      }}>
      <SearchIcon sx={{ color: 'action.active', mr: 2, my: 0.5 }} />
      <TextField
        fullWidth
        id="input-with-sx"
        label="Поиск ..."
        variant="standard"
      />
    </Box>
  )
}
