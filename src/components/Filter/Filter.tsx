import React from "react";
import {Select, Wrapper} from "./Filter.styles";
import {RiArrowDownSLine} from "react-icons/ri";


export const Filter = ({filterCountries}: any) => {
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "Polar"]


    return (
        <Wrapper>
            <Select
                onChange={filterCountries}
                title='Region'
                aria-labelledby='filter'
                aria-label='Filter countries by region'
            >
                <option value='default'>Filter by Region</option>
                {regions.map(region => (
                    <option value={region} key={region}>
                        {region}
                    </option>
                ))}
            </Select>
            <RiArrowDownSLine/>
        </Wrapper>
    );
};