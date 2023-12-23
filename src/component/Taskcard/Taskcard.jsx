import React, { useState } from 'react';
import useAxiosPublic from '../../hook/useAxiosPublic';

const Taskcard = ({status}) => {
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    const statusUrl = `/tasks/email?${email}&status?${status}`;




    return (
        <div>
            
        </div>
    );
};

export default Taskcard;