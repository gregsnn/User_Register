import './_UserCrud.scss'
import React, { Component } from 'react'
import axios from 'axios'

import { Main } from '../index'

const headerProps = {
    icon: 'users',
    title: 'User',
    subtitle: 'Cadastro de usuários: Create, Read, Update and Delete'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

class UserCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() { // incluir = nao tem ID  /  alterar = tem ID
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    // formulário
    renderForm() {
        return (
            <div className="form">
                <div className="form__row">
                    <div className="form__col">
                        <div className="form__group">
                            <label className="name">
                                Nome:
                            </label>
                            <input type="text" className="form__group__control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite seu nome..."
                            />
                        </div>
                    </div>

                    <div className="form__col">
                        <div className="form__group">
                            <label className="email">
                                e-Mail:
                            </label>
                            <input type="text" className="form__group__control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite seu e-Mail..."
                            />
                        </div>
                    </div>
                </div>

                <div className="form__row">
                    <div className="form__col__btn">
                        <button className="btn btn__save"
                        onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn__cancel"
                        onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    // tabela
    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table>
                <thead >
                    <tr className="table__row" >
                        <th className="colspan-1">ID</th>
                        <th className="colspan-2">Name</th>
                        <th className="colspan-2">e-Mail</th>
                        <th className="colspan-3">Ações</th>
                    </tr>
                </thead>

                <tbody>
                    { this.renderRows() }
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td className="colspan-id"> { user.id } </td>
                    <td className="colspan-text"> { user.name } </td>
                    <td className="colspan-text"> { user.email } </td>

                    <td className="btn__table colspan-btn">
                        <button className="btn__table__edit"
                        onClick={() => this.load(user)}
                        >
                            <i className="fa fa-edit"></i>
                        </button>

                        <button className="btn__table__delete"
                        onClick={() => this.remove(user)}
                        >
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main { ...headerProps }>
                { this.renderForm() }
                <hr className="hr" />
                { this.renderTable() }
            </Main>
        )
    }
}

export { UserCrud }