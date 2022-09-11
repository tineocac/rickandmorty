import { useState } from 'react';

const useTypeId = () => {
    const [typeId, setTypeId] = useState('')

    return { typeId, setTypeId }
};

export default useTypeId;