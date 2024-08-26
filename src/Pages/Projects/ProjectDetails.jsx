import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { projectsInfo } from './projectsInfo'
import { Typography,Box, Link, Button,Stack } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createAnimatedIcon } from '@/components/Animation/Animations';

const BackAnimatedArrow = createAnimatedIcon(ArrowBackIcon)

function ProjectDetails() {

  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
      const currentProject = projectsInfo.find(item => item.id === parseInt(id));
      setProject(currentProject);
  }, [id, projectsInfo]);

  if (!project) return <Typography>Why would you manually change the URL? 👀</Typography>;

  return (
      <div style={{ padding: '20px' }}>
          <Typography m={2} component="h1" variant="h5" align="center">
              <span>{project.title}</span>
          </Typography>
          <Typography mb={2} color="textSecondary">
              Tools Used: {project.tools}
          </Typography>
          <Typography mb={2} color="textSecondary">
               Code: <Link href={project.code} target="blank">{project.code}</Link>
          </Typography>
          <Typography mb={2} variant="body1">
              {project.info}
          </Typography>
          {project.youtube && project.youtube.length > 0 && (
              <Link 
                  sx={{ display: 'block', textAlign: 'center', mb: 2 }}  
                  href={project.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
              >
                  Watch on YouTube
              </Link>
          )}
          <div style={{ display: 'flex', justifyContent: 'center', maxHeight: '80vh', margin: '20px 0' }}>
              <Box 
                  component="img" 
                  src={project.images.flow} 
                  sx={{ maxWidth: '100%', height: 'auto' }}
                  alt={project.title}
              />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Button 
                  variant="outlined" 
                  color="primary" 
                  component={RouterLink} 
                  to="/projects" 
                  sx={{ display: 'flex', alignItems: 'center' }}
              >
                  <Stack direction="row" alignItems="center">
                      <BackAnimatedArrow />
                      <Typography ml={1}>Back</Typography>
                  </Stack>
              </Button>
          </div>
      </div>
  );
}

export default ProjectDetails
