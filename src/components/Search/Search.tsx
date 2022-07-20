import React from "react";
import {InputWrapper} from "./Search.styles";
import {AiOutlineSearch} from "react-icons/ai";


export const Search = ({search, handlerChange}: any) => {

    // const [text, setText] = useState([])
    // const [new, setText] = useState([])
    // const search = (e: { target: any}) => {
    //
    //     const search = countries.filter((c: any) => c.name.toLowerCase() === e.target.value)
    //     setText(search)
    //
    // }


    return (
        <InputWrapper>
            <AiOutlineSearch/>
            <input
                placeholder='Search for a country…'
                type="text"
                onChange={handlerChange}
                value={search}
            />
        </InputWrapper>
    );
};