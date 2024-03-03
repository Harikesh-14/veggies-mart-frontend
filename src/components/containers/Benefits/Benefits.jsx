import React from 'react';

function Benefits() {
    const benefitsList = [
        {
            id: 1,
            title: "Free Shipping",
            slug: "When ordering more than Rs. 600"
        },
        {
            id: 2,
            title: "Free Return",
            slug: "Get return within 30 days"
        },
        {
            id: 3,
            title: "Secure Payment",
            slug: "100% Secure Online Payment"
        },
        {
            id: 4,
            title: "Best Quality",
            slug: "Original Product Guarenteed"
        },
    ];

    return (
        <div className='w-11/12 bg-green-600 mx-auto mb-4 p-4 flex flex-row justify-evenly rounded-lg shadow-md'>
            {
                benefitsList.map((item, index) => (
                    <div key={item.id} className='flex flex-col justify-center items-center text-white'>
                        <p className='font-bold'>{item.title}</p>
                        <p>{item.slug}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Benefits;
