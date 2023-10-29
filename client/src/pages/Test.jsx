import React, { useEffect } from 'react';
import { atom, useAtom } from 'jotai';
import { roleAtom, tokkenAtom, adminAtom, doctorAtom } from '../store/atom';
// import { tokkenAtom } from '../App';
// import { tokkenAtom } from '../store/atoms';


const Test = () => {
    const [token] = useAtom(tokkenAtom);
    const [role] = useAtom(roleAtom);
    const [admin] = useAtom(adminAtom);
    const [doctor] = useAtom(doctorAtom);

    return (
        <div>
            token is
            {token}
            <div>
                role is  {role}
            </div>
            <div>
                admin email {admin.email}
                admin id {admin.id}
                admin referenceId {admin.referenceId}
                admin name {admin.name}
            </div>

            <h1>  doctor::</h1>
            <div >
                {/* doc email {doctor} */}
                doc id {doctor.email}
                {/* doc name {doctor.name} */}
            </div>
        </div>
    );
}

export default Test;
