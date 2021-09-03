

const getMaxNumber = (arrInput: any[], field: string) => {
 if (!arrInput.length) return 1;
 return  Math.max.apply(Math, arrInput.map(function(obj) { return obj[field]; })) + 1;
}

export default getMaxNumber;