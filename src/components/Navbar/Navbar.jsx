import * as React from 'react';
import DesktopButtons from "./DesktopButtons.jsx";
import BurguerMenu from "./BurguerMenu.jsx";
import Search from "./Search.jsx";
import PrivateUser from "./PrivateUser.jsx";
import { AppBar, Box, Toolbar, Container } from "@mui/material";


export const Navbar = () => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "var(--background-navba-color)",
                height: "5.2rem",
                width: "100%",
                borderBottom: '4px solid #FDA2B440',
            }}
        >
            <Container maxWidth="xll">
                <Toolbar
                    disableGutters
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 1,
                    }}
                >
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "space-between", alignItems: "center" }}>
                        <BurguerMenu/>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/iconos%2Flogo-web.png?alt=media&token=f0d96f19-3e07-402a-b7c1-11676ff8bf5a"
                            alt="Logo farmacia s y g"
                        />
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 3,
                            mt: 0,
                            display: { xs: "none", lg:"flex", xl: "flex" },
                            justifyContent: "space-between",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/iconos%2Flogo-web.png?alt=media&token=f0d96f19-3e07-402a-b7c1-11676ff8bf5a"
                                alt="logo farmacia s y g"
                            />
                        </Box>
                        <Search />
                        <DesktopButtons />
                        <PrivateUser />
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 3,
                            m: -2,
                            display: { xs: "none", md: "flex", lg: "none" },
                            justifyContent: "space-between",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/iconos%2Flogo-web.png?alt=media&token=f0d96f19-3e07-402a-b7c1-11676ff8bf5a"
                                alt="logo farmacia s y g"
                            />
                        </Box>
                        <Search/>
                        <DesktopButtons />
                        <PrivateUser />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Navbar;