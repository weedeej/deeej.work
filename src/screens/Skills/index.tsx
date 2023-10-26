import { TextLink } from "@/components";
import { ExpandLess } from "@mui/icons-material";
import { Stack, Button, Typography } from "@mui/material";

export function Skills() {
  return (
    <Stack id="skills" flex={0} width="100%" minHeight="100vh" maxWidth="100vw">
        <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%" sx={{ backgroundColor: "#f1f1f1" }} p={2}>
          <TextLink href="#main">
            <Button startIcon={<ExpandLess />} color='inherit'>
              Main
            </Button>
          </TextLink>
          <TextLink href="#projects">
            <Button startIcon={<ExpandLess />} color='inherit'>
              Projects
            </Button>
          </TextLink>
        </Stack>
        <Stack p={2}>
          <Typography variant="h2">
            SKILLS
          </Typography>
        </Stack>
      </Stack>
  )
}