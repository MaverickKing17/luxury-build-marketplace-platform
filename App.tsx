import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Footer } from './components/Footer';
import { DashboardView } from './components/views/DashboardView';
import { UploadView } from './components/views/UploadView';
import { ProcessingView } from './components/views/ProcessingView';
import { ReviewView } from './components/views/ReviewView';
import { CheckoutView } from './components/views/CheckoutView';
import { FlowStep, AppView } from './types';
import { HardHat } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('Dashboard');
  const [currentStep, setCurrentStep] = useState<FlowStep>(FlowStep.UPLOAD);

  const renderProjectFlow = () => {
    switch (currentStep) {
      case FlowStep.UPLOAD:
        return <UploadView onComplete={() => setCurrentStep(FlowStep.PROCESSING)} />;
      case FlowStep.PROCESSING:
        return <ProcessingView onComplete={() => setCurrentStep(FlowStep.REVIEW)} />;
      case FlowStep.REVIEW:
        return <ReviewView onProceed={() => setCurrentStep(FlowStep.CHECKOUT)} />;
      case FlowStep.CHECKOUT:
        return <CheckoutView />;
      default:
        return <UploadView onComplete={() => setCurrentStep(FlowStep.PROCESSING)} />;
    }
  };

  const renderContent = () => {
    if (currentView === 'Dashboard') {
      return <DashboardView />;
    }
    if (currentView === 'Projects') {
      return renderProjectFlow();
    }
    
    // Placeholder for other modules to demonstrate navigation
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-12rem)] animate-fade-in">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6 border border-slate-200 shadow-sm">
          <HardHat className="w-12 h-12 text-slate-400" />
        </div>
        <h2 className="text-3xl font-serif text-brand-dark mb-3">{currentView} Module</h2>
        <p className="text-slate-500 max-w-md text-center">
          This enterprise module is currently under active development. Please return to the <strong>Dashboard</strong> or <strong>Projects</strong> tab to view the live procurement workflow.
        </p>
        <button 
          onClick={() => setCurrentView('Projects')}
          className="mt-8 px-8 py-3 bg-brand-dark text-white font-medium rounded shadow-lg shadow-brand-dark/20 hover:bg-slate-800 transition-colors"
        >
          View Active Projects
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      <div className="flex-1 ml-64 flex flex-col min-h-screen bg-[#F8F9FA]">
        <TopBar />
        <main className="flex-1 overflow-x-hidden">
          {renderContent()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;