import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import tareas from './Ejemplos/tareas.json';
import Tareas from './componentes/tareas';
import FormularioTareas from './componentes/FormularioTareas';
console.log(tareas);

class App extends Component {

  state = {
    tareas: tareas
  }

  agregarTarea = (titulo, descripcion) => {
    console.log(titulo, descripcion)
    const nuevaTarea = {
      titulo: titulo,
      descripcion: descripcion,
      id: 40
    }
    console.log(nuevaTarea)
    this.setState({
      tareas: [...this.state.tareas, nuevaTarea]
    })
  }

  borrarTarea = (id) => {
    const nuevasTareas = this.state.tareas.filter(tarea => tarea.id !== id);
    console.log(nuevasTareas);
    this.setState({tareas:nuevasTareas})
  }

  marcarHecho = (id) =>{
    const nuevasTareas =this.state.tareas.map(tarea =>{
      if(tarea.id === id){
        tarea.estado = !tarea.estado
      }
      return tarea;
    });
    this.setState({tareas: nuevasTareas})
  }


  render() {
    return <div>
      <FormularioTareas agregarTarea={this.agregarTarea} />
      <Tareas marcarHecho={this.marcarHecho} borrarTarea={this.borrarTarea} tareas={this.state.tareas} />
    </div>
  }
}

export default App;
