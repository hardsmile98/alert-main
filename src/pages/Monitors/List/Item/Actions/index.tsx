import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import {
  MoreHoriz as ListIcon,
  PauseCircleOutline as PauseIcon,
  DeleteOutlineOutlined as DeleteIcon,
  PlayCircleOutline as StartIcon,
} from '@mui/icons-material';
import { MonitorStatus } from 'models';
import {
  useChangeStatusMonitorMutation,
  useDeleteMonitorMutation,
} from 'api/publicApi';
import { useTranslation } from 'react-i18next';

const styles = {
  item: {
    svg: {
      mr: 1,
    },
  },
};

interface IProps {
  id: number
  status: MonitorStatus
}

function Actions({ id, status }: IProps) {
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const [changeStatus, { isLoading: isChanging }] = useChangeStatusMonitorMutation();
  const [deleteMonitor, { isLoading: isDeleting }] = useDeleteMonitorMutation();

  const isLoading = isChanging || isDeleting;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeStatus = (monitorId: number) => {
    setAnchorEl(null);
    changeStatus({ id: monitorId });
  };

  const handleDelete = (monitorId: number) => {
    setAnchorEl(null);
    deleteMonitor({ id: monitorId });
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
          onClick={() => handleChangeStatus(id)}
          disabled={isLoading}
        >
          {status === 'PAUSE' ? (
            <>
              <StartIcon />
              {t('monitors.actions.start')}
            </>
          ) : (
            <>
              <PauseIcon />
              {t('monitors.actions.pause')}
            </>
          )}
        </MenuItem>

        <MenuItem
          sx={styles.item}
          onClick={() => handleDelete(id)}
          disabled={isLoading}
        >
          <DeleteIcon />
          {t('monitors.actions.delete')}
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Actions;
