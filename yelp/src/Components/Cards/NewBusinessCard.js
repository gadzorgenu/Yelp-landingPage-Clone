import React from 'react'
import {Box,Text,Image, Flex, Icon} from '@chakra-ui/react'
import ice_cream from '../../Assets/ice_cream.jpg'
import noodles from '../../Assets/noodles.jpg'
import soup from '../../Assets/ice_cream.jpg'
import {FaHotjar} from 'react-icons/fa'
import { HiStar } from 'react-icons/hi'

const NewBusinessCard =({title,number, review,venue,location, weeks}) => {
    const images = (image) => {
        switch(image){
            case 1:
                return soup
            case 2:
                return noodles
            case 3: 
                return ice_cream
            default :
                return null
        }
    } 
    return (
        <Box>
            <a href='/home'>
                <Box boxSize="sm" h='210px' bgColor='white' mb={12} _hover={{boxShadow:'xl'}}>
                    <Image src={images(number)}  alt={title}/>
                    <Box pl='30px' py='4%'>
                        <Text color='blue.300' py={2}>{title}</Text>
                        <Flex>
                            <Box>
                                <Icon as={HiStar} color='red.400' />
                                <Icon as={HiStar} color='red.400'/>
                                <Icon as={HiStar} color='red.400'/>
                                <Icon as={HiStar} color='red.400'/>
                                <Icon as={HiStar} color='red.400'/>
                            </Box>
                            <Text ml={3}>{review} reviews</Text>
                        </Flex>
                        <Text>{location}</Text>
                        <Text>{venue}</Text>
                        <Flex>
                            <Icon  as={FaHotjar} color='orange.500' mt={1} mr={1}/>
                            <Text color='orange.500'>Opened {weeks} ago</Text>
                        </Flex>
                    </Box>
                </Box>
            </a>
        </Box>
    )
}

export default NewBusinessCard
