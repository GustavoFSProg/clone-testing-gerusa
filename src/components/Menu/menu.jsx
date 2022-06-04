import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import { MenuContainer } from './styled-menu'
import { Link } from 'react-router-dom'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <MenuContainer>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon style={{ color: '#9d5716', fontSize: '35px' }} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link style={{ textDecoration: 'none' }} to="/">
            Home
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link style={{ textDecoration: 'none' }} to="/classes">
            Aulas
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>Contato</MenuItem>
        <MenuItem onClick={handleClose}>Tradução</MenuItem>
        <MenuItem onClick={handleClose}>Alemao</MenuItem>
        <MenuItem onClick={handleClose}>Serviços</MenuItem>
      </Menu>
    </MenuContainer>
  )
}
