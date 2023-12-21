import React from 'react';

const getExparticeAll = async () => {

    const res = await fetch(`experticeData.json`)

    return res.json()

};

export default getExparticeAll;