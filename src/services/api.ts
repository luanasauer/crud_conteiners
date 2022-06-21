import qs from "qs";
const BASEAPI = 'http://localhost:3005';

interface ConteinerProps {
    cliente: number;
    numero_conteiner: string;
    tipo: number;
    status: string;
    categoria: string;
}

interface MovimentacaoProps {
    id_conteiner: number;
    tipo_movimentacao: string;
    dataHora_Inicio: string;
    dataHora_Fim: string;

}

const apiFetchGet = async (endpoint: string, body: {} = []) => {
    const res = await fetch(`${BASEAPI + endpoint}?${qs.stringify(body)}`);
    const json = await res.json();
    return json;
}

const apiFetchPost = async (endpoint: string, body: {} = []) => {
    const res = await fetch(BASEAPI + endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });    
      const json = await res.json();   
      return json;
}
const apiFetchPut = async (endpoint: string, body: {} = []) => {
    const res = await fetch(BASEAPI + endpoint, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });    
      const json = await res.json();   
      return json;
}
const apiFetchDelete = async (endpoint: string, body: {} = []) => {
    const res = await fetch(BASEAPI + endpoint, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });    
      const json = await res.json();   
      return json;
}

export const api = {

    getConteiners: async () => {
        const json = await apiFetchGet(
            '/conteiner'
        );
        return json.conteiners;
    },
    getConteiner: async (id: string) => {
        const json = await apiFetchGet(
            `/conteiner/${id}`
        );
        return json.conteiner;
    },
    addConteiner: async (data: ConteinerProps) => {
        const json = await apiFetchPost(
            `/conteiner`,
            data
        );
        return json;
    },
    updateConteiner: async (id: string, data: ConteinerProps) => {
        const json = await apiFetchPut(
            `/conteiner/${id}`,
            data
        );
        return json;
    },
    deleteConteiner: async (id: string) => {
        const json = await apiFetchDelete(
            `/conteiner`,
            {id}
        );
        return json;
    },

    getMovimentacoes: async () => {
        const json = await apiFetchGet(
            '/movimentacao'
        );
        return json.movimentacoes;
    },
    getMovimentacao: async (id: string) => {
        const json = await apiFetchGet(
            `/movimentacao/${id}`
        );
        return json.movimentacao;
    },
    addMovimentacao: async (data: MovimentacaoProps) => {
        const json = await apiFetchPost(
            `/movimentacao`,
            data
        );
        return json;
    },
    updateMovimentacao: async (id: string, data: MovimentacaoProps) => {
        const json = await apiFetchPut(
            `/movimentacao/${id}`,
            data
        );
        return json;
    },
    deleteMovimentacao: async (id: string) => {
        const json = await apiFetchDelete(
            `/movimentacao`,
            {id}
        );
        return json;
    },



}