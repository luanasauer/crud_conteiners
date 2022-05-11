import React, { useEffect, useState } from 'react';
import { TableItem } from '../../components/TableItem';
import { api } from '../../services/api';
import { clientes } from '../../utils/clienteData';

import {
  Button,
  Container, Input, InputLabel, InputTitle, Select, Table, TableHeadColumn, Title
} from './styles';

interface ConteinerProps {
  id: number;
  cliente: number;
  numero_conteiner: string;
  tipo: number;
  status: string;
  categoria: string;
}

export function Conteiner() {


  const [cliente, setCliente] = useState(0);
  const [numero_conteiner, setNumeroConteiner] = useState('');
  const [tipo, setTipo] = useState(0);
  const [status, setStatus] = useState('');
  const [categoria, setCategoria] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const [listConteiner, setListConteiner] = useState<ConteinerProps[]>([]);
  const [idEditable, setIdEditable] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getConteiners();
  }, []);

  const getConteiners = async () => {
    setLoading(true);
    const conteiners = await api.getConteiners();
    setLoading(false);
    setListConteiner(conteiners);
  }


  const handleAddConteiner = async () => {
    const numero_conteiner_validacao = numero_conteiner;
    var camposValidos = false;
    if (numero_conteiner_validacao.length === 11) {
      if ((numero_conteiner_validacao.slice(0, 4).match(/[A-Z]{4}/) != null)) {
        if ((numero_conteiner_validacao.slice(4, 11).match(/[0-9]{7}/) != null)) {
          var camposValidos = true;
        } else {
          alert('Os 7 ultimos dígitos do conteiner devem ser de 1-9');
        }
      } else {
        alert('Os 4 primeiros dígitos do conteiner devem ser de A-Z');
      }
    } else {
      alert('Numero do conteiner deve conter 11 caracteres');

    }

    if (camposValidos === true) {

      const data = {
        cliente,
        numero_conteiner,
        tipo,
        status,
        categoria,
      };
      const json = await api.addConteiner(data);
      if (json.error) {
        setError(json.error);
        alert(json.error);

      } else {
        getConteiners();
        clearFields()
      }
    }
  }

  async function handleEdit(conteinerId: number) {

    setIsEditing(true);

    const conteiner: ConteinerProps = await api.getConteiner(conteinerId.toString());
    setIdEditable(conteinerId.toString());
    setCliente(conteiner.cliente);
    setNumeroConteiner(conteiner.numero_conteiner);
    setTipo(conteiner.tipo);
    setStatus(conteiner.status);
    setCategoria(conteiner.categoria);
  }

  async function handleEditConteiner() {
    const data = {
      cliente,
      numero_conteiner,
      tipo,
      status,
      categoria,
    };
    const json = await api.updateConteiner(idEditable, data);


    if (json.error) {
      setError(json.error);
      alert(json.error);
    } else {
      getConteiners();
      setIdEditable('0');
      clearFields();
      setIsEditing(false);
    }

    function clearFields() {
      setCliente(0);
      setNumeroConteiner('');
      setTipo(0);
      setStatus('0');
      setCategoria('');
    }

  }

  async function handleRemove(conteinerId: number) {
    if (window.confirm('Tem certeza que deseja excluir este conteiner?')) {
      const json = await api.deleteConteiner(conteinerId.toString());
      if (json.error) {
        setError(json.error);
        alert(json.error);

      } else {
        getConteiners();
      }
    }
  }

  function clearFields() {
    setCliente(0);
    setNumeroConteiner('');
    setTipo(0);
    setStatus('0');
    setCategoria('');
  }

  return (

    <>

      <Title>Conteiners</Title>
      <Container>
        <InputLabel>
          <InputTitle>Cliente</InputTitle>

          <Select value={cliente} onChange={(e) => setCliente(Number((e.target.value)))}>
            <>
              <option>Selecione</option>
              {clientes.map((clientem, index) => (
                <option value={clientem.id}>{clientem.nome}</option>
              ))}
            </>
          </Select>
        </InputLabel>
        <InputLabel>
          <InputTitle>Número Conteiner</InputTitle>
          <Input
            type="text"
            value={numero_conteiner}
            onChange={(e) => setNumeroConteiner(e.target.value)} />
        </InputLabel>
        <InputLabel>
          <InputTitle>Tipo</InputTitle>
          <Select value={tipo} onChange={(e) => setTipo(Number((e.target.value)))}>
            <>
              <option>Selecione</option>
              <option value="20">20</option>
              <option value="40">40</option>
            </>
          </Select>
        </InputLabel>

        <InputLabel>
          <InputTitle>Status</InputTitle>
          <Select value={status} onChange={(e) => setStatus(e.target.value)}>
            <>
              <option>Selecione</option>
              <option value="cheio">cheio</option>
              <option value="vazio">vazio</option>
            </>
          </Select>
        </InputLabel>
        <InputLabel>
          <InputTitle>Categoria</InputTitle>

          <Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option>Selecione</option>
            <option value="importacao">importacao</option>
            <option value="exportacao">exportacao</option>
          </Select>
        </InputLabel>
        <InputLabel>
          <InputTitle>&nbsp;</InputTitle>

          {isEditing &&
            <Button onClick={handleEditConteiner}>Salvar</Button>
          }
          {!isEditing &&
            <Button onClick={handleAddConteiner}>Adicionar</Button>
          }
        </InputLabel>
      </Container>
      <Table>

        <thead>
          <tr>
            <TableHeadColumn>Cliente</TableHeadColumn>
            <TableHeadColumn>Numero Conteiner</TableHeadColumn>
            <TableHeadColumn>Tipo</TableHeadColumn>
            <TableHeadColumn>Status</TableHeadColumn>
            <TableHeadColumn>Categoria</TableHeadColumn>
            <TableHeadColumn>Editar</TableHeadColumn>
            <TableHeadColumn>Excluir</TableHeadColumn>
          </tr>
        </thead>
        <tbody>
          {listConteiner.map((item, index) => (
            <TableItem
              key={index}
              item={item}
              handleDelete={handleRemove}
              handleEdit={handleEdit}
            />
          ))}
        </tbody>
      </Table>

    </>
  );
}