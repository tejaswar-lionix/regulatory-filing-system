import React, {useState} from 'react';
export const NotificationsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>NOTIFICATIONS - Notifications - deadline alerts, review,</h2><p>deadline alerts</p></div>
};
export default NotificationsView;
