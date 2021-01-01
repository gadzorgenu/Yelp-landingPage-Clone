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
            case 'Gyms': 
                return gym
            case 'Dentists':
                return dentist
            default :
                return null
        }
    }    

    return (
        <Box >
            <a href='/home'>
                <Box boxSize="2xs" h='210px' bgColor='white' mb={12} _hover={{boxShadow:'xl'}}>
                    <Image src={images(title)}  alt={title}/>
                    <Text textAlign='center' py={2}>{title}</Text>
                </Box>
            </a>
        </Box>
    )
}

export default BusinessCard
