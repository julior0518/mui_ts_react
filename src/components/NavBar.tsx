import { FC, useState } from 'react'
import { AppBar, Badge, InputBase, Typography, Avatar, Menu, MenuItem } from '@mui/material'
import { StyledToolbar, SearchNav, IconsNav } from '../theme'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Mail from '@mui/icons-material/Mail'
import Notification from '@mui/icons-material/Notifications'


interface IState {

}


export const NavBar:FC = () => {
    const [open, setOpen]= useState(false)

    return (
            <AppBar position='sticky'>
                <StyledToolbar>
                    <Typography variant='h5'sx={{display:{xs:'none', sm:'block'}}}>FiRe</Typography>
                    <WhatshotIcon sx={{display:{xs:'block', sm:'none'}}}/>
                    <SearchNav>
                        <InputBase placeholder='search...' />
                    </SearchNav>
                    <IconsNav>
                        <Badge badgeContent={4}  color="secondary">
                            <Notification  color="action"/>
                        </Badge>
                        <Badge badgeContent={4}  color="secondary">
                            <Mail color="action"/>
                        </Badge>
                    </IconsNav>
                    <IconsNav onClick={()=>setOpen(true)}>
                        <Avatar sx={{width:25, height:25}}/>
                        <Typography sx={{display:{xs:'none', sm:'block'}}}>Julio</Typography>
                    </IconsNav>
                </StyledToolbar>
                {/* from amterial ui docs */}
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={(e)=> setOpen(false)}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>

            </AppBar>
    )
}
