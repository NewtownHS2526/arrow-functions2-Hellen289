// Activity 5: Advanced Arrow Function Conversions
// Convert each function below to an arrow function (including nested functions)

// Problem 1
const createMultiplier = factor => {
    return number => number * factor;
};

// Problem 2
const processArray = (arr, callback) => {
    return arr.map(item => callback(item));
};

// Problem 3
const createCounter = () => {
    let count = 0;
    return () => {
        count++;
        return count;
    };
};

// Problem 4
const sortByProperty = (objects, property) => {
    return objects.sort((a, b) => a[property] - b[property]);
};

// Problem 5
const filterAndMap = numbers => {
    return numbers
        .filter(num => num > 0)
        .map(num => num * 2);
};

// Problem 6
const createValidator = (min, max) => {
    return value => value >= min && value <= max;
};

// Problem 7
const processData = (data, transform) => {
    return data.reduce((acc, item) => {
        acc.push(transform(item));
        return acc;
    }, []);
};

// Problem 8
const createAdder = x => {
    return y => {
        return z => x + y + z;
    };
};

// Problem 9
const groupBy = (array, keyFn) => {
    return array.reduce((groups, item) => {
        const key = keyFn(item);
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(item);
        return groups;
    }, {});
};

// Problem 10
const compose = (f, g) => {
    return x => f(g(x));
};
