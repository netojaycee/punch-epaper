import { useContext } from 'react';
import { HeaderContext } from './context';

const useHeader = () => {
  return useContext(HeaderContext);
};

export default useHeader;
