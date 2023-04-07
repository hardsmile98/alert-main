import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import {
  MoreHoriz as ListIcon,
  PauseCircleOutline as PauseIcon,
  DeleteOutlineOutlined as DeleteIcon,
} from '@mui/icons-material';

const styles = {
  item: {
    svg: {
      mr: 1,
    },
  },
};

function Actions() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ListIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          sx={styles.item}
          onClick={handleClose}
        >
          <PauseIcon />
          Pause
        </MenuItem>

        <MenuItem
          sx={styles.item}
          onClick={handleClose}
        >
          <DeleteIcon />
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Actions;
