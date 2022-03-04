import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function Header() {
    return (
        <div>
            <AppBar  style={{ background: '#2E3B55', margin:0 }} position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Employee Management
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Typography sx={{ minWidth: 100 }}>Login</Typography>
                        <Typography sx={{ minWidth: 100 }}>Register</Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header