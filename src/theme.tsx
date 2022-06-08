import { createTheme, Toolbar, styled, Box, Card } from "@mui/material";

export const theme = createTheme({

})

export const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})

export const SearchNav = styled("div")(({theme})=>({
    backgroundColor: "whitesmoke",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%",
}))

export const IconsNav = styled(Box)(({theme})=>({
    display: "flex",
    alignItems: "center",
    gap: "30px"
}))

export const CardStack = styled(Card)(({})=>({
    margin:"10px 0"
}))



