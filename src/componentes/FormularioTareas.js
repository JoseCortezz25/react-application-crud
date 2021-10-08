import React, { Component } from 'react';

class FormularioTareas extends Component {
    state = {
        titulo: '',
        descripcion: ''
    }

    onSubmit = (e) => {
        console.log('Enviando');
        e.preventDefault();
        console.log(this.state);
        this.props.agregarTarea(this.state.titulo, this.state.descripcion);
    }

    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input value={this.state.titulo} name="titulo" type="text" placeholder="Escribe una tarea" onChange={this.onChange} />
                <br />
                <br />
                <textarea value={this.state.descripcion} name="descripcion" onChange={this.onChange} placeholder="Escriba descripcion de la tarea" />
                <button type="submit">Enviar</button>
            </form>
        )
    }
}

export default FormularioTareas;
