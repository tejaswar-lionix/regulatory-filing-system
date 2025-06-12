import React, {useState} from 'react';
export const TemplatesView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>TEMPLATES - Templates - 10-K/10-Q shells, styles</h2><p>10-K shell</p></div>
};
export default TemplatesView;
