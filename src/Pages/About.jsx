import React, { useState } from 'react';
import { resume } from '@/data/themes';
import { Pic1, Pic2,Pic3 } from '@/images';
import { Link as RouterLink } from "react-router-dom";
import { Button, Link, Box, Typography, List, Grid, useMediaQuery,ListItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AnimatedPage, RotateAnimation } from '@/components/Animation/Animations';

function About() {
  const [buttonHover, setButtonHover] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const renderResume = () => (
    <Button sx={{ p: 0 }}>
      <Link href={resume} target="_blank" rel="noopener noreferrer" underline="none">
        View my resume
      </Link>
  </Button>
  );
  
  const renderCertifications = () => (
    <Button sx={{p:0}}>
      <Link href={'https://www.linkedin.com/in/anirudh-kambhampati-882b5a158/details/certifications/'}  target="_blank" rel="noopener noreferrer" underline="none">
      View my Certifications
      </Link>
    </Button>
  )

  return (
    <AnimatedPage>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={8} sm={4}>
          <Box
            component="img"
            src={Pic1}
            sx={{
              width: '80%',
              maxWidth: '40vh',
              mx: 'auto',
              display: 'block'
            }}
          />
        </Grid>
        <Grid item xs={8} sm={4}>
          <Box
            component="img"
            src={Pic3}
            sx={{
              width: '80%',
              maxWidth: '40vh',
              mx: 'auto',
              display: 'block'
            }}
          />
        </Grid>
        <Grid item xs={8} sm={4}>
          <Box
            component="img"
            src={Pic2}
            sx={{
              width: '80%',
              maxWidth: '40vh',
              mx: 'auto',
              display: 'block'
            }}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          minHeight: '10vh',
          alignItems: 'center',
          my: 2
        }}
      >
        <div onMouseEnter={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)}>
          {buttonHover ? (
            <RotateAnimation>{renderResume()}</RotateAnimation>
            // <RotateAnimation>{renderCertifications()}</RotateAnimation>
          ) : (
            renderResume()

          )}
        </div>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2, px: 2 }}>
        <Typography>
          I worked for Cognizant Technological Solutions at Chennai, India as a Programmer Analyst Trainee where my responsibilities included:
          <List>
            <ListItem>* Understand functional and non-functional application security requirements.</ListItem>
            <ListItem>* Develop proof of concept.</ListItem>
            <ListItem>* Create or update DIT(directory information tree) object class schema definition and indexes.</ListItem>
            <ListItem>* Develop Deployment instructions</ListItem>
            <ListItem>* Develop SDLC artifacts based on customer SDLC process.</ListItem>
            <ListItem>* Develop POCs for solution design realization.</ListItem>
          </List>
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2, px: 2 }}>
        <Typography>
          I am currently a graduate research assistant at the University of Missouri - Columbia. You can have a glance at few of my projects I did <Link component={RouterLink} to="/projects">here</Link>.
        </Typography>
      </Box>
    </AnimatedPage>
  );
}

export default About;
