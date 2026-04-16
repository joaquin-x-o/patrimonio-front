import React from 'react';

export const Showcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Cabecera */}
        <div className="border-b pb-5">
          <h1 className="text-3xl font-bold text-gray-900">Design System - Showcase</h1>
          <p className="mt-2 text-gray-600">Catálogo de componentes construidos con Tailwind CSS puro para uso interno.</p>
        </div>

        {/* Sección: Botones */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Botones (Buttons)</h2>
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded transition-colors">
              Primario
            </button>
            <button className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded transition-colors">
              Secundario
            </button>
            <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded transition-colors">
              Peligro / Baja
            </button>
            <button className="px-4 py-2 bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium rounded transition-colors">
              Contorno
            </button>
          </div>
        </section>

        {/* Sección: Entradas de texto */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Campos de Entrada (Inputs)</h2>
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200 space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del producto</label>
              <input 
                type="text" 
                placeholder="Ej. Monitor Samsung" 
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Búsqueda rápida</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Buscar por código..." 
                  className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded transition-colors">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Sección: Tarjetas de Información */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Tarjetas (Cards)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Tarjeta de Dashboard (Métricas) */}
            <div className="p-6 bg-blue-700 text-white rounded-lg shadow-sm flex flex-col justify-between">
              <h3 className="text-sm font-semibold uppercase opacity-90">Total Productos</h3>
              <div className="mt-4 text-4xl font-bold">5.500</div>
            </div>

            {/* Tarjeta de Producto Básico */}
            <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Silla de oficina</h3>
                  <p className="text-sm text-gray-500">Mobiliario</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">Activo</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Cod: 1042</span>
                <button className="text-sm text-blue-700 hover:text-blue-800 font-medium">Ver detalles</button>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default Showcase;