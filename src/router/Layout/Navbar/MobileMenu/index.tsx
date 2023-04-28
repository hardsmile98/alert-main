import { Menu as MenuIcon } from '@mui/icons-material';
import { Box, Drawer, IconButton } from '@mui/material';
import { useState } from 'react';
import Menu from '../Menu';
import ChangeLanguage from '../ChangeLanguage';

const styles = {
  root: {
    width: 260,
    p: 2,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};

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
        <Box sx={styles.root}>
          <Menu onClickItem={handleCloseMenu} />

          <ChangeLanguage />
        </Box>
      </Drawer>
    </>
  );
}

export default MobileMenu;
