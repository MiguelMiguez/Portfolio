import { createContext, useContext } from 'react';
import data from '../json/main.json';

const DataContext = createContext();

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

export const DataProvider = ({ children }) => {
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};
