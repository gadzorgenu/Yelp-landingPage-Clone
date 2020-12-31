import React from 'react'
import {Box, Image, Text} from '@chakra-ui/react'
import dentist from '../../Assets/dentist.jpg'
import dry_cleaning from '../../Assets/dry_cleaning.jpg'
import massage from '../../Assets/massage.jpg'
import gym from '../../Assets/gym.jpg'

const BusinessCard = ({title}) => {

    const images = (image) => {
        switch(image){
            case 'Massage':
                return massage
            case 'Dry Cleaning':
                return dry_cleaning
            case 'Gym': 
                return gym
            case 'Dentist':
                return dentist
            default :
                return null
        }
    }    

    return (
        <a href='/home'>
            <Box boxSize="xs" borderRadius={3} >
                <Image src={images(title)}  alt={title}/>
                <Text bg='gray.300'textAlign='center' py={3}>{title}</Text>
            </Box>
        </a>
    )
}

export default BusinessCard
