import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {BsArrowLeft} from "react-icons/bs";
import {CountriesContext} from "../../context/countries-service";
import { useParams } from 'react-router-dom';
import {
    StyledButton,
    BorderingCountries,
    CountryInfo,
    CountryWrapper,
    Flag,
    StyledCountryDetails, StyledLink, Wrapper,
} from "./CountryDetails.styles";



export const CountryDetails = () => {

    const [country, setCountry] = useState<any>()
    const [countries]: any = useContext(CountriesContext);
    const { code } = useParams<{ code: string }>();
    useEffect(() => {
        const selectCountry = countries.find( (c: { code: string | undefined; }) => c.code === code?.toUpperCase())
        setCountry(selectCountry)
    }, [country, countries, code]);



    // useEffect(() => {
    //     countries.map(item => setCountry(country))
    // }, [countries, country])

    return (
        <Wrapper>
            <StyledButton>
                <Link to={'/'}>
                <BsArrowLeft size={20} />
                Back
                </Link>
            </StyledButton>
            <CountryWrapper>
                <Flag>
                    <img src={country?.flag} alt={`flag of ${country?.name}`} />
                </Flag>
                <StyledCountryDetails>
                    <h1>{country?.name}</h1>
                    <CountryInfo>
                        <ul>
                            <li>
                                <span>Native Name: </span>
                                {country?.nativeName || 'n/a'}
                            </li>
                            <li>
                                <span>Population: </span>
                                {country?.population
                                    ? country?.population.toLocaleString()
                                    : 'n/a'}
                            </li>
                            <li>
                                <span>Region: </span>
                                {country?.region || 'n/a'}
                            </li>
                            <li>
                                <span>Subregion: </span>
                                {country?.subregion || 'n/a'}
                            </li>
                            <li>
                                <span>Capital: </span>
                                {country?.capital || 'n/a'}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>Top Level Domain: </span>
                                {country?.topLevelDomain}
                            </li>
                            <li>
                                <span>Currencies: </span>
                                {country?.currencies
                                    ? country?.currencies
                                        .map((currency: { name: any; }) => currency.name)
                                        .join(', ')
                                    : 'n/a'}
                            </li>
                            <li>
                                <span>Languages: </span>
                                {country?.languages
                                    ? country?.languages.map((language: { name: any; }) => language.name).join(', ')
                                    : 'n/a'}
                            </li>
                        </ul>
                    </CountryInfo>
                    <h2>Border Countries: </h2>
                    {!!country?.borders?.length ? (
                        <BorderingCountries>
                            {country?.borders.map((border: React.Key | null | undefined) => {
                                return (
                                    <li key={border}>
                                        <StyledLink
                                            to={`/${border}`}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            {
                                                countries.find((country: { code: React.Key | null | undefined; }) => country.code === border)
                                                    ?.name
                                            }
                                        </StyledLink>
                                    </li>
                                );
                            })}
                        </BorderingCountries>
                    ) : (
                        'n/a'
                    )}
                </StyledCountryDetails>
            </CountryWrapper>
        </Wrapper>
    );
};