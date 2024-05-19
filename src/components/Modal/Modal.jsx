import React from 'react'
import { Modal, Typography,Box } from '@mui/material'

function ProjectModal(props) {
  return (
    <div>
    <Modal open={props.show} onClose={props.onClose}>
    <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography> {props.info}
        </Typography>
    </Box>
    </Modal>
    </div>
  )
}

export default ProjectModal