import React from 'react';
import data from './data';
const { companies } = data;

const Company = () => {
    return (
        <div>
            <h3>Companies</h3>
            <div className="CompanyList">
                <ul>
                    {companies.map(company => {
                        return <li key={company.id}>
                            {company.name} {company.state}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Company