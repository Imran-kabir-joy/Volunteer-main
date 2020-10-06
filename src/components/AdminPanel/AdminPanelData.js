import React from 'react';

const AdminPanelData = (props) => {
    const {name,email,date,work} = props.data;
    return (
        <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{date}</td>
        <td>{work}</td>
      </tr>
    );
};

export default AdminPanelData;