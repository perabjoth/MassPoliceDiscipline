import React from 'react';

function OfficerTable({ data }) {
    return (
        <table className='table table-striped table-hover table-bordered'>
            <thead>
                <tr>
                    <th>Officer Name</th>
                    <th>Agency</th>
                    <th>Allegation Type</th>
                    <th>Incident Date</th>
                    <th>Disciplinary Action</th>
                </tr>
            </thead>
            <tbody className='table-group-divider'>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.FirstName} {item.LastName}</td>
                        <td>{item.ReportingAgency}</td>
                        <td>{item.Allegation_Type}</td>
                        <td>{item.IncidentDate}</td>
                        <td>{item.Disciplines}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default OfficerTable;
