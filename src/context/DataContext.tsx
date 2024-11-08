// import{ useState, useContext, useEffect, createContext } from 'react';
//
// const DataContext = createContext('');
//
// export const DataContextProvider = ({ children }) => {
//
//     const initialData = JSON.parse(localStorage.getItem('data')) || [];
//
//     const [data, setData] = useState(initialData);
//
//     useEffect(() => {
//         localStorage.setItem('data', JSON.stringify(data));
//     }, [data]);
//
//     return (
//         <DataContext.Provider value={{ data, setData }}>
//             {children}
//         </DataContext.Provider>
//     );
// }
//
// export const useData = () => useContext(DataContext)