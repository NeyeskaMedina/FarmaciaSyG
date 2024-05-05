import React from "react";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import PrivateUser from "./PrivateUser.jsx";
import MenuIcon from "@mui/icons-material/Menu";
import { buttonStyles } from "./StyleHoverButtons.jsx";



const buttonStyles1 = {
    color: "var(--font-navbar-color3)",
    fontFamily: "var(--font-title)",
    fontSize: "1.5rem",
};

export default function BurguerMenu() {
    const [open, setOpen] = React.useState(false);



    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <div>
            <IconButton
                onClick={() => {
                    toggleDrawer(true)();
                }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={{ color: "var(--font-btn4-color)" }}
            >
                <MenuIcon
                    sx={{
                        color: "var(--font-btn4-color)",
                        fontSize: "2rem",
                    }}
                />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box
                    sx={{
                        width: 235,
                        borderTop: "30px solid var(--background-footer-color2)",
                        backgroundColor: "var(--background-navba-color)",
                    }}
                    onClick={toggleDrawer(false)}
                >
                    <List
                        sx={{
                            height: "95.5vh",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <ListItem
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                mt: "15px",
                            }}
                        >
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/farmacias-syg.appspot.com/o/iconos%2Flogo-web.png?alt=media&token=f0d96f19-3e07-402a-b7c1-11676ff8bf5a"
                                alt="Logo farmacia s y g"
                            />
                        </ListItem>
                        
                        <ListItemButton
                            component={NavLink}
                            to="/"
                            sx={{ ...buttonStyles1, ...buttonStyles }}
                        >
                            Home
                        </ListItemButton>
                        
                        <ListItemButton
                            component={NavLink}
                            to="/farmacia_de_turno"
                            sx={{ ...buttonStyles1, ...buttonStyles }}
                        >
                            Farmacia de Turno
                        </ListItemButton>
                        <ListItem
                            sx={{
                                borderBottom: "30px solid var(--background-footer-color2)",
                            }}
                        >
                            <PrivateUser />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}
