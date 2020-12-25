import React from 'react'
import {Flex, Link ,Button, Box, Image, Spacer} from '@chakra-ui/react'


const Navbar = () => {
    return (
        <Box >
            <Flex  color='white' fontSize='20px' fontWeight='bold' py='30px' mx='200px'>
                <Flex >
                    <Link 
                        _hover={{ borderBottomWidth:'3px', borderColor:'white'}}
                    >
                        Write a review
                    </Link>
                    <Link 
                        ml={5}
                        _hover={{ borderBottomWidth:'3px', borderColor:'white'}}
                    >
                        Events
                    </Link>
                    <Link 
                        ml={5}
                        _hover={{ borderBottomWidth:'3px', borderColor:'white'}}
                    >
                        Talk
                    </Link>
                </Flex>
                <Spacer/>
                <Flex>
                    <Link href='/login' _hover={{ textDecor: 'none' }} mt={2} pr={6}>Login</Link>
                    <Button as='a' 
                        href='/signup'
                        bg='transparent' 
                        _hover={{ textDecor: 'none' }} 
                        borderWidth={1} 
                        borderColor='white'
                    >
                        Sign up
                    </Button>
                </Flex>
            </Flex>
        </Box>
        
    )
}

export default Navbar