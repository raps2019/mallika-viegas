import React, { useEffect, useState } from 'react';

const ViewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ width, height }}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = () => {
  const { width, height } = React.useContext(ViewportContext);

  return { width, height };
};

export default ViewportProvider;
