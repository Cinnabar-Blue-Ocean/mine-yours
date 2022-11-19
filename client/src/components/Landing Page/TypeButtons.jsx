import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      sx={{ml: '5px', pb: '10px'}}
    >
      <ToggleButton value="temp" onClick={(e) => {
        console.log(e.target.value)
      }}>Temporary</ToggleButton>
      <ToggleButton value="perm"
      onClick={(e) => {
        // Get value of which button was clicked to query db
        console.log(e.target.value)
      }}>Permanent</ToggleButton>
    </ToggleButtonGroup>
  );
}