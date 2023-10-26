import theme from "@/theme";
import { LinkProps, styled, Link, useTheme } from "@mui/material";
import { Spring, animated  } from '@react-spring/web'

export function TextLink(props: LinkProps) {
  return (
    <CustomLink {...props}/>
  )
}

const CustomLink = styled(Link)({
  textDecoration: "none",
  color: theme.palette.text.primary,
  transition: "transform 0.2s ease",
  ":hover": {
    transform: "scale(1.05)",
    textDecoration: "underline"
  }
})