import React from 'react';
import { Button, TableColumn, TableLine } from './styles';

interface Movimentcao {
    id: number;
    id_conteiner: number;
    tipo_movimentacao: string;
    dataHora_Inicio: string;
    dataHora_Fim: string;

}
type Props = {
    item: Movimentcao;
    handleEdit: (id: number) => void;
    handleDelete: (id: number) => void;
}

export function TableItemMovimentacao({ item, handleEdit, handleDelete }: Props){
    const dataInicio = new Date(item.dataHora_Inicio).toLocaleDateString();
    const horaInicio = new Date(item.dataHora_Inicio).toLocaleTimeString(); 
    const dataFim = new Date(item.dataHora_Fim).toLocaleDateString();
    const horaFim = new Date(item.dataHora_Fim).toLocaleTimeString();

    return (
        <TableLine>
            <TableColumn>{item.id}</TableColumn>
            <TableColumn>{item.id_conteiner}</TableColumn>
            <TableColumn>{item.tipo_movimentacao}</TableColumn>
            <TableColumn>{dataInicio} {horaInicio}</TableColumn>
            <TableColumn>{dataFim} {horaFim}</TableColumn> 
            <TableColumn> <Button onClick={() => handleEdit(item.id)}>Editar</Button></TableColumn>
            <TableColumn> <Button onClick={() => handleDelete(item.id)}>Excluir</Button></TableColumn>
        </TableLine>
    );
}