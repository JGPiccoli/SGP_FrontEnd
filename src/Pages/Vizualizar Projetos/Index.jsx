import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../Components/Container";
import Header from "../../Components/Header";
import { FaWpforms } from "react-icons/fa";
import PageContentContainer from "../../Components/ContentContainer";
import './style.css';

const VisualizarProjetos = () => {
  const navigate = useNavigate();
  const [projetos, setProjetos] = useState([]);
  const [tarefas, setTarefas] = useState({}); // Estado para armazenar tarefas de cada projeto

  const fetchProjetos = async () => {
    try {
      const response = await axios.get("https://localhost:7272/api/Projeto/Projetos");
      setProjetos(response.data);
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
    }
  };

  useEffect(() => {
    fetchProjetos();
  }, []);

  const handleEdit = (projectId) => {
    navigate(`/EditarProjeto/${projectId}`);
  };

  const handleBack = () => {
    navigate("/"); // Volta para a página anterior
  };

  // Função para adicionar uma nova tarefa ao projeto específico
  const handleAddTarefa = (projectId) => {
    const novaTarefa = tarefas[projectId]?.novaTarefa.trim();
    if (novaTarefa) {
      setTarefas((prevTarefas) => ({
        ...prevTarefas,
        [projectId]: {
          ...prevTarefas[projectId],
          tarefas: [...(prevTarefas[projectId]?.tarefas || []), novaTarefa],
          novaTarefa: "", // Limpa o campo de entrada após adicionar
        },
      }));
    }
  };

  // Função para lidar com a mudança no campo de tarefa
  const handleChangeTarefa = (e, projectId) => {
    const { value } = e.target;
    setTarefas((prevTarefas) => ({
      ...prevTarefas,
      [projectId]: {
        ...prevTarefas[projectId],
        novaTarefa: value,
      },
    }));
  };

  // Função para excluir o projeto
  const handleDelete = async (projectId) => {
    const confirmDelete = window.confirm("Você tem certeza que deseja excluir este projeto?");
    if (confirmDelete) {
      try {
        await axios.delete(`https://localhost:7272/api/Projeto/${projectId}`);
        // Atualiza a lista de projetos após a exclusão
        setProjetos((prevProjetos) => prevProjetos.filter((projeto) => projeto.project_id !== projectId));
        alert("Projeto excluído com sucesso!");
      } catch (error) {
        console.error("Erro ao excluir projeto:", error);
        alert("Erro ao excluir o projeto. Tente novamente.");
      }
    }
  };

  return (
    <PageContainer>
      <Header icon={<FaWpforms />} title="Projetos Criados" />
      <PageContentContainer>
        <div className="project-list">
          {projetos.length > 0 ? (
            projetos.map((projeto) => (
              <div key={projeto.project_id} className="project-item">
                <h3>{projeto.nomeProj}</h3>
                <p>{projeto.descricao}</p>
                <p>Data de Entrega: {new Date(projeto.entrega).toLocaleDateString()}</p>

                <div className="tarefas-container">
                  <h4>Tarefas:</h4>
                  <ul>
                    {(tarefas[projeto.project_id]?.tarefas || []).map((tarefa, index) => (
                      <li key={index}>{tarefa}</li>
                    ))}
                  </ul>
                  <div className="tarefa-input">
                    <input
                      type="text"
                      value={tarefas[projeto.project_id]?.novaTarefa || ""}
                      onChange={(e) => handleChangeTarefa(e, projeto.project_id)}
                      placeholder="Digite uma nova tarefa..."
                    />
                    <button
                      onClick={() => handleAddTarefa(projeto.project_id)}
                      className="button-tarefa"
                    >
                      Adicionar Tarefa
                    </button>
                  </div>
                </div>

                <div className="project-actions">
                  <button onClick={() => handleEdit(projeto.project_id)} className="button-action">
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(projeto.project_id)}
                    className="button-action"
                  >
                    Apagar
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Nenhum projeto encontrado.</p>
          )}
        </div>

        <div className="button-container">
          <button onClick={handleBack} className="button">
            Voltar
          </button>
        </div>
      </PageContentContainer>
    </PageContainer>
  );
};

export default VisualizarProjetos;
