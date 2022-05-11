import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
 display: flex;
`;

export const Pages = styled.div` 
    width: 80vw;
    padding: 10px;
`;

export const MenuItens = styled.nav`
    height: 100vh;
    width: 20vw;   
    border-radius: 5px; 
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
    border-radius: 5px;
    color:#FEFEFE; 
    margin-left: 20px;
    :hover {
     background-color: #1a83ff;
        padding: 0 50px;  
    }
`