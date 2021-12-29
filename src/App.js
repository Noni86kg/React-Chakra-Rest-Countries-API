import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Error404 from './components/Error';
import Details from './components/Details';
import axios from 'axios';
import { Heading} from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom";

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([])
  const [filteredRegionData, setFilteredRegionData] = useState("All")
  const [inputValue, setInputValue] = useState("")
// console.log(data)
  const darkThemeFunc = () => {
    if (darkTheme) {
      setDarkTheme(false)
      document.documentElement.style.setProperty('--placeholderBG', "#2b3945")
    } else {
      setDarkTheme(true)
      document.documentElement.style.setProperty('--placeholderBG', "#ffffff")
    }
  }

  function handleInputChange(event) {
    setInputValue(event.target.value)
  }

  function handleChange() {
    if (filteredRegionData === "All") {
      setFilteredData(data.filter((item) => item.name.common.toLowerCase().includes(inputValue.toLowerCase())))
    } else if (filteredRegionData === "Africa") {
      setFilteredData(data.filter((item) => item.continents[0] === "Africa" && item.name.common.toLowerCase().includes(inputValue.toLowerCase())))
    } else if (filteredRegionData === "America") {
      setFilteredData(data.filter((item) => (item.continents[0] === "North America" || item.continents[0] === "South America") && item.name.common.toLowerCase().includes(inputValue.toLowerCase())))
    } else if (filteredRegionData === "Antarctica") {
      setFilteredData(data.filter((item) => item.continents[0] === "Antarctica" && item.name.common.toLowerCase().includes(inputValue.toLowerCase())))
    } else if (filteredRegionData === "Asia") {
      setFilteredData(data.filter((item) => item.continents[0] === "Asia" && item.name.common.toLowerCase().includes(inputValue.toLowerCase())))
    } else if (filteredRegionData === "Europe") {
      setFilteredData(data.filter((item) => item.continents[0] === "Europe" && item.name.common.toLowerCase().includes(inputValue.toLowerCase())))
    } else if (filteredRegionData === "Oceania") {
      setFilteredData(data.filter((item) => item.continents[0] === "Oceania" && item.name.common.toLowerCase().includes(inputValue.toLowerCase())))
    }  else {
    setFilteredData(filteredData.filter((item) => item.name.common.toLowerCase().includes(inputValue.toLowerCase())))
    }
  }

  useEffect(() => {
    handleChange()
  }, [filteredRegionData, inputValue])

  useEffect(() => {
    async function getCountries() {
      setLoading(true);
      try {
          const response = await axios.get('https://restcountries.com/v3.1/all');
          const dataArr = response.data
          setData(dataArr)
          setFilteredData(dataArr)
          setLoading(false);
      }   catch (error) {
          console.log(error)
      }
  }
  getCountries()
  }, []);

  return (
    <>
    <Header darkTheme={darkTheme} darkThemeFunc={darkThemeFunc} />
    {loading && <Heading mt="25vh" ml="50vw" transform="translateX(-50%)" textAlign="center" position="absolute" >Loading ...</Heading>}
    <Routes >
      <Route path="/" element= {<Main darkTheme={darkTheme} filteredData={filteredData} handleInputChange={handleInputChange} setFilteredRegionData={setFilteredRegionData} />}/>
      <Route path="/details/:id" element={<Details darkTheme={darkTheme} filteredData={filteredData} />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    </>
  );
}

export default App;
