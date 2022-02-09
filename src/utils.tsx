// Helps sort function to sort an array based on a certain property
export default function customSort(property: string) {
    let sortOrder = 1;
    // ASC or DESC?
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substring(1);
    }
    // Fix this
    return (a: any, b: any) => {
        const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}