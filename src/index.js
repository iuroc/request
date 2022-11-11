import * as React from 'react';
import ReactDOM from "react-dom/client";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
    <Button>Save</Button>
</Box>);5