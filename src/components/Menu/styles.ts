import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
    display: flex;  
`;

export const MenuItens = styled.nav`
    height: 100vh;
    width: 20vw;   
    background-color:#5D8DF5 ;
`;

export const ItemMenu = styled.div`
    margin: 15px;
    font-size: 18px; 
    color:#FEFEFE;     
`;

export const LinkItem = styled(Link)`
    text-decoration: none; 
    font-size: 18px; 
    color:#FEFEFE; 
    margin-left: 20px;
    :hover {
     background-color:#5D8DF0 ;
        padding: 0 10px;   
    } 
`;


