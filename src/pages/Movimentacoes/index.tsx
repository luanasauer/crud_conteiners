import React, { useEffect, useState } from 'react';
import { TableItemMovimentacao } from '../../components/TableItemMovimentacao';
import { api } from '../../services/api';

import {
  Button,
  Container, Input, InputLabel, InputTitle, Select, Table, TableHeadColumn, Title
} from './styles';

interface MovimentacaoProps {
  id: number;
  id_conteiner: number;
  tipo_movimentacao: string;
  dataHora_Inicio: string;
  dataHora_Fim: string;
}

interface ConteinerProps {
  id: number;
  cliente: number;
  numero_conteiner: string;
  tipo: number;
  status: string;
  categoria: string;
}

export function Movimentacoes() {

  const [listMovimentacoes, setListMovimentacoes] = useState<MovimentacaoProps[]>([]);
  const [listConteiner, setListConteiner] = useState<ConteinerProps[]>([]);

  const [idConteiner, setIdConteiner] = useState(0);
  const [tipoMovimentacao, setTipoMovimentacao] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [horaInicio, setHoraInicio] = useState('');

  const [dataFim, setDataFim] = useState('');
  const [horaFim, setHoraFim] = useState('');

  const [isEditing, setIsEditing] = useState(false);
  const [idEditable, setIdEditable] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    getMovimentacoes();
    getConteiners();
  }, []);

  const getMovimentacoes = async () => {
    const movimentacoes = await api.getMovimentacoes();
    setListMovimentacoes(movimentacoes);
  }

  const getConteiners = async () => {
    const conteiners = await api.getConteiners();
    setListConteiner(conteiners);
  }

  const clearFields = () => {
    setIdConteiner(0);
    setTipoMovimentacao('');
    setIsEditing(false);
  }

  const handleAddMovimentacao = async () => {

    var myDateIni = `${dataInicio} ${horaInicio}:00`;
    var myDateFim = `${dataFim} ${horaFim}:00`;

    const data = {
      id_conteiner: idConteiner,
      tipo_movimentacao: tipoMovimentacao,
      dataHora_Inicio: myDateIni,
      dataHora_Fim: myDateFim,
    };

    const json = await api.addMovimentacao(data);

    if (json.error) {
      setError(json.error);
      alert(json.error);
    } else {
      getMovimentacoes();
      clearFields()
    }
  }

  async function handleEdit(movimentacaoId: number) {

    var dia = '';
    var mes = '';
    var ano = '';

    setIsEditing(true);
    const movimentacao: MovimentacaoProps = await api.getMovimentacao(movimentacaoId.toString());
    dia = new Date(movimentacao.dataHora_Inicio).toLocaleDateString().slice(0, 2);
    mes = new Date(movimentacao.dataHora_Inicio).toLocaleDateString().slice(3, 5);
    ano = new Date(movimentacao.dataHora_Inicio).toLocaleDateString().slice(6, 10);
    const dataInicioEditable = `${ano}-${mes}-${dia}`;
    const horaInicioEditable = new Date(movimentacao.dataHora_Inicio).toLocaleTimeString();

    dia = new Date(movimentacao.dataHora_Fim).toLocaleDateString().slice(0, 2);
    mes = new Date(movimentacao.dataHora_Fim).toLocaleDateString().slice(3, 5);
    ano = new Date(movimentacao.dataHora_Fim).toLocaleDateString().slice(6, 10);
    const dataFimEditable = `${ano}-${mes}-${dia}`;
    const horaFimEditable = new Date(movimentacao.dataHora_Fim).toLocaleTimeString();

    setIdEditable(movimentacao.id.toString());
    setIdConteiner(movimentacao.id_conteiner);
    setTipoMovimentacao(movimentacao.tipo_movimentacao);
    setDataInicio(dataInicioEditable);
    setHoraInicio(horaInicioEditable);
    setDataFim(dataFimEditable);
    setHoraFim(horaFimEditable);
  }

  async function handleEditMovimentacao() {

    var myDateIni = `${dataInicio} ${horaInicio}:00`;
    var myDateFim = `${dataFim} ${horaFim}:00`;

    const data = {
      id_conteiner: idConteiner,
      tipo_movimentacao: tipoMovimentacao,
      dataHora_Inicio: myDateIni,
      dataHora_Fim: myDateFim,
    };
    const json = await api.updateMovimentacao(idEditable, data);

    if (json.error) {
      setError(json.error);
      alert(json.error);
    } else {
      getConteiners();
      setIdEditable('0');
      clearFields();
      setIsEditing(false);
    }
  }

  async function handleRemove(movimentacaoId: number) {
    if (window.confirm('Tem certeza que deseja excluir a movimentação?')) {
      const json = await api.deleteMovimentacao(movimentacaoId.toString());
      if (json.error) {
        setError(json.error);
        alert(json.error);

      } else {
        getMovimentacoes();
      }
    }
  }

  return (
    <>
      <Title>Movimentações</Title>
      <Container>
        <InputLabel>
          <InputTitle>Conteiner</InputTitle>

          <Select value={idConteiner} onChange={(e) => setIdConteiner(Number((e.target.value)))}>
            <>
              <option>Selecione</option>
              {listConteiner.map((conteiner, index) => (
                <option value={conteiner.id}>{conteiner.numero_conteiner}</option>
              ))}
            </>
          </Select>
        </InputLabel>
        <InputLabel>
          <InputTitle>Tipo</InputTitle>
          <Select value={tipoMovimentacao} onChange={(e) => setTipoMovimentacao((e.target.value))}>
            <>
              <option>Selecione</option>
              <option value="embarque">Embarque</option>
              <option value="descarga">Descarga</option>
              <option value="gate in">Gate in</option>
              <option value="gate out">Gate out</option>
              <option value="reposicionamento">Reposicionamento</option>
              <option value="pesagem">Pesagem</option>
              <option value="scanner">Scanner</option>
            </>
          </Select>
        </InputLabel>

        <InputLabel>
          <InputTitle>Data Inicio</InputTitle>
          <Input type="date" value={dataInicio} onChange={e => setDataInicio(e.target.value)} />
        </InputLabel>
        <InputLabel>
          <InputTitle>Hora Inicio</InputTitle>
          <Input type="time" value={horaInicio} onChange={e => setHoraInicio(e.target.value)} />
        </InputLabel>


        <InputLabel>
          <InputTitle>Data Fim</InputTitle>
          <Input type="date" value={dataFim} onChange={e => setDataFim(e.target.value)} />
        </InputLabel>
        <InputLabel>
          <InputTitle>Data Fim</InputTitle>
          <Input type="time" value={horaFim} onChange={e => setHoraFim(e.target.value)} />
        </InputLabel>
        <InputLabel>
          <InputTitle>&nbsp;</InputTitle>

          {isEditing &&
            <Button onClick={handleEditMovimentacao}>Salvar</Button>
          }
          {!isEditing &&
            <Button onClick={handleAddMovimentacao}>Adicionar</Button>
          }
        </InputLabel>
      </Container>

      <Table>
        <thead>
          <tr>
            <TableHeadColumn>Id Movimentacao</TableHeadColumn>
            <TableHeadColumn>Conteiner</TableHeadColumn>
            <TableHeadColumn>Tipo</TableHeadColumn>
            <TableHeadColumn>Data Inicio</TableHeadColumn>
            <TableHeadColumn>Data Fim</TableHeadColumn>
            <TableHeadColumn>Editar</TableHeadColumn>
            <TableHeadColumn>Excluir</TableHeadColumn>
          </tr>
        </thead>
        <tbody>
          {listMovimentacoes.map((item, index) => (
            <TableItemMovimentacao
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