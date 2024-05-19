import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { projectsInfo } from './projectsInfo'
import { Typography,Box, Link } from '@mui/material';

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
    </div>
  )
}

export default ProjectDetails