import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './styles';

type Language = 'ru' | 'en';

function ChangeLanguage() {
  const { t, i18n } = useTranslation();

  const handleChange = (_: React.MouseEvent<HTMLElement, MouseEvent>, newValue: Language) => {
    if (!newValue) {
      return;
    }

    i18n.changeLanguage(newValue);
  };

  return (
    <Box sx={styles.root}>
      <Box>
        {`${t('main.languageTitle')}:`}
      </Box>

      <ToggleButtonGroup
        exclusive
        size="small"
        value={i18n.language}
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
