import React, { useState } from 'react';
import { Table, BarChart3, PieChart, LineChart, Info, BookOpen, CheckCircle, AlertTriangle, ArrowRight, ChevronDown, ChevronUp, AreaChart, Cylinder, Triangle } from 'lucide-react';

interface Props {
  onComplete: () => void;
}

function Presentation({ onComplete }: Props) {
  const [showAnswers, setShowAnswers] = useState<{[key: string]: boolean}>({
    answer1: false,
    answer2: false
  });

  const toggleAnswer = (key: string) => {
    setShowAnswers(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Title and Duration */}
      <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-indigo-600">
        <div className="flex items-center gap-4 mb-6">
          <BookOpen className="h-12 w-12 text-indigo-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Tipos de Representación de Datos</h1>
            <p className="text-gray-600">Duración: 15 minutos</p>
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          Objetivo: Introducir conceptos, características y ejemplos de tablas y gráficos.
        </p>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h3 className="font-semibold text-indigo-800 mb-2">En esta presentación aprenderás:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-center gap-2 text-indigo-700">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Diferentes tipos de representaciones
            </li>
            <li className="flex items-center gap-2 text-indigo-700">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Cuándo usar cada tipo
            </li>
            <li className="flex items-center gap-2 text-indigo-700">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Ejemplos prácticos
            </li>
            <li className="flex items-center gap-2 text-indigo-700">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Ejercicios guiados
            </li>
          </ul>
        </div>
      </div>

      {/* Introduction */}
      <section className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Info className="h-8 w-8 text-blue-600" />
          Introducción a la Representación de Datos
        </h2>
        <div className="space-y-6">
          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              La representación de datos es fundamental en nuestra era digital. Nos permite transformar
              números y datos abstractos en formatos visuales comprensibles, facilitando la toma de
              decisiones y la comunicación de información compleja.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Importancia</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-blue-700">
                  <ArrowRight className="h-4 w-4" />
                  Facilita la comprensión de datos complejos
                </li>
                <li className="flex items-center gap-2 text-blue-700">
                  <ArrowRight className="h-4 w-4" />
                  Permite identificar patrones y tendencias
                </li>
                <li className="flex items-center gap-2 text-blue-700">
                  <ArrowRight className="h-4 w-4" />
                  Mejora la toma de decisiones
                </li>
                <li className="flex items-center gap-2 text-blue-700">
                  <ArrowRight className="h-4 w-4" />
                  Comunica información de manera efectiva
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">Ejemplos del Mundo Real</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-blue-700">
                  <ArrowRight className="h-4 w-4" />
                  Reportes financieros empresariales
                </li>
                <li className="flex items-center gap-2 text-blue-700">
                  <ArrowRight className="h-4 w-4" />
                  Estadísticas deportivas
                </li>
                <li className="flex items-center gap-2 text-blue-700">
                  <ArrowRight className="h-4 w-4" />
                  Pronósticos del clima
                </li>
                <li className="flex items-center gap-2 text-blue-700">
                  <ArrowRight className="h-4 w-4" />
                  Resultados de encuestas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* New section: Introduction to Charts */}
      <section className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Info className="h-12 w-12 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Introducción a los Gráficos</h2>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              Los gráficos son una de las herramientas más potentes y útiles en la visualización de datos. 
              No son más que una forma gráfica de representar los datos de una hoja de cálculo o tabla. 
              Los gráficos se vinculan a los datos a partir de los que se crean y se actualizan automáticamente 
              cuando se cambian éstos.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-3">Consejos para Crear Gráficos Efectivos</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-blue-700">
                <CheckCircle className="h-4 w-4" />
                Selecciona el tipo de gráfico adecuado para tus datos
              </li>
              <li className="flex items-center gap-2 text-blue-700">
                <CheckCircle className="h-4 w-4" />
                Mantén el diseño simple y evita elementos decorativos innecesarios
              </li>
              <li className="flex items-center gap-2 text-blue-700">
                <CheckCircle className="h-4 w-4" />
                Usa colores que contrasten bien y sean accesibles
              </li>
              <li className="flex items-center gap-2 text-blue-700">
                <CheckCircle className="h-4 w-4" />
                Incluye títulos descriptivos y etiquetas claras
              </li>
              <li className="flex items-center gap-2 text-blue-700">
                <CheckCircle className="h-4 w-4" />
                <span>
                  Para mantener la proporción al cambiar el tamaño, mantén pulsada la tecla Mayús durante el arrastre
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Resumen de Tipos de Gráficos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-5 w-5 text-purple-600" />
                  <h4 className="font-medium text-gray-800">Columnas</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Para mostrar cambios en datos a lo largo del tiempo
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="h-5 w-5 text-purple-600 transform rotate-90" />
                  <h4 className="font-medium text-gray-800">Barras</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Para comparar varios elementos individuales
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <LineChart className="h-5 w-5 text-red-600" />
                  <h4 className="font-medium text-gray-800">Líneas</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Para mostrar tendencias en datos a intervalos idénticos
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <PieChart className="h-5 w-5 text-orange-600" />
                  <h4 className="font-medium text-gray-800">Circulares</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Para mostrar proporciones de un todo
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <AreaChart className="h-5 w-5 text-teal-600" />
                  <h4 className="font-medium text-gray-800">Área</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Para destacar magnitud de cambios en el tiempo
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Cylinder className="h-5 w-5 text-amber-600" />
                  <h4 className="font-medium text-gray-800">Cono, Cilindro, Pirámide</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Para mejorar presentación de gráficos en 3D
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tables */}
      <section className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-600">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Table className="h-12 w-12 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800">Tablas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Características Principales</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Organización en filas y columnas
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Ideal para datos precisos
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Facilita comparaciones directas
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Perfecta para grandes conjuntos de datos
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Cuándo Usar Tablas</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <ArrowRight className="h-4 w-4 text-green-500" />
                  Necesitas mostrar valores exactos
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <ArrowRight className="h-4 w-4 text-green-500" />
                  Tienes múltiples variables
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <ArrowRight className="h-4 w-4 text-green-500" />
                  Requieres búsqueda rápida de datos
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <ArrowRight className="h-4 w-4 text-green-500" />
                  Necesitas mostrar detalles específicos
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Ejemplo: Calificaciones del Semestre</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-green-50">
                    <th className="px-6 py-3 border-b text-left font-semibold text-green-800">Estudiante</th>
                    <th className="px-6 py-3 border-b text-left font-semibold text-green-800">Matemáticas</th>
                    <th className="px-6 py-3 border-b text-left font-semibold text-green-800">Ciencias</th>
                    <th className="px-6 py-3 border-b text-left font-semibold text-green-800">Historia</th>
                    <th className="px-6 py-3 border-b text-left font-semibold text-green-800">Promedio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b">Ana García</td>
                    <td className="px-6 py-4 border-b">95</td>
                    <td className="px-6 py-4 border-b">88</td>
                    <td className="px-6 py-4 border-b">92</td>
                    <td className="px-6 py-4 border-b font-semibold">91.7</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b">Juan Pérez</td>
                    <td className="px-6 py-4 border-b">87</td>
                    <td className="px-6 py-4 border-b">92</td>
                    <td className="px-6 py-4 border-b">85</td>
                    <td className="px-6 py-4 border-b font-semibold">88.0</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b">María López</td>
                    <td className="px-6 py-4 border-b">91</td>
                    <td className="px-6 py-4 border-b">95</td>
                    <td className="px-6 py-4 border-b">89</td>
                    <td className="px-6 py-4 border-b font-semibold">91.7</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Ventajas y Desventajas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-green-700 mb-2">Ventajas</h4>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    Precisión en los datos
                  </li>
                  <li className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    Fácil de actualizar
                  </li>
                  <li className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-4 w-4" />
                    Ordenamiento flexible
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-red-700 mb-2">Desventajas</h4>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2 text-red-600">
                    <AlertTriangle className="h-4 w-4" />
                    Difícil ver tendencias
                  </li>
                  <li className="flex items-center gap-2 text-red-600">
                    <AlertTriangle className="h-4 w-4" />
                    Puede ser abrumador
                  </li>
                  <li className="flex items-center gap-2 text-red-600">
                    <AlertTriangle className="h-4 w-4" />
                    Menos visual
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bar Charts */}
      <section className="bg-white p-8 rounded-lg shadow-md border-l-4 border-purple-600">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <BarChart3 className="h-12 w-12 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-800">Gráficos de Barras</h2>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              Los gráficos de barras son una herramienta poderosa para comparar cantidades entre diferentes
              categorías. Cada barra representa una categoría, y su altura o longitud representa el valor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Tipos de Gráficos de Barras</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-purple-700">
                  <ArrowRight className="h-4 w-4" />
                  Verticales (columnas)
                </li>
                <li className="flex items-center gap-2 text-purple-700">
                  <ArrowRight className="h-4 w-4" />
                  Horizontales
                </li>
                <li className="flex items-center gap-2 text-purple-700">
                  <ArrowRight className="h-4 w-4" />
                  Agrupados
                </li>
                <li className="flex items-center gap-2 text-purple-700">
                  <ArrowRight className="h-4 w-4" />
                  Apilados
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Cuándo Usar</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-purple-700">
                  <CheckCircle className="h-4 w-4" />
                  Comparar cantidades entre categorías
                </li>
                <li className="flex items-center gap-2 text-purple-700">
                  <CheckCircle className="h-4 w-4" />
                  Mostrar rankings o clasificaciones
                </li>
                <li className="flex items-center gap-2 text-purple-700">
                  <CheckCircle className="h-4 w-4" />
                  Visualizar distribuciones
                </li>
                <li className="flex items-center gap-2 text-purple-700">
                  <CheckCircle className="h-4 w-4" />
                  Analizar tendencias por categoría
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Ejemplo: Ventas Mensuales por Producto</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-24 text-sm">Laptops</span>
                <div className="h-8 bg-purple-500 rounded" style={{ width: '80%' }}></div>
                <span className="ml-2 text-sm">80 unidades</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 text-sm">Tablets</span>
                <div className="h-8 bg-purple-500 rounded" style={{ width: '60%' }}></div>
                <span className="ml-2 text-sm">60 unidades</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 text-sm">Teléfonos</span>
                <div className="h-8 bg-purple-500 rounded" style={{ width: '100%' }}></div>
                <span className="ml-2 text-sm">100 unidades</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 text-sm">Accesorios</span>
                <div className="h-8 bg-purple-500 rounded" style={{ width: '40%' }}></div>
                <span className="ml-2 text-sm">40 unidades</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pie Charts */}
      <section className="bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-600">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <PieChart className="h-12 w-12 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-800">Gráficos Circulares</h2>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              Los gráficos circulares, también conocidos como gráficos de pastel, son ideales para mostrar
              cómo diferentes partes contribuyen a un todo. Cada sección representa una proporción del total.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-3">Características Clave</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-orange-700">
                  <CheckCircle className="h-4 w-4" />
                  Muestra proporciones del total
                </li>
                <li className="flex items-center gap-2 text-orange-700">
                  <CheckCircle className="h-4 w-4" />
                  Suma siempre es 100%
                </li>
                <li className="flex items-center gap-2 text-orange-700">
                  <CheckCircle className="h-4 w-4" />
                  Visual e intuitivo
                </li>
                <li className="flex items-center gap-2 text-orange-700">
                  <CheckCircle className="h-4 w-4" />
                  Ideal para 4-8 categorías
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="font-semibold text-orange-800 mb-3">Mejores Usos</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-orange-700">
                  <ArrowRight className="h-4 w-4" />
                  Distribución de presupuesto
                </li>
                <li className="flex items-center gap-2 text-orange-700">
                  <ArrowRight className="h-4 w-4" />
                  Composición de mercado
                </li>
                <li className="flex items-center gap-2 text-orange-700">
                  <ArrowRight className="h-4 w-4" />
                  Demografía
                </li>
                <li className="flex items-center gap-2 text-orange-700">
                  <ArrowRight className="h-4 w-4" />
                  Distribución de recursos
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Ejemplo: Diagrama de Recepcion de turistas</h3>
            <div className="flex justify-center">
              <img
                src="https://userscontent2.emaze.com/images/f820fa40-79ef-477d-84ec-7211cb20a716/74f88316-fc48-4525-975a-1c7b9da69382.png"
                alt="Ejemplo de Gráfico Circular"
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Line Charts */}
      <section className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-600">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <LineChart className="h-12 w-12 text-red-600" />
            <h2 className="text-2xl font-bold text-gray-800">Gráficos de Líneas</h2>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              Los gráficos de líneas son perfectos para mostrar tendencias y cambios a lo largo del tiempo.
              Conectan puntos de datos secuenciales para visualizar patrones y progresiones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-3">Aplicaciones Comunes</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-red-700">
                  <ArrowRight className="h-4 w-4" />
                  Tendencias de ventas
                </li>
                <li className="flex items-center gap-2 text-red-700">
                  <ArrowRight className="h-4 w-4" />
                  Cambios de temperatura
                </li>
                <li className="flex items-center gap-2 text-red-700">
                  <ArrowRight className="h-4 w-4" />
                  Crecimiento poblacional
                </li>
                <li className="flex items-center gap-2 text-red-700">
                  <ArrowRight className="h-4 w-4" />
                  Rendimiento histórico
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-3">Ventajas</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-red-700">
                  <CheckCircle className="h-4 w-4" />
                  Muestra tendencias claramente
                </li>
                <li className="flex items-center gap-2 text-red-700">
                  <CheckCircle className="h-4 w-4" />
                  Ideal para datos continuos
                </li>
                <li className="flex items-center gap-2 text-red-700">
                  <CheckCircle className="h-4 w-4" />
                  Fácil comparación temporal
                </li>
                <li className="flex items-center gap-2 text-red-700">
                  <CheckCircle className="h-4 w-4" />
                  Visualiza múltiples series
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Ejemplo: Temperaturas Semanales</h3>
            <div className="flex justify-center">
              <img
                src="https://www.blinklearning.com/useruploads/ctx/a/60446620/r/s/15473220/Imagen12.6.jpg?idcurso=880569"
                alt="Ejemplo de Gráfico de Líneas"
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Area Charts */}
      <section className="bg-white p-8 rounded-lg shadow-md border-l-4 border-teal-600">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <AreaChart className="h-12 w-12 text-teal-600" />
            <h2 className="text-2xl font-bold text-gray-800">Gráficos de Área</h2>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              Los gráficos de área se utilizan para destacar la magnitud de los cambios en el transcurso del tiempo. 
              Al presentar la suma de los valores trazados, un gráfico de área también muestra la relación de las partes con un todo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="font-semibold text-teal-800 mb-3">Características Principales</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-teal-700">
                  <CheckCircle className="h-4 w-4" />
                  Destaca cambios a lo largo del tiempo
                </li>
                <li className="flex items-center gap-2 text-teal-700">
                  <CheckCircle className="h-4 w-4" />
                  Muestra la relación de partes con un todo
                </li>
                <li className="flex items-center gap-2 text-teal-700">
                  <CheckCircle className="h-4 w-4" />
                  Visualiza acumulaciones y tendencias
                </li>
                <li className="flex items-center gap-2 text-teal-700">
                  <CheckCircle className="h-4 w-4" />
                  Ideal para datos continuos y secuenciales
                </li>
              </ul>
            </div>

            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="font-semibold text-teal-800 mb-3">Mejores Usos</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-teal-700">
                  <ArrowRight className="h-4 w-4" />
                  Evolución de ventas por categoría
                </li>
                <li className="flex items-center gap-2 text-teal-700">
                  <ArrowRight className="h-4 w-4" />
                  Distribución de presupuesto a lo largo del tiempo
                </li>
                <li className="flex items-center gap-2 text-teal-700">
                  <ArrowRight className="h-4 w-4" />
                  Consumo de recursos acumulados
                </li>
                <li className="flex items-center gap-2 text-teal-700">
                  <ArrowRight className="h-4 w-4" />
                  Comparación de tendencias entre grupos
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Ejemplo: Ventas Trimestrales por Departamento</h3>
            <div className="flex justify-center">
              <img
                src="https://support.content.office.net/es-es/media/d7a75b19-fb1a-41d1-9e3a-3d6f8c7cea43.gif"
                alt="Ejemplo de Gráfico de Área"
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cone, Cylinder and Pyramid Charts */}
      <section className="bg-white p-8 rounded-lg shadow-md border-l-4 border-amber-600">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Cylinder className="h-12 w-12 text-amber-600" />
            <h2 className="text-2xl font-bold text-gray-800">Gráficos de Cono, Cilindro y Pirámide</h2>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">
              Los gráficos de datos en forma de cono, cilindro y pirámide son ideales para realzar y mejorar 
              la presentación de gráficos de columnas y barras en 3D, añadiendo un elemento visual atractivo 
              que puede hacer que los datos sean más memorables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-3">Tipos y Características</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-amber-700">
                  <Triangle className="h-4 w-4" />
                  <span className="font-medium">Cono:</span> Ideal para destacar valores máximos
                </li>
                <li className="flex items-center gap-2 text-amber-700">
                  <Cylinder className="h-4 w-4" />
                  <span className="font-medium">Cilindro:</span> Perfecto para datos uniformes
                </li>
                <li className="flex items-center gap-2 text-amber-700">
                  <Triangle className="h-4 w-4 transform rotate-180" />
                  <span className="font-medium">Pirámide:</span> Útil para estructuras jerárquicas
                </li>
                <li className="flex items-center gap-2 text-amber-700">
                  <CheckCircle className="h-4 w-4" />
                  Todos añaden dimensión visual a los datos
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="font-semibold text-amber-800 mb-3">Cuándo Utilizarlos</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-amber-700">
                  <ArrowRight className="h-4 w-4" />
                  Presentaciones ejecutivas
                </li>
                <li className="flex items-center gap-2 text-amber-700">
                  <ArrowRight className="h-4 w-4" />
                  Informes de marketing
                </li>
                <li className="flex items-center gap-2 text-amber-700">
                  <ArrowRight className="h-4 w-4" />
                  Comparativas de rendimiento
                </li>
                <li className="flex items-center gap-2 text-amber-700">
                  <ArrowRight className="h-4 w-4" />
                  Cuando se necesita un impacto visual fuerte
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Ejemplo: Comparativa de Ventas por Región</h3>
            <div className="flex justify-center">
              <img
                src="https://support.content.office.net/es-es/media/b7668209-0018-4ff6-8345-a036d7e5fef8.png"
                alt="Ejemplo de Gráficos de Cono, Cilindro y Pirámide"
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guided Exercise */}
      <section className="bg-white p-8 rounded-lg shadow-md border-l-4 border-indigo-600">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Ejercicio Guiado</h2>
        <div className="space-y-8">
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="font-semibold text-indigo-800 mb-4">Caso de Estudio: Biblioteca Escolar</h3>
            <p className="text-indigo-700 mb-4">
              Analicemos los datos de libros leídos por estudiantes durante el último mes y
              determinemos la mejor forma de representarlos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Datos: Libros Leídos por Estudiantes</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 mb-6">
                <thead>
                  <tr className="bg-indigo-50">
                    <th className="px-4 py-2 border-b text-indigo-800">Estudiante</th>
                    <th className="px-4 py-2 border-b text-indigo-800">Libros Leídos</th>
                    <th className="px-4 py-2 border-b text-indigo-800">Género Preferido</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border-b">Ana</td>
                    <td className="px-4 py-2 border-b">5</td>
                    <td className="px-4 py-2 border-b">Fantasía</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Juan</td>
                    <td className="px-4 py-2 border-b">3</td>
                    <td className="px-4 py-2 border-b">Ciencia</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">María</td>
                    <td className="px-4 py-2 border-b">7</td>
                    <td className="px-4 py-2 border-b">Aventura</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b">Luis</td>
                    <td className="px-4 py-2 border-b">2</td>
                    <td className="px-4 py-2 border-b">Misterio</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-4">Representación en Gráfico de Barras</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="w-20">Ana</span>
                <div className="h-8 bg-indigo-500 rounded" style={{ width: '50%' }}></div>
                <span className="ml-2">5 libros</span>
              </div>
              <div className="flex items-center">
                <span className="w-20">Juan</span>
                <div className="h-8 bg-indigo-500 rounded" style={{ width: '30%' }}></div>
                <span className="ml-2">3 libros</span>
              </div>
              <div className="flex items-center">
                <span className="w-20">María</span>
                <div className="h-8 bg-indigo-500 rounded" style={{ width: '70%' }}></div>
                <span className="ml-2">7 libros</span>
              </div>
              <div className="flex items-center">
                <span className="w-20">Luis</span>
                <div className="h-8 bg-indigo-500 rounded" style={{ width: '20%' }}></div>
                <span className="ml-2">2 libros</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Análisis de la Tabla</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="h-4 w-4" />
                  Muestra datos exactos
                </li>
                <li className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="h-4 w-4" />
                  Incluye información adicional
                </li>
                <li className="flex items-center gap-2 text-green-700">
                  <CheckCircle className="h-4 w-4" />
                  Fácil de actualizar
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-3">Análisis del Gráfico</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-purple-700">
                  <CheckCircle className="h-4 w-4" />
                  Visual y comparativo
                </li>
                <li className="flex items-center gap-2 text-purple-700">
                  <CheckCircle className="h-4 w-4" />
                  Muestra diferencias claramente
                </li>
                <li className="flex items-center gap-2 text-purple-700">
                  <CheckCircle className="h-4 w-4" />
                  Ideal para presentaciones
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="font-semibold text-indigo-800 mb-3">Preguntas de Reflexión</h3>
            <div className="space-y-4">
              <div>
                <button 
                  onClick={() => toggleAnswer('answer1')}
                  className="w-full text-left flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <p className="text-indigo-700 font-medium">
                    ¿Por qué un gráfico de barras es mejor que un gráfico circular en este caso?
                  </p>
                  {showAnswers.answer1 ? (
                    <ChevronUp className="h-5 w-5 text-indigo-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-indigo-600" />
                  )}
                </button>
                {showAnswers.answer1 && (
                  <div className="mt-2 p-3 bg-white rounded-lg text-indigo-600">
                    El gráfico de barras permite comparar fácilmente las cantidades entre estudiantes,
                    mientras que un gráfico circular se centraría en proporciones que no son tan relevantes
                    para este análisis.
                  </div>
                )}
              </div>
              <div>
                <button 
                  onClick={() => toggleAnswer('answer2')}
                  className="w-full text-left flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <p className="text-indigo-700 font-medium">
                    ¿Cuándo sería útil usar la tabla en lugar del gráfico?
                  </p>
                  {showAnswers.answer2 ? (
                    <ChevronUp className="h-5 w-5 text-indigo-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-indigo-600" />
                  )}
                </button>
                {showAnswers.answer2 && (
                  <div className="mt-2 p-3 bg-white rounded-lg text-indigo-600">
                    La tabla es más útil cuando necesitamos ver los valores exactos y la información
                    adicional como el género preferido de libros, que no se muestra en el gráfico.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <button
          onClick={onComplete}
          className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition text-lg shadow-lg hover:shadow-xl"
        >
          Continuar al Cuestionario Final
        </button>
      </div>
    </div>
  );
}

export default Presentation;