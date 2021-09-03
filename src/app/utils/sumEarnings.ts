const  sumEarnings = (input: any[], field: string) => {
    return input.reduce((sum, prev) => {
        return sum + prev[field];
    }, 0);
}

export default sumEarnings;