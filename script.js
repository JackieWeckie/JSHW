//1

function isUnique(arr) {
        const uniqueElements = new Set(arr);
        return uniqueElements.size === arr.length;
}

console.log(isUnique([1, 2, 3, 4, 5, 6])); 
console.log(isUnique([1, 2, 3, 2, 1])); 


//2

function mergeArrays(arr1, arr2) {
        const mergedArray = [...new Set([...arr1, ...arr2])];
        return mergedArray.sort((a, b) => a - b);
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5]));

//3

function replaceNegatives(arr, replace) {
        return arr.map(element => element < 0 ? replace : element);
}

console.log(replaceNegatives([-1, 2, -3, 4], 0));

//4

function isPrime(num) {
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
                if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
}

function getPrimes(arr) {
        return arr.filter(isPrime);
}

console.log(isPrime(7));
console.log(getPrimes([1, 2, 3, 4, 5, 6, 7]));