import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

function PlaceSelectors() {
  return (
<>
<Box sx={{display:"flex",flexDirection:"column",gap:3}}>
<Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
<FormControl sx={{width:"200px",backgroundColor:"#fff"}}>
  <InputLabel id="demo-simple-select-label">Select Starte</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
  >
    <MenuItem value={10}>Tamil Nadu</MenuItem>
    <MenuItem value={20}>Kerala</MenuItem>
    <MenuItem value={30}>Karnataka</MenuItem>
  </Select>
</FormControl>
<FormControl sx={{width:"200px",backgroundColor:"#fff"}}>
  <InputLabel id="demo-simple-select-label">Select District</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
  >
    <MenuItem value={10}>Erode</MenuItem>
    <MenuItem value={20}>Cohin</MenuItem>
    <MenuItem value={30}>Silk Board</MenuItem> 
  </Select>
</FormControl>
</Box>


<Box>
<FormControl sx={{display:"flex",flexDirection:"column",backgroundColor:"#fff"}}>
  <InputLabel id="demo-simple-select-label">Select Service center</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
  >
    <MenuItem value={10}>Satyamangalam</MenuItem>
    <MenuItem value={20}>Allapulzha</MenuItem>
    <MenuItem value={30}>Kaadubeesnahalli</MenuItem>
  </Select>
</FormControl>
</Box>
</Box>
</>
    )
}

export default PlaceSelectors