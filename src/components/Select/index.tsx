import { MenuItem, SxProps } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface IOption {
  value: string
  title: string
}

interface IProps {
  options: Array<IOption>
  value: string | undefined
  onChange: (newValue: string) => void
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
      value={value}
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
