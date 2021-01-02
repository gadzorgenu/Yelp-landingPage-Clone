import React from 'react'
import {Box,Text,Image, Flex, Icon} from '@chakra-ui/react'

const Collection = ({location, title, numOfPlaces, name}) => {
    return (
       <Box >
           <Text color='blue.400' py={2}>{location}</Text>
           <Text>{title}</Text>
            <Flex>
                <Text color='gray.300'>{numOfPlaces} .By </Text>
                <Text color='blue.400' ml={1}>{name}</Text>
            </Flex>
       </Box>
    )
}

export default Collection
