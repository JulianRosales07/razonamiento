import React, { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface Props {
  onComplete: () => void;
}

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    id: 1,
    text: "¿Qué representación de datos organiza la información en filas y columnas para mostrar valores exactos?",
    options: ["Gráfico de barras", "Gráfico circular", "Tabla"],
    correctAnswer: 2
  },
  {
    id: 2,
    text: "¿Cuál representación muestra proporciones de un todo, como la distribución de un presupuesto?",
    options: ["Tabla", "Gráfico circular", "Gráfico de líneas"],
    correctAnswer: 1
  },
  {
    id: 3,
    text: "¿Qué representación usa barras para comparar datos categóricos, como las ventas de diferentes productos?",
    options: ["Gráfico de líneas", "Gráfico de barras", "Gráfico circular"],
    correctAnswer: 1
  }
];

function InitialQuiz({ onComplete }: Props) {
  const [currentAnswers, setCurrentAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...currentAnswers];
    newAnswers[questionIndex] = answerIndex;
    setCurrentAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (currentAnswers.length !== questions.length) {
      alert('Por favor responde todas las preguntas');
      return;
    }

    const newScore = questions.reduce((acc, question, index) => {
      return acc + (question.correctAnswer === currentAnswers[index] ? 1 : 0);
    }, 0);

    setScore(newScore);
    setShowResults(true);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Actividad de Conocimientos Previos</h2>
        <p className="text-gray-600 mb-2">Tiempo estimado: 5 minutos</p>
        <p className="text-gray-600 mb-4">Objetivo: Activar los conocimientos previos de los estudiantes sobre representaciones de datos.</p>
        
        <div className="bg-indigo-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-indigo-800 mb-2">Instrucciones:</h3>
          <ul className="list-disc list-inside text-indigo-700 space-y-2">
            <li>Formar parejas dentro del grupo</li>
            <li>Cada pareja recibe un cuestionario con 3 preguntas de opción múltiple</li>
            <li>Las parejas discuten y responden las preguntas en 3 minutos</li>
            <li>Calificación: 1 punto por cada respuesta correcta (3 puntos en total)</li>
          </ul>
        </div>
      </div>

      {questions.map((question, questionIndex) => (
        <div key={question.id} className="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">{question.text}</h3>
          <div className="space-y-3">
            {question.options.map((option, optionIndex) => (
              <label
                key={optionIndex}
                className={`flex items-center p-3 rounded-lg cursor-pointer transition
                  ${currentAnswers[questionIndex] === optionIndex
                    ? 'bg-indigo-100 border-indigo-300'
                    : 'bg-gray-50 hover:bg-gray-100'
                  }
                  ${showResults
                    ? optionIndex === question.correctAnswer
                      ? 'bg-green-100'
                      : currentAnswers[questionIndex] === optionIndex
                      ? 'bg-red-100'
                      : ''
                    : ''
                  }`}
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={optionIndex}
                  checked={currentAnswers[questionIndex] === optionIndex}
                  onChange={() => handleAnswer(questionIndex, optionIndex)}
                  disabled={showResults}
                  className="mr-3"
                />
                <span>{option}</span>
                {showResults && optionIndex === question.correctAnswer && (
                  <CheckCircle2 className="ml-auto h-5 w-5 text-green-500" />
                )}
                {showResults && currentAnswers[questionIndex] === optionIndex && optionIndex !== question.correctAnswer && (
                  <XCircle className="ml-auto h-5 w-5 text-red-500" />
                )}
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-8 flex justify-center">
        {!showResults ? (
          <button
            onClick={handleSubmit}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Enviar Respuestas
          </button>
        ) : (
          <div className="text-center">
            <p className="text-2xl font-bold mb-4">
              Puntuación: {score} de {questions.length}
            </p>
            <button
              onClick={onComplete}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Continuar a la Presentación
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default InitialQuiz;