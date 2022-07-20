import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Container, CountryInfo, FlagWrapper} from "./Country.styles";



export const Country = ({country}: any) => {
    return (
        <Container>
            <Link to={`/${country.code}`}>
                    <FlagWrapper>
                        <img src={country.flag} alt={country.name}/>
                    </FlagWrapper>
                <CountryInfo>
                    <h2>{country.name}</h2>
                    <ul>
                        <li><span>Population:</span> {country.population.toLocaleString()}</li>
                        <li><span>Region:</span> {country.region}</li>
                        <li><span>Capital:</span> {country.capital}</li>
                    </ul>
                </CountryInfo>
            </Link>
        </Container>
    );
}