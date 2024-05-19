import React from 'react';
import ProjectCard from '@/components/Card/Card';
import { Grid } from '@mui/material';
import { projectsInfo } from '@/Pages/Projects/projectsInfo';
import {AnimatedPage} from '@/components/Animation/Animations';
function Projects() {

  return (
    <div style={{ padding: '20px' }}>
      <AnimatedPage>
      <Grid container spacing={4} justifyContent="center">
        {projectsInfo.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProjectCard project={item} index={index}/>
          </Grid>
        ))}
      </Grid>
      </AnimatedPage>
    </div>
  );
}

export default Projects;
