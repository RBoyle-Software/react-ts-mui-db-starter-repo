import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function MUI_Buttons() {
    return (
      <Stack spacing={2} direction="row">
        <Button onClick={() => {
            console.log("Button 1 Clicked");
        }} variant="text">Text</Button>
        <Button onClick={() => {
            console.log("Button 2 Clicked");
        }} variant="contained">Contained</Button>
        <Button onClick={() => {
            console.log("Button 3 Clicked");
        }} variant="outlined">Outlined</Button>
      </Stack>
    );
}