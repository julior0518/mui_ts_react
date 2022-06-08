import {FC} from 'react'
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from '@mui/material'
import InboxIcon from "@mui/icons-material/Inbox"
import HomeIcon from '@mui/icons-material/Home';
import  ModeNight  from '@mui/icons-material/ModeNight';


interface IState {

}

export const SideBar: FC = () => {
    return (
        <Box  flex={1}  p={2} sx={{display:{xs:'none', sm: 'block'}, backgroundColor: '#A3CEF133', }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{alignItems:'center'}}>
                            <ModeNight />
                            <Switch />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

