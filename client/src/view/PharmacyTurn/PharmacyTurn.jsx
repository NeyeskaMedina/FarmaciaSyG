import React from 'react';
import { useState } from 'react'
import { ApiConsult } from "../../components/ApiTurns/ApiConsult.jsx";
import { SelectSearch } from "../../components/ApiTurns/SelectSearch.jsx";

export const PharmacyTurn = () => {
    const [data, setData] = useState([]);
    const [changeSelect, setChangeSelect] = useState(null);
    const [originalData, setOriginalData ] = useState([]);
    const [loading, setLoading] = useState(null);

    return (
      <>
        <SelectSearch 
            setData={setData}
            setLoading={setLoading}
            setChangeSelect={setChangeSelect}
            originalData={originalData}
        />
        
        <ApiConsult 
          data={data}
          setData={setData}
          setOriginalData={setOriginalData}
          setChangeSelect={setChangeSelect}
          changeSelect={changeSelect}
          setLoading={setLoading}
          loading={loading}
        />
      </>
    )
}
export default PharmacyTurn;