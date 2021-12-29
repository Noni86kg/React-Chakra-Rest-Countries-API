import React from 'react'
import { Input, Box ,Flex , Select , InputGroup , InputLeftElement } from "@chakra-ui/react"
import { SearchIcon  } from '@chakra-ui/icons'
import Cards from './Cards'

const Main = ({darkTheme, filteredData, handleInputChange, setFilteredRegionData }) => {

    return (
        <Box p="50px 25px" bg={`${darkTheme ? "#202c37" : "#fafafa" }`} minH="calc(100vh - 90px)" >
            <Flex justifyContent="space-between" direction={["column", "column", "row"]} >
            <InputGroup mb="25px" >
            <InputLeftElement mt="8px"
                pointerEvents='none'
                children={<SearchIcon color={`${darkTheme ? "#ffffff" : "#2b3945" }`} />}
                />
                <Input onChange={handleInputChange} type="text" placeholder='Search for a country...' maxW="480px" h="56px" border="none" bg={`${darkTheme ? "#2b3945" : "white" }`} shadow="0 2px 5px 0 #00000033" color={`${darkTheme ? "white" : "black" }`} />
            </InputGroup>
                <Select onChange={(e) => setFilteredRegionData(e.target.value)} mb="25px" placeholder='Filter by Region' w="200px" h="56px" border="none" bg={`${darkTheme ? "#2b3945" : "white" }`} shadow="0 2px 5px 0 #00000033" color={`${darkTheme ? "white" : "black" }`} cursor="pointer" >
                    <option value='All'>All</option>
                    <option value='Africa'>Africa</option>
                    <option value='America'>America</option>
                    <option value='Antarctica'>Antarctica</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
                </Select>
            </Flex>

        <Cards filteredData={filteredData} darkTheme={darkTheme} />

        </Box>
    )
}

export default Main
