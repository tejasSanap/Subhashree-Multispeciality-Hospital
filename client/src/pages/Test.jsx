import React, { useEffect } from 'react';
import { atom, useAtom } from 'jotai';
import { tokkenAtom } from '../App';
// import { tokkenAtom } from '../store/atoms';



const Test = () => {
    const [token] = useAtom(tokkenAtom)

    return (
        <div>
            hi
            {token}
        </div>
    );
}

export default Test;
