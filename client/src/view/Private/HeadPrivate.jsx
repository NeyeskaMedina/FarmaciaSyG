import React from 'react'
import Button from '@mui/joy/Button';
import SvgIcon from '@mui/joy/SvgIcon';
import { styled } from '@mui/joy';
import { Box, Container, Typography  } from '@mui/material';
import { useState } from 'react';
import { FaFileExcel } from "react-icons/fa";
import { postCSV } from "../../apiRest/apiPharmacy/postPharmacy.js";
import swal from "sweetalert";
// import RadioHeader from "../../components/Private/RadioGroup/RadioHeader.jsx";
import './style.css'

const VisuallyHiddenInput = styled('input')`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    width: 1px;
    `;

export const HeadPrivate = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [isDisabled, setIsDisabled] = useState(true);

    const handleFileChange = async (event) => { 
        const file = event.target.files[0];
        let filename;
        if (file) {
            const formData = new FormData();
            formData.append('myFile', file);
            filename = formData.get('myFile').name;
            setFileName(filename);
            setSelectedFile(formData);
            setIsDisabled(false);
        }
    };
    const handleSend = async () => {
        if(selectedFile){
            await postCSV(selectedFile)
            swal("¡Su archivo se ha guardado correctamente!", {
                icon: "success",
            });
            setSelectedFile("");
            setIsDisabled(true)
        } else {
            swal("¡Error al guardar archivo",
                "Porfavor asegurese de subir un archivo.",
                "error"
            );
        }
    };
    return (
    <Container sx={{
        display: 'flex',
        flexDirection: 'column'
    }}>
        <Box sx={{display:'flex'}}>
            <Button
                title='Solo se admite archivo delimitado por comas'
                sx={{with:'15vw', height:'5vh', margin:'4px', marginLeft: '4vw', '&:hover': {
                    backgroundColor: 'lightblue'}}}
                component="label"
                role={undefined}
                tabIndex={-1}
                variant="outlined"
                color="neutral"
                startDecorator={
                    <SvgIcon>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                        </svg>
                    </SvgIcon>
                }
            >
                    Sube tu archivo CSV
                <VisuallyHiddenInput type="file" accept=".csv" onChange={handleFileChange}/>
            </Button>
            {selectedFile && (
                <Box sx={{display:'flex', alignItems:'center'}}>
                    <Box sx={{ fontSize:'20px', color:'green'}}>
                        <FaFileExcel />
                    </Box>
                    <Typography variant="body2">
                        {fileName}
                    </Typography>
                </Box>
            )}
            <Button
            disabled={isDisabled}
            onClick={handleSend}
                sx={{
                    with:'15vw', 
                    height:'5vh', 
                    margin:'4px', 
                    marginLeft: '4vw',
                    marginRight: '4vw',
                    color: 'black', 
                    backgroundColor:'#fe48696f', 
                    '&:hover': {
                    backgroundColor: 'var(--background-btn1)',
                    color: 'white'
                    }
                }}
            > Guardar
            </Button>
        </Box>
    </Container>
    )
}
export default HeadPrivate;
