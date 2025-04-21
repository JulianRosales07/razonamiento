import React, { useState } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';
import InitialQuiz from './components/InitialQuiz';
import Presentation from './components/Presentation';
import FinalQuiz from './components/FinalQuiz';

function App() {
  const [currentSection, setCurrentSection] = useState<'initial-quiz' | 'presentation' | 'final-quiz'>('initial-quiz');
  const [showNavigation, setShowNavigation] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleQuizComplete = () => {
    setShowNavigation(true);
    setCurrentSection('presentation');
  };

  const handlePresentationComplete = () => {
    setCurrentSection('final-quiz');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-4 md:py-6 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 md:h-8 md:w-8" />
              <h1 className="text-xl md:text-2xl font-bold">Representación de Datos</h1>
            </div>
            
            {/* Desktop Navigation */}
            {showNavigation && (
              <nav className="hidden md:flex gap-4">
                <button
                  onClick={() => setCurrentSection('initial-quiz')}
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition text-sm md:text-base ${
                    currentSection === 'initial-quiz'
                      ? 'bg-white text-indigo-600'
                      : 'text-white hover:bg-indigo-500'
                  }`}
                >
                  Cuestionario Inicial
                </button>
                <button
                  onClick={() => setCurrentSection('presentation')}
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition text-sm md:text-base ${
                    currentSection === 'presentation'
                      ? 'bg-white text-indigo-600'
                      : 'text-white hover:bg-indigo-500'
                  }`}
                >
                  Presentación
                </button>
                <button
                  onClick={() => setCurrentSection('final-quiz')}
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition text-sm md:text-base ${
                    currentSection === 'final-quiz'
                      ? 'bg-white text-indigo-600'
                      : 'text-white hover:bg-indigo-500'
                  }`}
                >
                  Cuestionario Final
                </button>
              </nav>
            )}
            
            {/* Mobile Menu Button */}
            {showNavigation && (
              <button 
                className="md:hidden text-white focus:outline-none"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            )}
          </div>
          
          {/* Mobile Navigation */}
          {showNavigation && mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-2 space-y-2">
              <button
                onClick={() => {
                  setCurrentSection('initial-quiz');
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition text-sm ${
                  currentSection === 'initial-quiz'
                    ? 'bg-white text-indigo-600'
                    : 'text-white hover:bg-indigo-500'
                }`}
              >
                Cuestionario Inicial
              </button>
              <button
                onClick={() => {
                  setCurrentSection('presentation');
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition text-sm ${
                  currentSection === 'presentation'
                    ? 'bg-white text-indigo-600'
                    : 'text-white hover:bg-indigo-500'
                }`}
              >
                Presentación
              </button>
              <button
                onClick={() => {
                  setCurrentSection('final-quiz');
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition text-sm ${
                  currentSection === 'final-quiz'
                    ? 'bg-white text-indigo-600'
                    : 'text-white hover:bg-indigo-500'
                }`}
              >
                Cuestionario Final
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {currentSection === 'initial-quiz' && (
          <InitialQuiz onComplete={handleQuizComplete} />
        )}
        {currentSection === 'presentation' && (
          <Presentation onComplete={handlePresentationComplete} />
        )}
        {currentSection === 'final-quiz' && (
          <FinalQuiz />
        )}
      </main>
    </div>
  );
}

export default App;
