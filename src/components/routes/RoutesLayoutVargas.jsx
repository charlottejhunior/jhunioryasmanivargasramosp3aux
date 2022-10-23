import React, { useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import { NavbarVargas } from './NavbarVargas';
import { Routes, Route} from 'react-router-dom';
import {HomeVargas } from '../components/home/HomeVargas';
import {AboutVargas} from '../components/about/AboutVargas';
import './routesLayoutVargas.css';
export const routesLayoutVargas = () =>{
    const [darkMode, setDarkMode] = useState(true);
    function handlerClick(){
        setDarkMode(!darkMode);
    }
    return (
        <Grid container spacing={1} className={`content ${darkMode? 'dark':'light'}`}>
            <Grid item xs={11}component={'header'} className={`${darkMode? 'dark':'light'}`}>
                <NavbarVargas darkMode={darkMode} handlerClick={handlerClick} />
                </Grid>
                <Grid item xs={11} className={`container-content ${darkMode ? 'dark':'light'}`}>
                    <Routes>
                        <Route exact path={'/'}element={<HomeVargas />} />
                        <Route exact path={'/about'}element={<AboutVargas />} />
                    </Routes>
                    </Grid>
                    < Grid item xs={11}component={'footer'} >
                        <Box className={`${darkMode? 'dark':'light'} text-footer`} >
                            <p> template created with &hearts;by <a target ={'blank'} href={'https://es.reactjs.org/'}>react js</a></p>
                            <p> &copy; 2022</p>
                            </Box>
                            </Grid>
                            </Grid>


    )
}
export default RoutesLayoutVargas;