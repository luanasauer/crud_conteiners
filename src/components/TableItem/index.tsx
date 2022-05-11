import React from 'react';
import { clientes } from '../../utils/clienteData';
import { Button, TableColumn, TableLine } from './styles';
 
interface Conteiner {
    id: number;
    cliente: number;
    numero_conteiner: string;    
    tipo: number;
    status: string;
    categoria: string;
}
type Props = {
    item: Conteiner
    handleEdit: (id: number) => void;
    handleDelete: (id: number) => void;
}

export function TableItem({ item, handleEdit, handleDelete }: Props){
    const cliente = clientes.find(cliente => cliente.id === item.cliente);

  return (
    <TableLine> 
    <TableColumn>{item.cliente}-{cliente?.nome}</TableColumn>
    <TableColumn>{item.numero_conteiner}</TableColumn>
    <TableColumn>{item.tipo}</TableColumn>
    <TableColumn>{item.status}</TableColumn>
    <TableColumn>{item.categoria}</TableColumn>
    <TableColumn> <Button onClick={() => handleEdit(item.id)}>Editar</Button></TableColumn>
    <TableColumn> <Button onClick={() => handleDelete(item.id)}>Excluir</Button></TableColumn>
</TableLine>
  );
}