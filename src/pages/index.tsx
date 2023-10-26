import { IconButton, Stack, Typography, useTheme, Button } from '@mui/material'
import { CircleSharp, LinkedIn, GitHub, Mail, ExpandLess, ExpandMore } from '@mui/icons-material'
import { TextLink } from '@/components'
import { Skills, Projects } from '@/screens'

export default function Home() {


  return (<>
    <Stack direction="column" justifyContent="center" alignItems="center" minHeight="100vh" position="relative">
      <TextLink href="/cms" sx={{ position: "absolute", top: 8, right: 8 }}>
        <Button color="inherit">
          CMS
        </Button>
      </TextLink>
      {/* Main Start */}
      <Stack id="main" direction="column" gap={0} alignItems="center" justifyContent="center" minHeight="100vh">
        <Stack gap={0} alignItems="center" justifyContent="center" sx={{ backgroundColor: "#f1f1f1" }} p={2} borderRadius={4}>
          <TextLink variant='h2' href='https://www.linkedin.com/in/dixie-joseph-ampo-220449236' target='_blank' rel='noreferrer'>
            Dixie Joseph
          </TextLink>
          <Stack direction="row" justifyContent="space-between" width="100%" alignItems="center">
            <Stack direction="row" width="100%">
              <TextLink href='https://www.linkedin.com/in/dixie-joseph-ampo-220449236' target='_blank' rel='noreferrer'>
                <IconButton title='LinkedIn Profile'>
                  <LinkedIn />
                </IconButton>
              </TextLink>
              <TextLink href='https://github.com/weedeej' target='_blank' rel='noreferrer'>
                <IconButton title='Github Profile'>
                  <GitHub />
                </IconButton>
              </TextLink>
              <TextLink href='mailto:work.deeej@gmail.com?subject=I want to connect'>
                <IconButton title='Send me a mail!'>
                  <Mail />
                </IconButton>
              </TextLink>
            </Stack>
            <Stack direction="row" height="100%" gap={1} alignItems="center" divider={<CircleSharp style={{ width: 8, height: 8 }} />}>
              <TextLink href="#projects" variant='h5'>Projects</TextLink>
              <TextLink href="#skills" variant='h5'>Skills</TextLink>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {/* Projects Start */}
      <Projects />
      {/* Skills Start */}
      <Skills />
    </Stack>
  </>)
}
