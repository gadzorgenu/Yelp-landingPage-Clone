import React from 'react'
import {Box, Image} from '@chakra-ui/react'
import AlertInfo from '../Components/Alert'
import Navbar from '../Components/Navbar'
import food2 from '../Assets/food2.jpg'


const Home = () => {
    return (
        <Box>
            <AlertInfo/>
            <Image pos='absolute' src={food2} alt='restaurant'/>
            <Navbar/>
        </Box>
    )
}
export default Home
