import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Conteiner } from '../../pages/Conteiner';
import { Home } from '../../pages/Home';
import { Movimentacoes } from '../../pages/Movimentacoes';

import {
    Container, ItemMenu, LinkItem, MenuItens, Pages
} from './styles';

export function Menu() {
    return (
        <Container>
            <BrowserRouter>
                <MenuItens>
                    <ItemMenu>  Menu  </ItemMenu>
                    <ItemMenu> <LinkItem to="/conteiners">Conteiner</LinkItem> </ItemMenu>
                    <ItemMenu> <LinkItem to="/movimentacoes" >Movimentações</LinkItem> </ItemMenu>
                </MenuItens>
                <Pages>
                    <Routes>
                        <Route path='/conteiners' element={<Conteiner />} />
                        <Route path='/movimentacoes' element={<Movimentacoes />} />
                        <Route path='/' element={<Home />} />
                    </Routes>
                </Pages>
            </BrowserRouter>
        </Container>
    );
}