import React from 'react'
import { Button, Box, Text , Flex , Heading, Image  } from "@chakra-ui/react"
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useParams } from 'react-router-dom'
import Boarders from './Boarders'
import { Link } from "react-router-dom"

const Details = ({ darkTheme, filteredData }) => {

    const { id } = useParams()
    let idFixed = id.slice(1, id.length)

    const singleItem = filteredData[idFixed]
    const {flags, name, population, continents, subregion, capital, tld, currencies, languages, borders } = singleItem

    const nativeNames = name.nativeName
    const nativeName = Object.values(nativeNames)[0].common

    const populationEdited = population.toLocaleString("en-US")

    const currency = Object.values(currencies)[0].name

    let languagesArr = []
    for( const key in languages){
          languagesArr.push(languages[key])
          
    }
    const language = languagesArr.join(', ');

    return (
        <Box px="25px" bg={`${darkTheme ? "#202c37" : "#fafafa" }`} minH="calc(100vh - 90px)" >
            <Link to={`/`}>
                <Button leftIcon={<ArrowBackIcon  w={4} h={4} />} my="100px" h="44px" w="140px" cursor="pointer" shadow="0 2px 5px 0 #00000033" borderRadius="5px" color={`${darkTheme ? "white" : "gray.900" }`} bg={`${darkTheme ? "#2b3945" : "white" }`} _hover={{background: "2b3945" }}>Back</Button>
            </Link>
            <Flex justifyContent="space-between" direction={["column", "column", "column", "row"]} >
                <Flex alignItems="center" w={["100%", "100%", "100%", "46%"]} >
                    <Image src={`${flags.png}`} alt='flag' w="100%" h="auto" />
                </Flex>

                <Flex w={["100%", "100%", "100%", "46%"]} p="6vh 0" direction="column" color={`${darkTheme ? "white" : "gray.900" }`}>
                    <Heading>{`${name.common ? name.common : "no info"}`} </Heading>
                    
                    <Flex justifyContent="space-between" >
                        <Flex m="4vh 0" direction="column" w="48%" > 
                            <Text m="8px 0" ><Text as="span" fontWeight="600" >Native Name:</Text> {`${nativeName ? nativeName : "no info"}`} </Text>
                            <Text m="8px 0" ><Text as="span" fontWeight="600" >Population:</Text> {`${population ? populationEdited : "no info"}`} </Text>
                            <Text m="8px 0" ><Text as="span" fontWeight="600" >Region:</Text> {`${continents[0] ? continents[0] : "no info"}`} </Text>
                            <Text m="8px 0" ><Text as="span" fontWeight="600" >Sub Region:</Text> {`${subregion ? subregion : "no info"}`} </Text>
                            <Text m="8px 0" ><Text as="span" fontWeight="600" >Capital:</Text> {`${capital ? capital : "no info"}`} </Text>
                        </Flex>

                        <Flex m="4vh 0" direction="column" w="48%" >
                            <Text m="8px 0" ><Text as="span" fontWeight="600" >Top Level Domain:</Text> {`${tld ? tld : "no info"}`} </Text>
                            <Text m="8px 0" ><Text as="span" fontWeight="600" >Currencies:</Text> {`${currency ? currency : "no info"}`} </Text>
                            <Text m="8px 0" ><Text as="span" fontWeight="600" >Languages:</Text> {`${language ? language : "no info"}`} </Text>
                        </Flex>
                    </Flex>

                    {borders &&
                    <Flex alignItems="baseline" >
                        <Text fontWeight="600" >Border Countries:</Text> &nbsp; <Flex wrap="wrap" >{<Boarders borders={borders} darkTheme={darkTheme}/>}</Flex>
                    </Flex>
                    }
                    {!borders &&
                    <Flex alignItems="baseline" >
                        <Text fontWeight="600" >Border Countries:</Text> &nbsp; <Text>no border countries</Text>
                    </Flex>
                    }

                </Flex>
            </Flex>
        </Box>
    )
}

export default Details
