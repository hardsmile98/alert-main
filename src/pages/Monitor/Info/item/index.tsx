import { Box } from '@mui/material';
import { Wrapper } from 'components';

interface IProps {
  title: string
  value: string
  isLink?: boolean
}

function Item({ title, value, isLink }: IProps) {
  return (
    <Wrapper>
      <Box
        fontWeight="fontWeightBold"
        mb={1}
      >
        {title}
      </Box>

      {isLink
        ? (
          <Box
            color="text.secondary"
            component="a"
            href={value}
            target="_blank"
            rel="noreferrer"
          >
            {value}
          </Box>
        )
        : (
          <Box color="text.secondary">
            {value}
          </Box>
        )}
    </Wrapper>
  );
}

export default Item;
