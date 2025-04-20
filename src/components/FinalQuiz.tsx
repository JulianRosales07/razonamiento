import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, User, FileDown, BookOpen } from 'lucide-react';
import jsPDF from 'jspdf';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "Un profesor quiere mostrar las calificaciones exactas de 10 estudiantes. ¿Cuál es la mejor representación?",
    options: ["Gráfico circular", "Gráfico de líneas", "Tabla", "Gráfico de barras"],
    correctAnswer: 2,
    explanation: "La tabla es ideal para valores exactos"
  },
  {
    id: 2,
    text: "La siguiente tabla muestra ventas de frutas: Manzanas-20, Plátanos-15, Naranjas-10. ¿Qué mostraría un gráfico circular para los plátanos?",
    options: ["15%", "33%", "50%", "25%"],
    correctAnswer: 1,
    explanation: "15/45 ≈ 33%"
  },
  {
    id: 3,
    text: "Un gráfico de barras muestra las ventas de 3 productos. La barra del Producto A es el doble de larga que la del Producto B. ¿Qué significa esto?",
    options: [
      "El Producto A vendió el doble",
      "El Producto A es el doble de caro",
      "El Producto A se vendió durante el doble de tiempo",
      "El Producto A es el doble de popular"
    ],
    correctAnswer: 0,
    explanation: "La longitud de la barra representa la cantidad vendida"
  },
  {
    id: 4,
    text: "¿Cuál gráfico es mejor para mostrar los cambios de temperatura durante una semana?",
    options: ["Gráfico circular", "Gráfico de líneas", "Gráfico de barras", "Tabla"],
    correctAnswer: 1,
    explanation: "El gráfico de líneas muestra tendencias en el tiempo"
  },
  {
    id: 5,
    text: "Tienes datos sobre los pasatiempos favoritos de 50 estudiantes. ¿Cuál es mejor?",
    options: ["Gráfico de líneas", "Gráfico circular", "Gráfico de barras", "Gráfico de dispersión"],
    correctAnswer: 2,
    explanation: "El gráfico de barras es ideal para comparar categorías"
  },
  {
    id: 6,
    text: "¿Qué gráfico es mejor para mostrar la distribución porcentual de un presupuesto?",
    options: ["Gráfico de líneas", "Gráfico circular", "Gráfico de barras", "Tabla"],
    correctAnswer: 1,
    explanation: "El gráfico circular es ideal para porcentajes"
  },
  {
    id: 7,
    text: "Si tienes una gran cantidad de datos numéricos y deseas encontrar patrones, ¿qué deberías usar?",
    options: ["Gráfico circular", "Gráfico de dispersión", "Gráfico de barras", "Tabla"],
    correctAnswer: 1,
    explanation: "El gráfico de dispersión es útil para encontrar patrones entre dos variables"
  },
  {
    id: 8,
    text: "¿Cuál es la ventaja de usar un gráfico de líneas sobre una tabla para mostrar datos temporales?",
    options: ["Más colorido", "Más detallado", "Muestra la tendencia claramente", "Menos preciso"],
    correctAnswer: 2,
    explanation: "El gráfico de líneas muestra claramente las tendencias a lo largo del tiempo"
  },
  {
    id: 9,
    text: "¿Qué tipo de gráfico usarías para mostrar la frecuencia de diferentes calificaciones en un examen?",
    options: ["Gráfico de barras", "Gráfico de líneas", "Gráfico circular", "Gráfico de dispersión"],
    correctAnswer: 0,
    explanation: "El gráfico de barras es ideal para mostrar frecuencia por categorías"
  },
  {
    id: 10,
    text: "¿Qué gráfico es más útil para comparar la evolución de dos variables relacionadas?",
    options: ["Gráfico circular", "Gráfico de dispersión", "Gráfico de líneas", "Gráfico de barras"],
    correctAnswer: 2,
    explanation: "El gráfico de líneas permite comparar la evolución de dos variables a lo largo del tiempo"
  }
];

