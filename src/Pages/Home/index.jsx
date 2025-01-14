import React from "react";
import { Button, ButtonContainer,} from "./style";
import PageContainer from "../../Components/Container";
import Header from "../../Components/Header";
import PageContentContainer from "../../Components/ContentContainer";
import { CgHome } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <PageContainer>
      <Header icon={<CgHome/>} title="Menu principal"/>
      <PageContentContainer>
        <ButtonContainer>
          <Button onClick={() => navigate("/CriarProjeto")}>
            Criar Projeto
          </Button>
          <Button onClick={() => navigate("/VizualizarProjetos")}>
            Vizualizar Projetos
          </Button>
        </ButtonContainer>
      </PageContentContainer>
    </PageContainer>
  );
}
