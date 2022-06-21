import { AiOutlineContainer } from "react-icons/ai";
import { ImMoveUp } from "react-icons/im";

import {
    Container,
    ItemMenu,
    LinkItem,
    MenuItens
} from './styles';

export function Menu() {
    return (
        <Container>
            <MenuItens>
                <ItemMenu>  Menu  </ItemMenu>
                <ItemMenu>
                    <AiOutlineContainer />
                    <LinkItem to="/conteiners">
                        Conteiner
                    </LinkItem>
                </ItemMenu>
                <ItemMenu>
                    <ImMoveUp />
                    <LinkItem to="/movimentacoes" >
                        Movimentações
                    </LinkItem>
                </ItemMenu>
            </MenuItens>
        </Container>
    );
}