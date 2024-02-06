const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findSubCompanyByName(companyName, currentCompany = company) {
    if (currentCompany.type === 'subCompany' && currentCompany.name === companyName) {
        return currentCompany;
    } else if (currentCompany.clients && currentCompany.clients.length > 0) {
        for (const client of currentCompany.clients) {
            const result = findSubCompanyByName(companyName, client);
            if (result) {
                return result;
            }
        }
    }
    return null; 
}

const companyNameToFind = 'Клієнт 1';
const foundCompany = findSubCompanyByName(companyNameToFind);

if (foundCompany) {
    console.log(`Знайдено підкомпанію з ім'ям ${companyNameToFind}:`, foundCompany);
} else {
    console.log(`Підкомпанію з ім'ям ${companyNameToFind} не знайдено.`);
}
