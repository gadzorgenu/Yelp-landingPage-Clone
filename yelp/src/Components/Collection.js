import React from 'react'
import {Box,Text,Image, Flex, Icon,Divider} from '@chakra-ui/react'

const Collection = ({location, title, numOfPlaces, name, image}) => {
    return (
       <Box >
           <Flex>
                <Image src={image} alt='Food' />
                <Box>
                        <Text color='blue.400' py={2}>{location}</Text>
                        <Text>{title}</Text>
                        <Flex>
                            <Text color='gray.300'>{numOfPlaces} .By </Text>
                            <Text color='blue.400' ml={1}>{name}</Text>
                        </Flex>
                </Box>
           </Flex>
           <Divider w='100%' borderColor='gray.300' my={4}/>
       </Box>
    )
}

export default Collection
