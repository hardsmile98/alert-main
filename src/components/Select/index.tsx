import { MenuItem, SxProps } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface IOption {
  value: string | number
  title: string
}

interface IProps {
  options: Array<IOption>
  value: string | number | undefined
  onChange: (newValue: string | number) => void
  placeholder?: string
  sx?: SxProps
  fullWidth?: boolean
}

function MySelect({
  sx,
  fullWidth,
  options,
  value,
  onChange,
  placeholder,
}: IProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <Select
      sx={sx}
      value={String(value)}
      fullWidth={fullWidth}
      onChange={handleChange}
      placeholder={placeholder}
      size="small"
    >
      {options.map(({ title, value: optionValue }) => (
        <MenuItem
          key={optionValue}
          value={optionValue}
        >
          {title}
        </MenuItem>
      ))}
    </Select>
  );
}

export default MySelect;
