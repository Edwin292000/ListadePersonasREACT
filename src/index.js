import React from "react";
import ReactDOM from "react-dom";

let Persona = (props) => {
  return (
    <li>
      <span>Nombre: {props.persona.Nombre} </span>
      <span>Edad: {props.persona.Edad} </span>
      <span>Genero: {props.persona.Genero} </span>
      <button onClick={props.onBorrar}>Borrar</button>
      <button onClick={props.onCargar}>Borrar</button>
    </li>
  );
};

let id = 0;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      personas: []
    };
  }

  agregarPersona() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let genero = document.getElementById("genero").value;
    console.log(nombre);
    this.setState({
      personas: [
        ...this.state.personas,
        {
          id: id++,
          Nombre: nombre,
          Edad: edad,
          Genero: genero
        }
      ]
    });
  }

  borrarPersona(id) {
    this.setState({
      personas: this.state.personas.filter((t) => t.id !== id)
    });
    console.log(id);
  }

  cargarPersona(id) {
    this.setState({
      tareas: this.state.tareas.map((t) => {
        if (t.id === id)
          return { id: t.id, texto: t.texto, checkeado: !t.checkeado };
        else return t;
      })
    });
  }

  render() {
    return (
      <div>
        <label>Nombre:</label>
        <input type="text" id="nombre" />
        <br />
        <label>Edad:</label>
        <input type="number" id="edad" />
        <br />
        <label>Genero:</label>
        <input type="text" id="genero" />
        <div>Tareas: </div>
        <div>Pendientes: </div>
        <button onClick={() => this.agregarPersona()}>Agregar</button>
        <ul>
          {this.state.personas.map((p) => (
            <Persona
              persona={p}
              onBorrar={() => this.borrarPersona(p.id)}
              onCargar={() => this.cargarPersona(p.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
