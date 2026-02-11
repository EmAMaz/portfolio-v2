export const getExperienceYears = ():number => {
    const startingYear:number = 2022;
    return new Date().getFullYear() - startingYear
}