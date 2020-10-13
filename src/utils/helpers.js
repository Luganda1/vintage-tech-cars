import url from "./URL";

//flattened function
export function FlattenedProduct(data) {
    return data.map(item => {
        //claudinary
        // const image = item.image.url;
        let image = `${url}${item.image[0].url}`;
        return {...item, image}
    })
}


// helper functions
export function FeaturedProducts(data) {
    return data.filter(item => {
        return item.featured === true;
    })
}