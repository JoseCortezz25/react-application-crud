import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tarea extends Component {
    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.tarea.estado ? 'gray' : 'black',
            textDecoration: this.props.tarea.estado ? 'line-through' : 'none'
        }
    }

    render() {
        const btnDelete = {
            fontSize: '18px',
            background: '#ea2027',
            color: '#fff',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '50%',
            cursor: 'pointer',
        }

        return <div style={this.StyleCompleted()}>
            {this.props.tarea.titulo} -
            {this.props.tarea.descripcion} -
            {this.props.tarea.estado} -
            {this.props.tarea.id}
            <input type="checkbox" onChange={this.props.marcarHecho.bind(this, this.props.tarea.id)}></input>
            <button style={btnDelete} onClick={this.props.borrarTarea.bind(this, this.props.tarea.id)}>x</button>
        </div>
    }
}

Tarea.propTypes = {
    tarea: PropTypes.object.isRequired
}

export default Tarea;
