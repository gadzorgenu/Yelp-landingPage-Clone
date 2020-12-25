import React from 'react'
import {Box, Image} from '@chakra-ui/react'
import AlertInfo from '../Components/Alert'
import Navbar from '../Components/Navbar'
import food1 from '../Assets/food1.jpg'


const Home = () => {
    return (
        <Box>
            <AlertInfo/>
            <Image pos='absolute' src={food1} alt='restaurant'/>
            <Navbar/>
        </Box>
    )
}
export default Home
