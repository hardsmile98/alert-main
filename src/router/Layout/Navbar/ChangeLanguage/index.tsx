import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { setLanguage } from 'store/slices/language';
import styles from './styles';

type Language = 'ru' | 'en';

function ChangeLanguage() {
  const dispatch = useDispatch();

  const { value } = useSelector((state: RootState) => state.language);

  const handleChange = (_: React.MouseEvent<HTMLElement, MouseEvent>, newValue: Language) => {
    if (!newValue) {
      return;
    }

    dispatch(setLanguage(newValue));
  };

  return (
    <Box sx={styles.root}>
      <Box>
        Language:
      </Box>

      <ToggleButtonGroup
        exclusive
        size="small"
        value={value}
        onChange={handleChange}
      >
        <ToggleButton
          sx={styles.button}
          value="ru"
        >
          🇷🇺
        </ToggleButton>
        <ToggleButton
          sx={styles.button}
          value="en"
        >
          🇬🇧
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default ChangeLanguage;