function FinalQuiz() {
  const [studentName, setStudentName] = useState('');
  const [currentAnswers, setCurrentAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(Array(questions.length).fill(false));

  // Add animation effect when component mounts
  useEffect(() => {
    document.querySelector('.quiz-container')?.classList.add('fade-in');
  }, []);

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...currentAnswers];
    newAnswers[questionIndex] = answerIndex;
    setCurrentAnswers(newAnswers);
    
    const newAnswered = [...answered];
    newAnswered[questionIndex] = true;
    setAnswered(newAnswered);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    if (!studentName.trim()) {
      alert('Por favor ingresa tu nombre');
      return;
    }

    if (answered.filter(a => a).length !== questions.length) {
      alert('Por favor responde todas las preguntas');
      return;
    }

    const newScore = questions.reduce((acc, question, index) => {
      return acc + (question.correctAnswer === currentAnswers[index] ? 1 : 0);
    }, 0);

    setScore(newScore);
    setShowResults(true);
    setShowModal(true);
  };

  const getFinalGrade = () => {
    return ((score / questions.length) * 5).toFixed(1);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const exportToPDF = () => {
    // Create new PDF document
    const doc = new jsPDF();
    
    // Add decorative elements - background pattern
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    
    // Add subtle background pattern
    doc.setDrawColor(230, 236, 245);
    doc.setLineWidth(0.1);
    for (let i = 0; i < pageHeight; i += 10) {
      doc.line(0, i, pageWidth, i);
    }
    
    // Add a colorful header with gradient-like effect
    doc.setFillColor(59, 130, 246); // Blue color
    doc.rect(0, 0, pageWidth, 40, 'F');
    doc.setFillColor(102, 126, 234); // Lighter purple
    doc.rect(0, 0, pageWidth, 25, 'F');
    
    // Add decorative element
    doc.setDrawColor(255, 255, 255);
    doc.setLineWidth(0.5);
    doc.line(10, 30, pageWidth - 10, 30);
    
    // Add title with shadow effect
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('Resultados del Cuestionario', 105, 18, { align: 'center' });
    
    // Add certificate-like decoration
    doc.setDrawColor(255, 255, 255);
    doc.setLineWidth(0.2);
    doc.circle(20, 20, 8);
    doc.circle(pageWidth - 20, 20, 8);
    
    // Add student info section with better styling
    doc.setTextColor(0, 0, 0);
    doc.setFillColor(240, 249, 255); // Light blue background
    doc.roundedRect(15, 50, pageWidth - 30, 50, 5, 5, 'F');
    doc.setDrawColor(59, 130, 246); // Blue border
    doc.setLineWidth(0.5);
    doc.roundedRect(15, 50, pageWidth - 30, 50, 5, 5, 'D');
    
    // Add decorative element to student info
    doc.setDrawColor(59, 130, 246);
    doc.setLineWidth(0.2);
    doc.line(25, 65, pageWidth - 25, 65);
    
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(59, 130, 246);
    doc.text('Información del Estudiante', 105, 60, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    doc.text(`Nombre: ${studentName}`, 25, 75);
    doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 25, 85);
    
    // Add score section with color based on performance and better styling
    const scorePercentage = (score / questions.length) * 100;
    let scoreColor, scoreLabel;
    
    if (scorePercentage >= 80) {
      scoreColor = [39, 174, 96]; // Green
      scoreLabel = "Excelente";
    } else if (scorePercentage >= 60) {
      scoreColor = [241, 196, 15]; // Yellow
      scoreLabel = "Bueno";
    } else {
      scoreColor = [231, 76, 60]; // Red
      scoreLabel = "Necesita mejorar";
    }
    
    // Score section with rounded corners
    doc.setFillColor(scoreColor[0], scoreColor[1], scoreColor[2], 0.1);
    doc.roundedRect(15, 110, pageWidth - 30, 60, 5, 5, 'F');
    doc.setDrawColor(scoreColor[0], scoreColor[1], scoreColor[2]);
    doc.setLineWidth(0.5);
    doc.roundedRect(15, 110, pageWidth - 30, 60, 5, 5, 'D');
    
    // Add decorative elements to score section
    doc.setDrawColor(scoreColor[0], scoreColor[1], scoreColor[2], 0.5);
    doc.setLineWidth(0.2);
    doc.line(25, 125, pageWidth - 25, 125);
    doc.line(25, 155, pageWidth - 25, 155);
    
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(scoreColor[0], scoreColor[1], scoreColor[2]);
    doc.text('Resultados', 105, 120, { align: 'center' });
    
    // Create visual score representation
    doc.setFillColor(scoreColor[0], scoreColor[1], scoreColor[2]);
    doc.roundedRect(25, 135, (pageWidth - 50) * (scorePercentage / 100), 10, 3, 3, 'F');
    doc.setDrawColor(100, 100, 100, 0.5);
    doc.setLineWidth(0.2);
    doc.roundedRect(25, 135, pageWidth - 50, 10, 3, 3, 'D');
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    doc.text(`Puntuación: ${score} de ${questions.length} preguntas correctas (${scorePercentage.toFixed(1)}%)`, 25, 130);
    
    doc.setTextColor(scoreColor[0], scoreColor[1], scoreColor[2]);
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(`Calificación final: ${getFinalGrade()}/5.0 - ${scoreLabel}`, 105, 160, { align: 'center' });
    
    // Add a summary of questions and answers with better styling
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Resumen de Respuestas', 105, 185, { align: 'center' });
    
    // Add decorative element
    doc.setDrawColor(100, 100, 100);
    doc.setLineWidth(0.2);
    doc.line(40, 190, pageWidth - 40, 190);
    
    let yPosition = 200;
    
    // Add each question with correct/incorrect indicator and better styling
    questions.forEach((question, index) => {
      // Check if we need a new page
      if (yPosition > 270) {
        doc.addPage();
        
        // Add subtle background pattern to new page
        doc.setDrawColor(230, 236, 245);
        doc.setLineWidth(0.1);
        for (let i = 0; i < pageHeight; i += 10) {
          doc.line(0, i, pageWidth, i);
        }
        
        // Add small header to new page
        doc.setFillColor(59, 130, 246, 0.8);
        doc.rect(0, 0, pageWidth, 15, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(10);
        doc.text('Resultados del Cuestionario - Continuación', 105, 10, { align: 'center' });
        
        yPosition = 25;
      }
      
      const isCorrect = currentAnswers[index] === question.correctAnswer;
      
      // Question box with improved styling
      doc.setFillColor(isCorrect ? 242 : 254, isCorrect ? 252 : 242, isCorrect ? 242 : 242);
      doc.roundedRect(15, yPosition - 8, pageWidth - 30, 30, 3, 3, 'F');
      doc.setDrawColor(isCorrect ? 39 : 231, isCorrect ? 174 : 76, isCorrect ? 96 : 60);
      doc.setLineWidth(0.5);
      doc.roundedRect(15, yPosition - 8, pageWidth - 30, 30, 3, 3, 'D');
      
      // Add "Pregunta X" label with better styling
      doc.setFillColor(isCorrect ? 39 : 231, isCorrect ? 174 : 76, isCorrect ? 96 : 60, 0.1);
      doc.roundedRect(20, yPosition - 5, 70, 8, 2, 2, 'F');
      
      // Question number and indicator
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(isCorrect ? 39 : 231, isCorrect ? 174 : 76, isCorrect ? 96 : 60);
      doc.text(`Pregunta ${index + 1}: ${isCorrect ? '✓' : '✗'}`, 25, yPosition);
      
      // Question text with better positioning
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'normal');
      const questionLines = doc.splitTextToSize(question.text, 160);
      doc.text(questionLines, 25, yPosition + 8);
      
      yPosition += (questionLines.length * 5) + 15;
      
      // Your answer with styled box
      doc.setFillColor(245, 245, 245);
      doc.roundedRect(25, yPosition - 5, pageWidth - 50, 10, 2, 2, 'F');
      
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(isCorrect ? 39 : 231, isCorrect ? 174 : 76, isCorrect ? 96 : 60);
      doc.text(`Tu respuesta: ${question.options[currentAnswers[index]]}`, 30, yPosition);
      
      yPosition += 12;
      
      // Correct answer if wrong with styled box
      if (!isCorrect) {
        doc.setFillColor(240, 255, 240);
        doc.roundedRect(25, yPosition - 5, pageWidth - 50, 10, 2, 2, 'F');
        
        doc.setTextColor(39, 174, 96);
        doc.text(`Respuesta correcta: ${question.options[question.correctAnswer]}`, 30, yPosition);
        yPosition += 12;
      }
      
      // Add explanation with styled box
      doc.setFillColor(240, 249, 255);
      doc.roundedRect(25, yPosition - 5, pageWidth - 50, 10, 2, 2, 'F');
      
      doc.setTextColor(70, 130, 180);
      doc.text(`Explicación: ${question.explanation}`, 30, yPosition);
      
      yPosition += 25;
    });
    
    // Add footer with page numbers and certificate-like border
    const totalPages = doc.internal.getNumberOfPages();
    
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      
      // Add decorative border
      doc.setDrawColor(59, 130, 246, 0.5);
      doc.setLineWidth(0.5);
      doc.rect(5, 5, pageWidth - 10, pageHeight - 10, 'D');
      
      // Add footer
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text(`Página ${i} de ${totalPages}`, 105, 290, { align: 'center' });
      doc.text(`Generado el ${new Date().toLocaleDateString()} - Cuestionario de Visualización de Datos`, 105, 295, { align: 'center' });
    }
    
    // Save the PDF
    doc.save(`resultado-${studentName.replace(/\s+/g, '-')}.pdf`);
  };

  return (
    <div className="quiz-container max-w-4xl mx-auto p-4 md:p-6 transition-all duration-500">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 md:p-6 rounded-t-xl shadow-lg">
        <h1 className="text-xl md:text-3xl font-bold text-center flex items-center justify-center">
          <BookOpen className="mr-2 h-6 w-6 md:h-8 md:w-8" />
          Cuestionario Final
        </h1>
      </div>
      
      <div className="bg-white rounded-b-xl shadow-lg p-4 md:p-6 border border-gray-200">
        {!showResults ? (
          <>
            <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <label className="block mb-2 font-semibold text-blue-800">Nombre del Estudiante:</label>
              <div className="flex items-center border rounded-lg overflow-hidden bg-white shadow-sm">
                <div className="bg-blue-100 p-3 border-r">
                  <User className="h-5 w-5 text-blue-500" />
                </div>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="flex-1 p-3 outline-none"
                  placeholder="Ingresa tu nombre completo"
                />
              </div>
            </div>

            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-700">Pregunta {currentQuestion + 1} de {questions.length}</h2>
              <div className="flex space-x-1">
                {questions.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`w-3 h-3 rounded-full ${
                      idx === currentQuestion 
                        ? 'bg-blue-600' 
                        : answered[idx] 
                          ? 'bg-green-500' 
                          : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentQuestion(idx)}
                  ></div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 md:p-6 shadow-md border border-gray-200 mb-6 transition-all duration-300 transform hover:shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">{questions[currentQuestion].id}. {questions[currentQuestion].text}</h3>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, optionIndex) => (
                  <div 
                    key={optionIndex}
                    onClick={() => handleAnswer(currentQuestion, optionIndex)}
                    className={`p-3 md:p-4 border rounded-lg cursor-pointer transition-all duration-200 transform hover:translate-x-1 ${
                      currentAnswers[currentQuestion] === optionIndex 
                        ? 'border-blue-500 bg-blue-50 shadow-md' 
                        : 'hover:bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center border ${
                        currentAnswers[currentQuestion] === optionIndex 
                          ? 'border-blue-500 bg-blue-500' 
                          : 'border-gray-300'
                      }`}>
                        {currentAnswers[currentQuestion] === optionIndex && 
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        }
                      </div>
                      <span className={`${currentAnswers[currentQuestion] === optionIndex ? 'font-medium' : ''}`}>
                        {option}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                className={`px-4 py-2 rounded-lg ${
                  currentQuestion === 0 
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Anterior
              </button>
              
              {currentQuestion < questions.length - 1 ? (
                <button
                  onClick={nextQuestion}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Siguiente
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition animate-pulse"
                >
                  Finalizar Cuestionario
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg p-4 md:p-6 transition-all duration-500 fade-in">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100 mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-blue-800">Resultados</h2>
              <div className="text-center mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                  <p className="text-gray-600">Estudiante</p>
                  <p className="font-semibold text-lg">{studentName}</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                  <p className="text-gray-600">Puntuación</p>
                  <p className={`font-semibold text-lg ${getScoreColor()}`}>{score} de {questions.length}</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200">
                  <p className="text-gray-600">Calificación</p>
                  <p className={`font-semibold text-lg ${getScoreColor()}`}>{getFinalGrade()}/5.0</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 mt-6">
              {questions.map((question, index) => (
                <div key={question.id} className="border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      {currentAnswers[index] === question.correctAnswer ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{question.id}. {question.text}</h3>
                      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-sm text-gray-500">Tu respuesta:</p>
                          <p className={`font-medium ${currentAnswers[index] === question.correctAnswer ? "text-green-600" : "text-red-600"}`}>
                            {question.options[currentAnswers[index]]}
                          </p>
                        </div>
                        {currentAnswers[index] !== question.correctAnswer && (
                          <div className="bg-green-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-500">Respuesta correcta:</p>
                            <p className="text-green-600 font-medium">{question.options[question.correctAnswer]}</p>
                          </div>
                        )}
                      </div>
                      <div className="mt-3 bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-500">Explicación:</p>
                        <p className="text-gray-700 italic">{question.explanation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {showResults && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={exportToPDF}
              className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition transform hover:scale-105"
            >
              <FileDown className="mr-2 h-5 w-5" />
              Exportar a PDF
            </button>
          </div>
        )}
      </div>

      <style>{`
        .fade-in {
          animation: fadeIn 0.8s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default FinalQuiz;
