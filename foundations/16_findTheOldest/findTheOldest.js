const findTheOldest = function(people) {
    const pair = people.reduce((oldest, p) => {
        const deathYear = p.yearOfDeath ? p.yearOfDeath : new Date().getFullYear();
        const age = deathYear - p.yearOfBirth;
        return age > oldest[0] ? [age, p] : oldest;
    }, [0, null]);
    
    return pair[1];
};

// Do not edit below this line
module.exports = findTheOldest;
