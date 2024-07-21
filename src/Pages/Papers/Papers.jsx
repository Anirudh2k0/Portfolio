import React from 'react'
import { Card, CardContent, Typography,Link } from '@mui/material'
import { papersInfo } from './papersInfo'
import {AnimatedPage} from '@/components/Animation/Animations';

function Papers() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh' }}>
    <AnimatedPage>
      <Card sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',boxShadow:2,borderRadius: '16px',p:1,m:3}}>
        <CardContent>
        {
          papersInfo.map(item => (
            <div>
            <Typography sx={{mt:2}}><strong>Title: </strong> {item.title}</Typography>
            <Typography><strong>Status: </strong> {item.status}</Typography>
            <Typography><strong>Venue: </strong> {item.venue}</Typography>
            </div>
          ))
        }
        </CardContent>
      </Card>
      </AnimatedPage>
  </div>
  )
}

export default Papers