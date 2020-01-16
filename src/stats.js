import React from 'react';
import data from './data';
const { products, users, companies } = data;


const getUsersByState = () => {
    const usersPerSate = users.reduce((acc, user) => {
        if (!acc.hasOwnProperty(user.state)) {
            acc[user.state] = 1;
        }
        else {
            acc[user.state]++;
        }
        return acc;
    }, {});

    return usersPerSate;
}


const getCompaniesByState = () => {
    const companyByState = companies.reduce((acc, company) => { 
        if (!acc.hasOwnProperty(company.state)) {
            acc[company.state] = 1;
        }
        else {
            acc[company.state]++;
        }
        return acc;
    }, {});
    return companyByState;
}


const getProductsByMaterial = () => {
    const materials = products.reduce((acc, product) => {
        if (acc.hasOwnProperty(product.material)) {
            acc[product.material] = 1;
        }
        else {
            acc[product.material]++;
        }
        return acc;
    }, {}); 
    return materials;
}


const getMost = (catagory) => {
    let Obj;
    
    switch (catagory) {
        case 'users':
            Obj = getUsersByState();
            break;
        case 'companies':
            Obj = getCompaniesByState();
            break;
        case 'materials':
            Obj = getProductsByMaterial();
            break;
        default:
            return;
    }

    let most = '';
    let count = 0;
    for (let key in Obj) {
        if (Obj[key] > count) {
            count = Obj.state;
            most = key;
        }
    }
    return most;
}


const Stats = () => {
    return (
        <div>
            <h3>Stats List</h3>
            <div className="stat stat-top">
                <div className="stats-most">
                    The state with the most users is <strong>{getMost('users')}</strong>
                </div>
            </div>
            <div className="stat">
                <div>
                    The state with the most companies is <strong>{getMost('companies')}</strong>
                </div>
            </div>
            <div className="stat">
                <div>
                    The most common material is <strong>{getMost('materials')}</strong>
                </div>
            </div>
        </div>
    )
}
export default Stats;