import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const nombre = event.target.nombre.value;
    alert(`Hola, ${nombre}!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-800">Formulario de saludo</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Tu comentario:</span>
            <input
              type="text"
              name="nombre"
              className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Enviar
          </button>
        </form>
        <div className="mt-6 text-center">
          <img src="https://placebear.com/200/200" alt="Un oso decorativo" className="mx-auto rounded-full shadow-md" />
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
