import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Card,CardActions,CardContent,Button,Typography, CardMedia } from '@mui/material'
import ProjectModal from '../Modal/Modal'

import './card.css'

function ProjectCard({project,index}) {
  const [show,setShow] = useState(false);
  const handleMouseEnter = (e) => {
    e.currentTarget.classList.add('hovered');
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.classList.remove('hovered');
  };
  const navigate = useNavigate();
  return (
    <div style={{display:'flex',justifyContent:'space-around' }}>
    <Card sx={{ maxWidth: 300,p:1}} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} className="project-card" raised> 
      {/* <CardMedia
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain",height:200 }}
        image={project.images.card}
        title={project.projet}
      /> */}
      <img src={project.images.card} style={{height:undefined,aspectRatio:2,width:'100%'}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex',justifyContent:'center'}}>
        {/* <Button size="small" onClick={() => setShow(!show)}>Learn More</Button> */}
        <Button className='butt' size='small' onClick={() => navigate(`/projects/${project.id}`)}>Learn More</Button>
      </CardActions>
    </Card>
    {/* <ProjectModal show={show} onClose={()=>setShow(!show)} info={project.info}/> */}
    </div>
  )
}

export default ProjectCard


