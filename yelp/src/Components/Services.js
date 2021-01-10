import React from 'react'
import {Flex, Link ,Button,Tooltip, Box, Icon, } from '@chakra-ui/react'
import  { FaUtensils, FaTools,FaMotorcycle, FaStore, FaCaretDown } from 'react-icons/fa'

const Services = () => {
    return (
        <Box textAlign='center' >
            <Flex  color='white' fontSize='18px' fontWeight='bold' py='30px' justify='center' >
                <Flex >
                    <Flex mr={5}>
                    <Icon as={FaTools} mt={1} mr={1} />
                        <Link 
                            _hover={{ borderBottomWidth:'3px', borderColor:'white'}}
                        >
                        Plumbers
                        </Link>
                    </Flex>
                    <Flex mr={5}>
                        <Icon as={FaUtensils} mt={1} mr={1} />
                        <Link 
                            _hover={{ borderBottomWidth:'3px', borderColor:'white'}}
                        >
                            Restaurants
                        </Link>
                    </Flex>
                    <Flex mr={5}>
                    <Icon as={FaStore} mt={1} mr={1} />
                        <Link 
                            _hover={{ borderBottomWidth:'3px', borderColor:'white'}}
                        >
                        Home Services
                        </Link>
                        <Icon as={FaCaretDown} mt={1} ml={1} />
                    </Flex>
                    <Flex mr={5}>
                        <Icon as={FaMotorcycle} mt={1} mr={1} />
                        <Link 
                            _hover={{ borderBottomWidth:'3px', borderColor:'white'}}
                        >
                        Delivery
                        </Link>
                    </Flex>
                    <Flex>
                        <Link 
                            _hover={{ borderBottomWidth:'3px', borderColor:'white'}}
                        >
                        Black Owned
                        </Link>
                        <Icon as={FaCaretDown} mt={1} ml={1} />
                    </Flex>
                    <Tooltip hasArrow bg='white' color='blue.300' label="Restaurants" aria-label="A tooltip" >
                        Hover me
                    </Tooltip>
                </Flex>
               
            </Flex>
        </Box>
        
    )
}

export default Services