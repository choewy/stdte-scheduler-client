import { FC } from 'react';
import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  InputProps,
} from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

export type TextFieldWithIconProps = InputProps & {
  label: string;
  Icon?: SvgIconComponent;
};

export const TextFieldWithIcon: FC<TextFieldWithIconProps> = ({
  label,
  Icon,
  ...inputProps
}) => {
  return (
    <FormControl
      variant="standard"
      sx={{
        width: '100%',
        minWidth: '240px',
        maxWidth: '240px',
        mt: 1,
        mb: 2,
      }}
    >
      <InputLabel>{label}</InputLabel>
      <Input
        {...inputProps}
        startAdornment={
          Icon && (
            <InputAdornment position="start">
              <Icon />
            </InputAdornment>
          )
        }
      />
    </FormControl>
  );
};
