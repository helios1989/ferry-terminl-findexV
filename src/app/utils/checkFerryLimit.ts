const checkFerryLimit = (vehicleFerry: any, field: string, type: string,maxLimit: number) => {
    return vehicleFerry.filter((data: any) => data[field] === type).length >= maxLimit;
}
export default checkFerryLimit;