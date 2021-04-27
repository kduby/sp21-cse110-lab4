for (const label in statistics) {
    if (label[0] === 'r' || statistics[label] %2 != 0) {
        console.log(statistics[label]);
    }
}