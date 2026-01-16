// Activity 4: Functions with Complex Logic to Arrow Functions
// Convert each function below to an arrow function

// Problem 1
const isAdult = age => {
    if (age >= 18) {
        return true;
    }
    return false;
};

// Problem 2
const getGrade = score => {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "F";
    }
};

// Problem 3
const calculateTotal = items => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i];
    }
    return total;
};

// Problem 4
const filterEvenNumbers = numbers => {
    return numbers.filter(num => num % 2 === 0);
};

// Problem 5
const mapToSquares = arr => {
    return arr.map(x => x * x);
};

// Problem 6
const findLongestWord = words => {
    let longest = "";
    words.forEach(word => {
        if (word.length > longest.length) {
            longest = word;
        }
    });
    return longest;
};

// Problem 7
const sumArray = numbers => {
    return numbers.reduce((acc, num) => acc + num, 0);
};

// Problem 8
const getInitials = (firstName, lastName) => {
    return (
        firstName.charAt(0).toUpperCase() +
        lastName.charAt(0).toUpperCase()
    );
};

// Problem 9
const checkPassword = password => {
    if (password.length >= 8) {
        return true;
    }
    return false;
};

// Problem 10
const formatName = (first, middle, last) => {
    if (middle) {
        return first + " " + middle + " " + last;
    }
    return first + " " + last;
};