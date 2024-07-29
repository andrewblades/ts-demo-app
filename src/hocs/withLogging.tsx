import React from 'react';

function withLogging<P extends object>(WrappedComponent: React.ComponentType<P>) {
  const ComponentWithLogging: React.FC<P> = (props) => {
    console.log('Rendering', WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };

  ComponentWithLogging.displayName = `WithLogging(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return ComponentWithLogging;
}

export default withLogging;