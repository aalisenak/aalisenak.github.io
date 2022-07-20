import React, {useContext, useEffect, useState} from 'react';
import {CountriesContext} from "../../context/countries-service";
import {Country} from "../../components/country/Country";
import {Search} from "../../components/Search/Search";
import {Filter} from "../../components/Filter/Filter";
import {SearchPanel, Wrapper} from "./Home.styles";
import {Countries} from "../../components/countries/Countries";

const Home = () => {

    // const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "Polar"]
    const [countries]: any = useContext(CountriesContext);
    // const [showingCountries, setShowingCountries] = useState([])
    const [search, setSearch] = useState('')

    const [showingCountries, setShowingCountries] = useState([]);
    //
    useEffect(() => {
        setShowingCountries(countries)
    }, [countries]);


    const filterCountries = (e: any) => {
        let value = e.target.value

        if (value === 'default') {
            setShowingCountries(countries)
        } else {
            const filteredCountry = countries.filter((c: { region: any; }) => c.region === value)
            setShowingCountries(filteredCountry);
        }
    }


    const handlerChange = (e: { target: { value: any; }; }) => {
        let value = e.target.value
        setSearch(value)

        if (!value) {
            setShowingCountries(countries)
        } else {
            const filteredCountry =
                countries.filter((c: { name: string; }) =>
                    c.name.toLowerCase().includes(value.toLowerCase()))
            setShowingCountries(filteredCountry)
        }

    };

    return (
        <Wrapper>
            <SearchPanel>
                <Search search={search} handlerChange={handlerChange}/>
                <Filter filterCountries={filterCountries}/>
            </SearchPanel>

            <Countries>
                {showingCountries &&
                showingCountries.map((country, index) => <Country key={index} country={country}/>)}
            </Countries>




        </Wrapper>
    );
};

export default Home
