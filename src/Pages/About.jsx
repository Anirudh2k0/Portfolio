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

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', my: 4, px: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }}>
          Part-Time Research Assistant - Unity Developer
        </Typography>
        <Typography sx={{ fontStyle: 'italic', textAlign: 'center', color: 'text.secondary' }}>
          University of Missouri - Columbia, Missouri | Nov 2024 - Present
        </Typography>
        <Typography sx={{ mt: 2 }}>
          I am currently working as a Part-Time Research Assistant at the University of Missouri - Columbia under{' '}
          <Link to="https://noahglaser.com/" sx={{ textDecoration: 'none', fontWeight: 'bold' }}>
            Dr. Noah Glaser
          </Link>. We are building an escape-room-based gamified scenario in VR to teach Cyber Defense to people on the neuro-divergent spectrum. 
          I also developed a Pedagogical Agent that helps users in VR with tasks and ensures user immersion.
        </Typography>
      </Box>  

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', my: 4, px: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }}>
          Graduate Research Assistant
        </Typography>
        <Typography sx={{ fontStyle: 'italic', textAlign: 'center', color: 'text.secondary' }}>
          University of Missouri - Columbia, Missouri | Aug 2022 - Aug 2024
        </Typography>
        <Typography sx={{ mt: 2 }}>
          As a Graduate Research Assistant at the University of Missouri - Columbia, I contributed to various research projects, IEEE transaction papers in the field of AI, microservices, immersive technologies.
          You can view some of my projects <Link component={RouterLink} to="/projects" sx={{ fontWeight: 'bold' }}>here</Link>.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', my: 4, px: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }}>
          Programmer Analyst Trainee
        </Typography>
        <Typography sx={{ fontStyle: 'italic', textAlign: 'center', color: 'text.secondary' }}>
          Cognizant Technology Solutions, Chennai, India | Oct 2021 - Mar 2022
        </Typography>
        <Typography sx={{ mt: 2 }}>
          I worked for Cognizant Technology Solutions as a Programmer Analyst Trainee, where I was responsible for the following tasks:
        </Typography>
        <List sx={{ pl: 3, mt: 2 }}>
          <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
            <AnimatedIcon sx={{ mr: 2 }} /> Understand functional and non-functional application security requirements.
          </ListItem>
          <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
            <AnimatedIcon sx={{ mr: 2 }} /> Develop proof of concept (POC).
          </ListItem>
          <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
            <AnimatedIcon sx={{ mr: 2 }} /> Create or update DIT (Directory Information Tree) object class schema definition and indexes.
          </ListItem>
          <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
            <AnimatedIcon sx={{ mr: 2 }} /> Develop Deployment instructions.
          </ListItem>
          <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
            <AnimatedIcon sx={{ mr: 2 }} /> Develop SDLC artifacts based on customer SDLC process.
          </ListItem>
          <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
            <AnimatedIcon sx={{ mr: 2 }} /> Develop POCs for solution design realization.
          </ListItem>
        </List>
      </Box>


      
    </AnimatedPage>
  );
}

export default About;
