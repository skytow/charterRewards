import { faker } from '@faker-js/faker';
import _ from 'lodash';

const numberOfCustomers = 5;
const numberOfRecords = 50;

const createCustomers = new Array(numberOfCustomers).fill(0).map((_) => {
    return faker.datatype.uuid()

})


export const createMockTransactions = new Array(numberOfRecords).fill(0).map(_ => {
    return {
        transactionId: faker.datatype.uuid(),
        customerId:
            createCustomers[
            faker.datatype.number({ min: 0, max: numberOfCustomers - 1 })
            ],
        productId: faker.datatype.uuid(),
        month: faker.date.month(),
        price: faker.datatype.number({ max: 200, min: 1, precision: 0.01 })
  
    };

});

export const fetchMockTransactions = () =>
    new Promise((res, rej) => {
        setTimeout(() => {
            res(createMockTransactions)
        }, 2000);
    });


export const recordsSortedByMonth = (records) => {
    return _.sortBy(records, function(dateObj) {
        return dateObj.month;
    });
}

export const calculatePoints = (price, point1 = 1, point2 = 2) => {
    let pointsPrice = Math.floor(price);
    let pointPart1 = 0;
    if (pointsPrice > 100) {
        pointPart1 = 50 * point1;
    } else {
        pointPart1 = pointsPrice - 50 > 0 ? (pointsPrice - 50) * point1 : 0;
    }
    const pointPart2 = pointsPrice - 100 > 0 ? (pointsPrice - 100) * point2 : 0;
    return pointPart1 + pointPart2;
};

export const recordsGroupByCustomer = (records) => {
    records.forEach((record) => {
        record.points = calculatePoints(record.price);
    });
    return recordsSortedByMonth(records);
};