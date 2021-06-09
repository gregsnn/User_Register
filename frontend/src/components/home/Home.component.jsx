import React from 'react'
import { Main } from '../index'

const Home = props =>
    <Main icon="home" title="Início" subtitle="Segundo projeto do capítulo de React">
        <div className="display">
            <h1 className="display__title">Bem Vindo!</h1>

            <p className="display__text">Sistema para exemplificar a construção de um cadastro, desenvolvido em ReactJS</p>
        </div>
    </Main>

export { Home }
