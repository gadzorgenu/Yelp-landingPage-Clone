import React from 'react'
import {Box,Text, Flex, Link, Divider} from '@chakra-ui/react'

const Branches = ({mx}) => {

    return(
        <Box my='50px'>
            <Text color='red.400' fontWeight='bold' textAlign='center' fontSize='30px' > Yelp San Fransisco</Text>
            <Flex mt={3} justify='center' fontSize='20px' color='gray.500'>
                <Link mr={4} _hover={{ borderBottomWidth:'3px', borderColor:'red.500'}}>New York</Link>
                <Link mr={4} _hover={{ borderBottomWidth:'3px', borderColor:'red.500'}}>San Jose</Link>
                <Link mr={4} _hover={{ borderBottomWidth:'3px', borderColor:'red.500'}}>Los Angelos</Link>
                <Link mr={4} _hover={{ borderBottomWidth:'3px', borderColor:'red.500'}}>Chicago</Link>
                <Link mr={4} _hover={{ borderBottomWidth:'3px', borderColor:'red.500'}}>Palo Alto</Link>
                <Link mr={4} _hover={{ borderBottomWidth:'3px', borderColor:'red.500'}}>Oakland</Link>
                <Link >More Cities</Link>
            </Flex>
            <Divider my={4} borderColor='gray.400' w='70%' mx={mx}/>
        </Box>
    )
}

export default Branches