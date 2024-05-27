import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { projectsInfo } from './projectsInfo'
import { Typography,Box, Link, Button,Stack } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/system';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(-5px);
  }
  60% {
    transform: translateX(-3px);
  }
`;

const AnimatedIcon = styled(KeyboardBackspaceIcon)`
  animation: ${bounce} 3s infinite;
`;

function ProjectDetails() {

    const { id } = useParams();
    const [project, setProject] = useState(null);
    useEffect(() => {
        const currentProject = projectsInfo.find(item => item.id === parseInt(id));
        setProject(currentProject);
    },[id])
  return (
    <div>
        <Typography m={1} component="h1" fontFamily={'"Helvetica Neue"'} sx={{display:'flex',justifyContent:'center'}}>
            {project?.title}
        </Typography>
        <Typography>
            {project?.info}
        </Typography>
        {project?.youtube.length>0 && <Link sx={{display:'flex',justifyContent:'center',m:1}}  href={project?.youtube} target="_blank" rel="noopener noreferrer">{project?.youtube}</Link>}
        <div style={{ display: 'flex', justifyContent: 'center', maxHeight:"80vh",marginTop: '30px'}}>
            <Box component="img" src={project?.images.flow} sx={{maxWidth:"50vh"}}/>
        </div>
        <span style={{display:'flex',flexDirection:'row-reverse',margin:'20px'}}>
            <Button variant='outlined'>
            <Link component={RouterLink} to="/projects" underline="none">
      <Stack alignItems="center" direction="row">
        <AnimatedIcon />Back
      </Stack>
    </Link>
            </Button>

        </span>
    </div>
  )
}

export default ProjectDetails