import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

export const LoadScreenContext = createContext();

export default function LoadScreenProvider({ children }) {
  const [loadingStages, setLoadingStages] = useState([]);

  const startLoadingStage = useCallback(({ stage, message }) => {
    if (loadingStages.some((loadingStage) => loadingStage.stage === stage)) {
      setLoadingStages((prevState) => (
        prevState.filter((loadingStage) => loadingStage.stage !== stage)
      ));
    }

    setLoadingStages((prevState) => [
      ...prevState,
      { stage, message },
    ]);
  }, [setLoadingStages]);

  const stopLoadingStage = useCallback((stage) => {
    setLoadingStages((prevState) => (
      prevState.filter((loadingStage) => loadingStage.stage !== stage)
    ));
  }, [setLoadingStages]);

  const getLoadingStageMessage = useCallback((stage) => {
    const loadingStage = loadingStages.filter((loadingStageObj) => loadingStageObj.stage === stage);

    return loadingStage?.message;
  }, [loadingStages]);

  const getFirstLoadingStageMessage = useCallback(() => loadingStages[0]?.message, [loadingStages]);

  const isLoading = useMemo(() => loadingStages.length > 0, [loadingStages]);

  const loadingManager = useMemo(() => ({
    isLoading,
    startLoadingStage,
    stopLoadingStage,
    getLoadingStageMessage,
    getFirstLoadingStageMessage,
  }), [isLoading,
    startLoadingStage,
    stopLoadingStage,
    getLoadingStageMessage,
    getFirstLoadingStageMessage,
  ]);

  return (
    <LoadScreenContext.Provider value={loadingManager}>
      {children}
    </LoadScreenContext.Provider>
  );
}

LoadScreenProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
