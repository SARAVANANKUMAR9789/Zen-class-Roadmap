import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function Header() {
    const navigate = useNavigate()
    return (
        <div>
            {/* <nav>
                <ul>
                    <li><Link to='DataSci'>DataSci</Link></li>
                    <li><Link to='FullStdev'>FullStdev</Link></li>
                    <li><Link to='CybSec'>CybSec</Link></li>
                </ul>
            </nav> */}
            <AppBar position="static">
                <Toolbar>
                    <Button onClick={() => navigate("/")} color='inherit'>ALL</Button>
                    <Button onClick={() => navigate("FullStdev")} color='inherit'>Full Stack Development</Button>
                    <Button onClick={() => navigate("DataSci")} color='inherit'>Data Science</Button>
                    <Button onClick={() => navigate("CybSec")} color='inherit'>Cyber Security</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
