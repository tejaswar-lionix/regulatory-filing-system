import React, {useState} from 'react';
export const AuditView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>AUDIT - Audit - inconsistencies, tie-outs, cross</h2><p>inconsistencies</p></div>
};
export default AuditView;
