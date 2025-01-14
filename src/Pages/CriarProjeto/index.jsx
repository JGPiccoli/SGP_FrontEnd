import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../Components/Container";
import Header from "../../Components/Header";
import { FaWpforms } from "react-icons/fa";
import PageContentContainer from "../../Components/ContentContainer";

const CriarProjeto = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const [formulario, setFormulario] = useState({
    project_id: 0,
    nomeProj: "",
    descricao: "",
    entrega: "",
  });

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
      const response = await axios.post(
        "https://localhost:7272/api/Projeto/Post",
        projetoData
      );

      console.log("Resposta da API:", response);

      setFormulario({
        project_id: 0,
        nomeProj: "",
        descricao: "",
        entrega: "",
      });

      alert("Projeto cadastrado com sucesso!");
      navigate(`/`);
    } catch (error) {
      console.error("Erro ao salvar projeto:", error);

      alert("Erro ao cadastrar o projeto. Verifique o console para mais detalhes.");
    }
  };

  return (
    <PageContainer>
      <Header icon={<FaWpforms />} title="Criar Projeto" />
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
              Avançar
            </button>
          </div>
        </form>
      </PageContentContainer>
    </PageContainer>
  );
};

export default CriarProjeto;
