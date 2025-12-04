import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { DarkModeContext } from '../context/DarkModeContext.jsx';



const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#FFE86E',
      '& + .MuiSwitch-track': {
        backgroundColor: '#8F88FF',
        opacity: 1,
        border: 0,
        ...theme.applyStyles('dark', {
          backgroundColor: '#2ECA45',
        }),
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
      ...theme.applyStyles('dark', {
        color: "theme.palette.grey[600]",
      }),
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
      ...theme.applyStyles('dark', {
        opacity: 0.3,
      }),
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
    color: "#FFE86E"
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#8F88FF',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: '#FFE86E',
    }),
  },
}));



export default function CustomizedSwitches() {
  const { selectWord } = useContext(LanguageContext);
  const { darkButton, setDarkButton } = useContext(DarkModeContext);

  return (
    <FormGroup>

      <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} />}
        label={!darkButton ? selectWord("LightMode") : selectWord("DarkMode")}
        onChange={() => setDarkButton(!darkButton)}
      />

    </FormGroup>
  );
}