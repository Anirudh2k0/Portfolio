import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { anirudh } from '@/images';
import { AnimatedPage } from '@/components/Animation/Animations';

function Home() {
  return (
    <div>
      <AnimatedPage>
        <Grid container justifyContent="center" alignItems="center" sx={{ mt: 0, maxHeight: "80vh" }}>
          <Grid item xs={12} sm={10} md={8} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box component="img" src={anirudh} sx={{ width: '100%', maxWidth: "100vh", height: 'auto' }} />
          </Grid>
        </Grid>
        <Box sx={{ mt: 5, px: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Typography variant="h6">
            Welcome to my blog! I am Anirudh Kambhampati. I am an AI/RL guy working in the cloud. I also have expertise in VRLE and DevOps.
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            You can explore my <Link component={RouterLink} to="/projects">projects</Link>. Feel free to <Link component={RouterLink} to="/contact">contact</Link> me.
          </Typography>
        </Box>
      </AnimatedPage>
    </div>
  );
}

export default Home;
