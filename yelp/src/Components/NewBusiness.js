import React from 'react'
import {Box,Text,Image, Flex, Icon} from '@chakra-ui/react'
import ice_cream from '../Assets/ice_cream.jpg'
import noodles from '../Assets/noodles.jpg'
import soup from '../Assets/ice_cream.jpg'
import {FaHotjar} from 'react-icons/fa'

const NewBusiness = ({title, review,venue,location, weeks}) => {

    const images = (image) => {
        switch(image){
            case 'Cuisine':
                return soup
            case 'Noodles':
                return noodles
            case 'Ice cream': 
                return ice_cream
            default :
                return null
        }
    }  
    return (
       <Box mx='15px' my='2%'>
           <Text color='red.400' fontWeight='bold' textAlign='center' fontSize='20px'>Hot and New Businesses</Text>
           <a href='/home'>
                <Box boxSize="lg" h='210px' bgColor='white' mb={12} _hover={{boxShadow:'xl'}}>
                    <Image src={images(title)}  alt={title}/>
                    <Box pl='30px'>
                        <Text color='blue.300' py={2}>{title}</Text>
                        <Flex>
                            <Text>{review}</Text>
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

export default NewBusiness
