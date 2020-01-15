import React from 'react';
import data from './data';
const { companies } = data;

const Companies = () => {
    return (
        <div>
            <h3>Companies</h3>
            <div className="company-list list">
                <ul>
                    {companies.map(company => {
                        return <li key={company.id}>
                            <strong>{company.name}</strong> {company.state}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Companies;