import { Box, IconButton, OutlinedInput, InputAdornment, FormControl, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [isExpansed, setIsExpansed] = useState(false)

    const navigate = useNavigate();

    const handleLeave = (e) =>{
        e.preventDefault();
        setIsExpansed(false)
    }

    const handleEnter = (e) =>{
        e.preventDefault();
        setIsExpansed(true)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Valor ingresado:", searchValue);
        navigate(`/buscar-medicamento/${searchValue}`, { state: Math.random()*10000000 });

    }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'end' }}>
            <form  onSubmit={handleSubmit} >
                <FormControl
                    sx={{
                        m: 1,
                        width: { 
                            xs: !isExpansed ? '2.5rem' : '18rem',
                            md: '18rem',
                        },
                        marginBottom: {
                            xs: '25px', 
                            md: '0px' 
                        },
                        borderRadius: '50px',
                        backgroundColor: 'var(--background-navba-color)',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '50px',
                            backgroundColor: 'transparent',
                            '&:hover fieldset': {
                                borderColor: 'var(--linea-border-color2)',
                            },
                        },
                        '& .MuiOutlinedInput-input': {
                            padding: '8px',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#91C3E440',
                        },
                        '& .Mui-focused': {
                            '& fieldset': {
                                borderColor: 'var(--linea-border-color2) !important',
                            },
                        },
                    }}
                    
                >
                    <InputLabel sx={{
                        color: 'var(--font-placeholder-color)',
                        fontFamily: 'Arvo',
                        textAlign: 'center',
                        fontSize: '13px',
                        fontStyle: 'italic',
                        m: '-4px 0px 35px 8px',
                    }}
                        htmlFor="search-medicine">
                        Busca tu medicamento
                    </InputLabel>
                    <OutlinedInput
                        id="search-medicine"
                        type="text"
                        value={searchValue}
                        onChange={handleChange}
                        onMouseLeave={handleLeave}
                        onMouseEnter={handleEnter}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    type='submit'
                                    edge="end"
                                    sx={{
                                        backgroundColor: 'var(--linea-border-color2)',
                                        borderTopLeftRadius: 0,
                                        borderBottomLeftRadius: 0,
                                        position: { xs: 'absolute', md: 'relative' },
                                        left: { xs: !isExpansed ? '0px' : 'auto' },
                                        right: { xs: isExpansed ? '14px' : '0px', md: '0px'},

                                    }}
                                >
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                        aria-describedby="search-medicine"
                        label='Busca tu medicamento'
                    />
                </FormControl>
            </form>
        </Box>
    );
}