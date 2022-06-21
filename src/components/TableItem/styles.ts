import styled from "styled-components";


export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0; 
`;

export const Button = styled.button` 
    width: 70%;
    height: 30px;
    border: 1px solid #5D8DF5;
    border-radius: 5px;
    background-color: #5D8DF5; 
    cursor: pointer; 
    
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: blue;
        color: white;
    }
`; 
