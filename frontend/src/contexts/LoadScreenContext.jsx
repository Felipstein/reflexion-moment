import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const LoadScreenContext = createContext();

export default function LoadScreenProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [whatIsLoading, setWhatIsLoading] = useState(null);

  async function handleSetIsLoading(newState) {
    setIsLoading(newState);
  }

  const loadingManager = useMemo(() => ({
    isLoading,
    setIsLoading: handleSetIsLoading,
    whatIsLoading,
    setWhatIsLoading,
  }), [isLoading]);

  return (
    <LoadScreenContext.Provider value={loadingManager}>
      {children}
    </LoadScreenContext.Provider>
  );
}

LoadScreenProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
