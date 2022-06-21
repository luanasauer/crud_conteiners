import { Route, Routes } from 'react-router-dom';
import { Conteiner } from '../../pages/Conteiner';
import { Home } from '../../pages/Home';
import { Movimentacoes } from '../../pages/Movimentacoes';
import { Pages } from './styles';


export function Content() {
    return (
        <Pages>
            <Routes>
                <Route path='/conteiners' element={<Conteiner />} />
                <Route path='/movimentacoes' element={<Movimentacoes />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </Pages>
    )
}