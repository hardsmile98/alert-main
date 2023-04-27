import { Grid } from '@mui/material';
import { Monitor } from 'models';
import Item from './item';

interface IProp {
  info: Monitor
}

function Info({ info }: IProp) {
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
        <Item title="Name" value={name} />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Item title="URL" value={url} />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Item title="Mehtod" value={method.toUpperCase()} />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Item title="Frequency" value={`Every ${frequency} mins`} />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Item title="Created at" value={createdAt} />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Item title="Last checked at" value={checkAt} />
      </Grid>
    </Grid>
  );
}

export default Info;
