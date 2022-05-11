import styled from "styled-components";


export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;
`;
export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.color};

`;

export const Value = styled.div<{ color: string }>`
  
    color: ${props => props.color};

`;

export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid #5D8DF5;
    border-radius: 5px;
    background-color: #5D8DF5;
    color: black;
    cursor: pointer;

    &:hover {
        background-color: blue;
        color: white;
    }
`; 
