import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: '4px solid #FF2625',
              background: '#fff',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '282px',
              cursor: 'pointer',
              gap: '47px'
            }
          : {
              background: '#fff',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '282px',
              cursor: 'pointer',
              gap: '47px'
            }
      }
      onClick={() => {
        setBodyPart(item)
        window.scrollTo({ top: 800, left: 100, behavior: 'smooth' })
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: '100px', height: '100px' }}
      />
      <Typography fontSize="24px" fontWeight="bold" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart
