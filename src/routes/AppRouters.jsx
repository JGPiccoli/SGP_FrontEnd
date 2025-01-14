import React from 'react'
import Home from '../Pages/Home'
import { Route, Routes } from 'react-router-dom'
import CriarProjeto from '../Pages/CriarProjeto'
import VisualizarProjetos from '../Pages/Vizualizar Projetos/Index'
import EditarProjeto from '../Pages/EditarProjetos/indes'

export default function AppRouters() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/CriarProjeto" element={<CriarProjeto/>}></Route>
        <Route path="/VizualizarProjetos"element={<VisualizarProjetos/>}></Route>
        <Route path="/Editarprojeto/:projectId" element={<EditarProjeto/>}></Route>
    </Routes>
  )
}
