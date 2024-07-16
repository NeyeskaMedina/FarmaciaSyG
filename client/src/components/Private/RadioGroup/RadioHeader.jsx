import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioHeader( {headerType, setHeaderType} ) {
  

    const handleChange = (event) => {
        setHeaderType(event.target.value);
    };
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Cabecera</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={headerType}
        onChange={handleChange}
      >
        <FormControlLabel value="Si" control={<Radio />} label="Si posee" />
        <FormControlLabel value="No" control={<Radio />} label="No posee" />
      </RadioGroup>
    </FormControl>
  );
}