import { createContext } from 'react';

const SortRepositoriesContext = createContext();

export default SortRepositoriesContext;

// export const SortRepositoriesContextProvider = ({ children }) => {

//   return (
//     <SortRepositoriesContext.Provider value={{ state, dispatch }}>
//       {children}
//     </SortRepositoriesContext.Provider>
//   );
// };
