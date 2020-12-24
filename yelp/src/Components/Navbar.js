import React from 'react'
import {Flex, Link ,Button} from '@chakra-ui/react'
export const Navbar = () => {
    return (
        <Flex>
            <Link>Login</Link>
            <Button as='link' bg='transparent' borderWidth={1} borderColor='white'>Sign up</Button>
        </Flex>
    )
}
