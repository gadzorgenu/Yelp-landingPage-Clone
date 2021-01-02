import React from 'react'
import {
    Alert,
    Flex,
    Image,
    CloseButton,
    Box,
    Text,
    Link,
    useDisclosure
  } from "@chakra-ui/react"

 const AlertInfo = () => {
     const {onClose} = useDisclosure()
    return (
        <Alert status="info" bg='gray.100' py={2} px={8}>
            <Flex mx='30px'>
                <Flex ml='90px'>
                    <Image src='https://promos.yelpcdn.com/food_delivery_icon_2x.png' alt='logo'/>
                    <Text fontSize='20px' mt={4} mx={3} fontWeight='bold'>You can always order in </Text>
                </Flex>
                <Box d='flex' fontSize='15px' color='blue.400' mt={6} ml='600px'>
                    <Link href='https://www.yelp.com/search?find_desc=Delivery&find_loc=San+Francisco%2C+CA'>Delivery</Link>
                    <Link href='https://www.yelp.com/search?find_desc=+Pizza+Delivery&find_loc=San+Francisco%2C+CA' ml={4}>Pizza Delivery</Link>
                    <Link href='https://www.yelp.com/search?find_desc=+Chinese+Food+Delivery&find_loc=San+Francisco%2C+CA' ml={4}>Chinese Food Delivery</Link>
                </Box>
                <CloseButton mt={5} ml={5} onClose={onClose}/>
            </Flex> 
      </Alert>
    )
}
export default AlertInfo