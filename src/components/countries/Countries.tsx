import React from 'react';
import {Wrapper} from "./Countries.styles";

export const Countries = ({children}: any) => {


    return (
           <Wrapper>
               {children}
           </Wrapper>
    );
}