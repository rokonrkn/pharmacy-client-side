import React, { useEffect, useState } from 'react';
import MedicalSupliesDetails from './MedicalSupliesDetails';

const MedicalSuplies = () => {

    const [Medicine, setMedicine] = useState([])
    const [lodding, setLodding] = useState(false)
    // console.log(Medicine)

    useEffect(() => {
        fetch('../../../public/product.json')
            .then(res => res.json())
            .then(data => setMedicine(data))
        setLodding(true)
    }, [])

    const sliceData = Medicine.slice(0, 4);
    // console.log(sliceData)

    return (
        <div className="">
            {
                lodding ? <div className='grid xl:grid-cols-4 gap-10 mt-10'>
                    {
                        sliceData.map(medi => <MedicalSupliesDetails
                            key={medi.id}
                            medical={medi}
                        ></MedicalSupliesDetails>)
                    }
                        </div>
                    :
                    <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-sky-600"></div>

            }
        </div>
    );
};

export default MedicalSuplies;