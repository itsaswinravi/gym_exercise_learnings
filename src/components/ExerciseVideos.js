import React from 'react'
import { Box, Stack, Typography} from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name}) => {
  if(!exerciseVideos.length) return 'Loading...'
  return (
    <Box sx={{ marginTop: { lg: '200px',xs: '20px'}}} p="20px">
        <Typography variant='h3' mb='33px'>
            watch <span style={{color:'#ff2625', textTransform:'capitalize'}}>{name} </span>exercise videos

        </Typography>
        <stack justifyContent="flex-start" flexwrap="wrap" alignItems="center"
        sx={{
            flexDirection: { lg: 'row'},
            gap: { lg: '110px', xs: '0'}
        }}>
          {exerciseVideos?.slice(0,3).map((item, index) =>(
            <a 
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="blank"
            rel="noreferrer">
              <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
              <Box>
                <Typography variant="h5" color="#000">
                  {item.video.title}
                </Typography>
                <Typography variant='h6' color="#000">
                  {item.video.channelName}
                </Typography>

              </Box>

            </a>
          ))}

        </stack>
      
    </Box>
  )
}

export default ExerciseVideos
