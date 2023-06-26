import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useUserMenu from '@/components/Header/hooks/useUserMenu';
import React from 'react';
import useUser from '@/components/AuthenticatedLayout/hooks/useUser';
import { Button } from '@mui/material';

const UserMenu = () => {
  const { menuItems } = useUserMenu();
  const { user } = useUser();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      {!user ? <Button>Connexion</Button> :
        <>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar>{user.username[0].toUpperCase()}</Avatar>
          </IconButton>
          <Menu
            sx={{ mt: '45px' }}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {menuItems.map((item, key) => (
              <MenuItem key={key} onClick={handleCloseUserMenu}>
                {item.href ? <Link href={item.href}>{item.name}</Link> :
                  <Typography textAlign='center'>{item.name}</Typography>}
              </MenuItem>
            ))}
          </Menu>
        </>
      }
    </Box>
  );
};

export default UserMenu;