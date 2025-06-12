import React, {useState} from 'react';
export const ApiView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>API - API - REST for filings, XBRL, validation</h2><p>POST filing</p></div>
};
export default ApiView;
