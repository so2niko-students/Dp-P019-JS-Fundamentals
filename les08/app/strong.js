const strongness = (a, b) => {
    
    const interval = [];
    const strength = [];

    const defineStrength = (item, counter) => (item % 2 == 0)? defineStrength(item / 2, ++counter): strength.push(counter);

    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            interval.push(i);
            defineStrength(i, 0);
        }
    }

    // interval.forEach(item => defineStrength(item, 0));

    const str = Math.max(...strength);
    const strongest = strength.indexOf(str);
    console.log(interval[strongest], str);
}

strongness(4, 10);