import React, { createContext, useState, useContext } from 'react'


export const DataContext = createContext();

export const ContextProvider = ( {children} ) => {
    const [data, setData] = useState([]);
    const [updateTable, setUpdateTable] = useState(false)

  
  return (
      <DataContext.Provider 
          value={{
            data,
            updateTable,
            setUpdateTable
          }}
      >
            {children}
      </DataContext.Provider>
  )
}

export const ContextGlobal = () => {
  return useContext(DataContext);
};

export default DataContext;
