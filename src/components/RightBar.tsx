import {FC} from 'react'
import {Box} from '@mui/material'

interface IState {

}

export const RightBar: FC = () => {
    return (
        <Box bgcolor="green" flex={2} p={2} sx={{display:{xs:'none', sm: 'block'}}}>RightBar</Box>
    )
}
