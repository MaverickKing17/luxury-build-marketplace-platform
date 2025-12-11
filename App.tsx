import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { UploadView } from './components/views/UploadView';
import { ProcessingView } from './components/views/ProcessingView';
import { ReviewView } from './components/views/ReviewView';
import { CheckoutView } from './components/views/CheckoutView';
import { FlowStep } from './types';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<FlowStep>(FlowStep.UPLOAD);

  const renderCurrentView = () => {
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

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <TopBar />
        <main className="flex-1 overflow-x-hidden">
          {renderCurrentView()}
        </main>
      </div>
    </div>
  );
};

export default App;