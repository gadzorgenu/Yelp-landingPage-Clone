import React from 'react'
import {
    Alert,
    Flex,
    Image,
    CloseButton,
    Spacer,
    Text
  } from "@chakra-ui/react"

export const AlertInfo = () => {
    return (
        <Alert status="info" h={8} bg='gray.400'>
            <Flex mx='30px'>
                <Image src='https://promos.yelpcdn.com/food_delivery_icon_2x.png' alt='logo'/>
                <Text as='h5'>You can always order in </Text>
                <Spacer/>
                <CloseButton position="absolute" right="8px" top="8px" />
            </Flex> 
      </Alert>
    )
}
