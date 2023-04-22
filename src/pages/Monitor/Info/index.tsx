import { Grid, Typography } from '@mui/material';
import { Monitor } from 'models';
import { Wrapper } from 'components';
import Item from './item';

interface IProp {
  info: Monitor | undefined
}

function Info({ info }: IProp) {
  if (!info) {
    return (
      <Wrapper sx={{ textAlign: 'center' }}>
        <Typography variant="h4">
          Not found monitor info
        </Typography>
      </Wrapper>
    );
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Item title="Name" value={info.name} />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Item title="URL" value={info.url} />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Item title="Frequency" value={`Every ${info.frequency} mins`} />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Item title="Created at" value={info.createdAt} />
      </Grid>

      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Item title="Last checked at" value={info.checkAt} />
      </Grid>
    </Grid>
  );
}

export default Info;
