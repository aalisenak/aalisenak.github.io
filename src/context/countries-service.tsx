import Axios from "axios";
import {_apiBase} from "../services/constans";
import {createContext, useEffect, useState} from "react";
import {ICountriesContext} from "../interfaces/CountriesContext";

// _apiBase = 'https://restcountries.eu/rest/v2';
// _apiBase = 'https://www.scorebat.com/video-api';
// _apiBase = 'https://swapi.co/api';
// const baseURL = 'https://restcountries.com/v3.1/all'

export const CountriesContext = createContext({})

export const CountriesProvider = ({children}: any) => {

    const [countries, setCountries] = useState([])
    const fetchApi = async () => {
        try {
            const {data} = await Axios.get(_apiBase)

            const countryObj = await data.map((data: ICountriesContext) => {
                return {
                    name: data.name,
                    capital: data.capital,
                    region: data.region,
                    population: data.population,
                    area: data.area,
                    borders: data.borders,
                    flag: data.flag,
                    code: data.alpha3Code,
                    languages: data.languages,
                    nativeName: data.nativeName,
                    currencies: data.currencies,
                    subRegion: data.subRegion,
                    topLevelDomain: data.topLevelDomain,
                }
            })

            setCountries(countryObj)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])


    // const searchByRegion = (countries: any[], region: any) => {
    //     if (!region) return countries;
    //     return countries.filter(country => country.region === region);
    // };


    // const [region, setRegion] = useState('');

    // const [searchText, setSearchText] = useState('');

    // useEffect(() => {
    //     const countriesByRegion: any = searchByRegion(countries, region);
    //     const newCountries: any = searchByName(countriesByRegion, searchText);
    //     setCountries(newCountries);
    // }, [countries, searchText, region]);


    const [searchText, setSearchText] = useState('');


    // @ts-ignore
    // const searchByName = (e) => {
    //     let value = e.target.value
    //     setSearchText(value)
    //     if (!value) {
    //         setShowingCountries(countries)
    //     } else {
    //         const ap = countries.filter(country => {
    //             // @ts-ignore
    //             country.name.toLowerCase().includes(value.toLowerCase());
    //         });
    //         setShowingCountries(ap)
    //     }
    // };


    return (
        // @ts-ignore
        <CountriesContext.Provider
            value={[countries]}>
            {children}
        </CountriesContext.Provider>
    );
};
