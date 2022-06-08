import {FC} from 'react'
import {Box, AvatarGroup, Avatar, Typography, ImageList, ImageListItem} from '@mui/material'

interface IState {

}

export const RightBar: FC = () => {
    return (
        <Box bgcolor="#A3CEF133" flex={1} p={2} sx={{display:{xs:'none', sm:'none', md: 'inline-block'}}}>
            <Typography variant='h5'>
                Friends
            </Typography>
            <AvatarGroup total={10}>
                <Avatar alt="Remy Sharp"  />
                <Avatar alt="Travis Howard"  />
                <Avatar alt="Agnes Walker"  />
                <Avatar alt="Trevor Henderson" />
                <Avatar alt="Agnes Walker"  />
                <Avatar alt="Trevor Henderson" />
                <Avatar alt="Agnes Walker"  />
                <Avatar alt="Trevor Henderson" />
            </AvatarGroup>
            <Typography variant='h5'>
                Latest posts
            </Typography>
            <ImageList sx={{ width: 300, height: 450 , gap: 5}} cols={3} rowHeight={164}>
                <ImageListItem>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-y1g4aaMU2ajaSlssYiSGYoJXd5DxtU-bRQ&usqp=CAU"
                        alt="img1"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknmPnrPxWjjELEnaXaL7zxX4sVOmHrnjrdw&usqp=CAU"
                        alt="img2"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtF9Mbl09uva_kKuRNf0KUIHEHvN0763EyA&usqp=CAU"
                        alt="img3"
                    />
                </ImageListItem>
            </ImageList>

        </Box>
    )
}
