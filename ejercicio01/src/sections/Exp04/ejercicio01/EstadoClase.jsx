import React, { Component } from 'react';

class EstadoClase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center text-white">
        <h1 className="text-2xl mb-4">Contador (Clase): {this.state.contador}</h1>
        <button
          onClick={this.incrementar}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Incrementar
        </button>
      </div>
    );
  }
}

export default EstadoClase;
