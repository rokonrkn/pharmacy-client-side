import React, { useEffect, useState } from 'react';
import FaceMaskDetails from './FaceMaskDetails';

const FaceMask = () => {

    const [Medicine, setMedicine] = useState([])
    const [lodding, setLodding] = useState(false)
    // console.log(Medicine)

    useEffect(() => {
        fetch('../../../public/product.json')
            .then(res => res.json())
            .then(data => setMedicine(data))
        setLodding(true)
    }, [])

    const sliceData = Medicine.slice(8, 12);
    console.log(sliceData)

    return (
        <div>
             {
                lodding ? <div className='grid xl:grid-cols-4 gap-10 mt-10'>
                    {
                        sliceData.map(medi => <FaceMaskDetails
                            key={medi.id}
                            medical={medi}
                        ></FaceMaskDetails>)
                    }
                        </div>
                    :
                    <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-sky-600"></div>

            }
        </div>
    );
};

export default FaceMask;