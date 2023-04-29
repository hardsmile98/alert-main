import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Warning } from '@mui/icons-material';
import { ErrorBoundary, Loader } from 'components';
import { Helmet } from 'react-helmet';
import styles from './styles';

interface IProps {
  title?: string
  children: React.ReactNode
  isLoading?: boolean
  isError?: boolean
  loadingText?: string
}

function PageWrapper({
  title,
  children,
  isLoading,
  isError,
  loadingText,
}: IProps) {
  const { t } = useTranslation();

  const defaultTitle = 'SiteAlert - monitors your sites';
  const newTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  const defaultLoadingText = loadingText || t('main.loading');

  if (isError) {
    return (
      <Box sx={styles.root}>
        <Typography
          variant="h5"
          sx={styles.errorTitle}
        >
          <Warning />
          Произошла ошибка
        </Typography>

        <Box mt={0.5}>
          Извините, произошла ошибка. Попробуйте позже.
        </Box>
      </Box>
    );
  }

  return (
    <ErrorBoundary>
      <Helmet title={newTitle} />

      {isLoading
        ? (
          <Box sx={styles.loading}>
            <Loader
              text={defaultLoadingText}
            />
          </Box>
        )
        : (
          <Box sx={styles.root}>
            {children}
          </Box>
        )}
    </ErrorBoundary>
  );
}

export default PageWrapper;
