import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import PageContainer from "../../Components/Container";
import Header from "../../Components/Header";
import { FaWpforms } from "react-icons/fa";
import PageContentContainer from "../../Components/ContentContainer";

const EditarProjeto = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [formulario, setFormulario] = useState({
    project_id: 0,
    nomeProj: "",
    descricao: "",
    entrega: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchProjeto = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7272/api/Projeto/${projectId}`
      );
      const projeto = response.data;

      setFormulario({
        project_id: projeto.project_id,
        nomeProj: projeto.nomeProj,
        descricao: projeto.descricao,
        entrega: projeto.entrega.split("T")[0],
      });
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao buscar projeto:", error);
      alert("Erro ao carregar o projeto.");
      navigate(-1);
    }
  };

  useEffect(() => {
    fetchProjeto();
  }, [projectId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const entregaFormatada = new Date(formulario.entrega).toISOString();

    const projetoData = {
      project_id: formulario.project_id,
      nomeProj: formulario.nomeProj,
      descricao: formulario.descricao,
      entrega: entregaFormatada,
    };

    try {
      await axios.put(
        `https://localhost:7272/api/Projeto/Update/${projectId}`,
        projetoData
      );

      alert("Projeto atualizado com sucesso!");
      navigate("/VizualizarProjetos");
    } catch (error) {
      console.error("Erro ao atualizar projeto:", error);
      alert("Erro ao atualizar o projeto.");
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return (
      <PageContainer>
        <Header icon={<FaWpforms />} title="Editar Projeto" />
        <PageContentContainer>
          <p>Carregando...</p>
        </PageContentContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header icon={<FaWpforms />} title="Editar Projeto" />
      <PageContentContainer>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome do Projeto</label>
            <input
              type="text"
              name="nomeProj"
              value={formulario.nomeProj}
              onChange={handleChange}
              required
              className="input"
              placeholder="Digite o nome do projeto..."
            />
          </div>
          <div className="form-group">
            <label>Descrição</label>
            <textarea
              name="descricao"
              value={formulario.descricao}
              onChange={handleChange}
              required
              className="input"
              placeholder="Digite a descrição do projeto..."
            />
          </div>
          <div className="form-group">
            <label>Data de Entrega</label>
            <input
              type="date"
              name="entrega"
              value={formulario.entrega}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
          <div className="button-container">
            <button type="button" onClick={handleBack} className="button">
              Voltar
            </button>
            <button type="submit" className="button">
              Salvar
            </button>
          </div>
        </form>
      </PageContentContainer>
    </PageContainer>
  );
};

export default EditarProjeto;
