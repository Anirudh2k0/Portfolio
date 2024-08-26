import React from 'react'
import { Card, CardContent, Typography,Link } from '@mui/material'
import {AnimatedPage} from '@/components/Animation/Animations'
function Contact() {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh' }}>
    <AnimatedPage>
      <Card sx={{width:"80vh",display: 'flex', justifyContent: 'center', alignItems: 'center',boxShadow:2,borderRadius: '16px'}}>
        <CardContent>
          <Typography sx={{p:1}}>
            Email: anirudh.kambhampati2k0@gmail.com
          </Typography>
          <Typography sx={{p:1}}>
            Mobile: (+1)573-825-6186
          </Typography>
          <Typography sx={{p:1}}>
            LinkedIn: <Link target="_blank" href="https://www.linkedin.com/in/anirudh-kambhampati-882b5a158/">Anirudh LinkedIn</Link>
          </Typography>
          <Typography sx={{p:1}}>
            Github: <Link target="_blank" href="https://github.com/Anirudh2k0/">Anirudh Github</Link>
          </Typography>
          <Typography sx={{p:1}}>
            Certifications: <Link href={'https://www.linkedin.com/in/anirudh-kambhampati-882b5a158/details/certifications/'}  target="_blank" rel="noopener noreferrer">View my Certifications</Link>
          </Typography>
        </CardContent>
      </Card>
      </AnimatedPage>
  </div>
  )
}

export default Contact