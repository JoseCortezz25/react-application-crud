import react, {Component} from 'react';
import Tarea from './tarea';
import '../estilos/Tareas.css'

class Tareas extends Component {
    render() {
        return this.props.tareas.map(tarea => <Tarea tarea={tarea} key={tarea.id} borrarTarea={this.props.borrarTarea} marcarHecho={this.props.marcarHecho}/>)    }
}

export default Tareas
