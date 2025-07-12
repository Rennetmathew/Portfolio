import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Portfolio Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl font-bold mb-4 text-red-400">Portfolio Loading Error</h1>
            <p className="text-lg mb-6 text-white/80">
              Something went wrong while loading the portfolio. Please refresh the page or try again later.
            </p>
            <div className="bg-gray-900 p-4 rounded-lg text-left text-sm text-gray-300 mb-6">
              <strong>Error Details:</strong>
              <pre className="mt-2 whitespace-pre-wrap">
                {this.state.error?.toString()}
                {this.state.error?.stack}
              </pre>
            </div>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;