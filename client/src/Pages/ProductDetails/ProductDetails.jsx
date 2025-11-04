import React from 'react';
import { useLoaderData } from 'react-router';


export async function productLoder({params}) {
    const {id} = params ;

} 


const ProductDetails = () => {
    const prodcut = useLoaderData();
    
    return (
        <div>
            
        </div>
    );
};

export default ProductDetails;