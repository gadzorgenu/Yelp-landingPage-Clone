import React from 'react'
import {Box,Text, Grid} from '@chakra-ui/react'
import NewBusinessCard from './Cards/NewBusinessCard'

const NewBusiness = () => {

const data = [
    {
        id:1,
        number:1,
        title: 'Kusan Uyghur Cuisine',
        review: 6,
        location: 'Halal, Asian Fusion, Middle Eastern',
        venue:'Bayview-Hunters Point',
        weeks: '6 weeks'
    },
    {
        id:2,
        number:2,
        title: 'Kyushu Ramen',
        review: 5,
        location: 'Ramen',
        venue:'Outer Sunset',
        weeks: '4 weeks'
    },
    {
        id:3,
        number:3,
        title: 'Double Rainbow Ice Cream',
        review: 17,
        location: 'Ice Cream & Frozen Yogurt',
        venue:'Castro',
        weeks: '7 weeks'
    }
]
    return (
       <Box mx='15px'>
           <Text color='red.600' fontWeight='bold' textAlign='center' fontSize='20px'>Hot and New Businesses</Text>
           <Box mx='15%' my='5%' >
                <Grid templateColumns='repeat(4, 1fr)' gap={6} >
                    {
                        data.map((item) => (
                            <NewBusinessCard
                                key={item.id}
                                title={item.title}
                                review={item.review}
                                location={item.location}
                                venue={item.venue}
                                weeks={item.weeks}
                                number={item.number}
                            />
                        ))
                    }
                </Grid>
            <Text as='a' href='/home' ml='45%' color='blue.300' textAlign='center'> See more hot and new businesses</Text>
            </Box>
            <Text color='red.600' fontWeight='bold' textAlign='center' fontSize='20px'>Recent Collections</Text>
       </Box>
    )
}

export default NewBusiness
