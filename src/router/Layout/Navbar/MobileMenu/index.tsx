import { Menu as MenuIcon } from '@mui/icons-material';
import { Box, Drawer, IconButton } from '@mui/material';
import { useState } from 'react';
import Menu from '../Menu';

function MobileMenu() {
  const [isOpen, setOpen] = useState(false);

  const handleCloseMenu = () => setOpen(false);
  const handleOpenMenu = () => setOpen(true);

  return (
    <>
      <IconButton
        onClick={handleOpenMenu}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={handleCloseMenu}
      >
        <Box sx={{
          width: 260,
          p: 2,
        }}
        >
          <Menu onClickItem={handleCloseMenu} />
        </Box>
      </Drawer>
    </>
  );
}

export default MobileMenu;
