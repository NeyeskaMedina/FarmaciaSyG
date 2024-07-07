import * as React from 'react';
import { Box } from '@mui/material';
import HeadPrivate from "./HeadPrivate.jsx"
import { BtnInstruction } from "../../components/Buttons/ButtonInstruction/BtnInstruction.jsx";
import TablePrivate from "../../components/Private/TablePrivate.jsx";


export const Extranet = () => { 
      return (
        <>
        <Box sx={{display:'flex', flexDirection:'column', marginBottom: '4vh'}}>
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <h1 style={{fontFamily:'var(--font-title)'}}>Proveedores</h1>
            <Box sx={{
              display:'flex',
              justifyContent:'flex-end'
            }}>
                <BtnInstruction />
            </Box>
          </Box>
              <HeadPrivate />
        </Box>
        <TablePrivate />
        </>
      );

}
export default Extranet;