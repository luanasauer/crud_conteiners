import styled from 'styled-components';

export const Title = styled.h1`
  color:#5D8DF5 ;
  text-align: center;
`;

export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`; 

export const Container = styled.div`
 padding-bottom: 100px; 
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
`;

export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid #5D8DF5 ;
    border-radius: 5px;
`;

export const Select = styled.select`  
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid #5D8DF5 ;
    border-radius: 5px;
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

export const Table = styled.table`
    width: 100%;
    background-color: #FFF;
    padding: 20px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    margin-top: 20px;

`;
export const TableHeadColumn = styled.th`
    padding: 10px 0;
    text-align: left;

`;