import React from 'react'
import { Grid, GridItem , Box, Text , Flex , Heading, Image  } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Cards = ({ filteredData, darkTheme }) => {
    return (
        <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)' ,'repeat(2, 1fr)','repeat(4, 1fr)']} gap={6} mt="25px" >
            {filteredData.map((country, id) => {
                const population = country.population.toLocaleString("en-US")

                return (
                    <GridItem key={id} w='100%' borderRadius="5px" shadow="0 2px 5px 0 #00000033" bg={`${darkTheme ? "#2b3945" : "white" }`} color={`${darkTheme ? "white" : "#2b3945" }`} fontSize="14px" cursor="pointer"  >
                        <Link to={`/details/:${id}`}>
                        <Box w="100%" h="48%" shadow="0 2px 5px 0 #00000033" >
                            <Image src={`${country.flags.png}`} alt='flag' w="100%" h="100%" />
                        </Box>
                        <Flex h="52%" p="25px 0 15px 25px" direction="column" >
                            <Heading fontSize="1.17em" mb="25px" >{`${country.name.common ? country.name.common : "no info"}`}</Heading>
                            <Text><Text as="span" fontWeight="600" >Population:</Text> {`${country.population ? population : "no info"}`}</Text>
                            <Text><Text as="span" fontWeight="600" >Region:</Text> {`${country.continents[0] ? country.continents[0] : "no info"}`}</Text>
                            <Text><Text as="span" fontWeight="600" >Capital:</Text> {`${country.capital ? country.capital : "no info"}`}</Text>
                        </Flex>
                        </Link>
                    </GridItem>
                )
            })}
 
        </Grid>
    )
}

export default Cards
