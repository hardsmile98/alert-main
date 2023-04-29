import { Grid } from '@mui/material';
import { Monitor } from 'models';
import { useTranslation } from 'react-i18next';
import Item from './item';

interface IProp {
  info: Monitor
}

function Info({ info }: IProp) {
  const { t } = useTranslation();

  const {
    name,
    url,
    method,
    frequency,
    createdAt,
    checkAt,
  } = info;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Item title={t('monitor.name')} value={name} />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Item title="URL" value={url} />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Item title={t('monitor.method')} value={method.toUpperCase()} />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Item title={t('monitor.frequency')} value={`Every ${frequency} mins`} />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Item title={t('monitor.createdAt')} value={createdAt} />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Item title={t('monitor.checkedAt')} value={checkAt} />
      </Grid>
    </Grid>
  );
}

export default Info;
