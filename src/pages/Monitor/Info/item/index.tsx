import { Box } from '@mui/material';
import { Wrapper } from 'components';

interface IProps {
  title: string
  value: string
}

function Item({ title, value }: IProps) {
  return (
    <Wrapper>
      <Box
        fontWeight="fontWeightBold"
        mb={1}
      >
        {title}
      </Box>

      <Box color="text.secondary">
        {value}
      </Box>
    </Wrapper>
  );
}

export default Item;
