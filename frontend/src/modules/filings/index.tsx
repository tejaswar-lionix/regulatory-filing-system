import React, {useState} from 'react';
export const FilingsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>FILINGS - Filings - 10-K, 10-Q, 8-K, S-1, deadline</h2><p>10-K</p></div>
};
export default FilingsView;
