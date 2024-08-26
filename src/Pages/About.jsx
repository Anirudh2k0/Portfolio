import React, { useRef, useState } from 'react';
import { resume } from '@/data/themes';
import { Pic1, Pic2,Pic3 } from '@/images';
import { Link as RouterLink } from "react-router-dom";
import { Button, Link, Box, Typography, List, Grid, useMediaQuery,ListItem,Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AnimatedPage, RotateAnimation, createAnimatedIcon } from '@/components/Animation/Animations';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function About() {
  const [buttonHover, setButtonHover] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const AnimatedIcon = createAnimatedIcon(ArrowForwardIcon);
  const images = [Pic1,Pic2,Pic3];

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
          <ListItem><Stack alignItems="center" direction="row">
            <AnimatedIcon />Understand functional and non-functional application security requirements.
          </Stack></ListItem>
          <ListItem><Stack alignItems="center" direction="row">
            <AnimatedIcon />Develop proof of concept.
          </Stack></ListItem>
          <ListItem><Stack alignItems="center" direction="row">
            <AnimatedIcon />Create or update DIT(directory information tree) object class schema definition and indexes.
          </Stack></ListItem>
          <ListItem><Stack alignItems="center" direction="row">
            <AnimatedIcon /> Develop Deployment instructions.
          </Stack></ListItem>
          <ListItem><Stack alignItems="center" direction="row">
            <AnimatedIcon />Develop SDLC artifacts based on customer SDLC process.
          </Stack></ListItem>
          <ListItem><Stack alignItems="center" direction="row">
            <AnimatedIcon />Develop POCs for solution design realization.
          </Stack></ListItem>
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
