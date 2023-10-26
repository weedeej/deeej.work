import { IconButton, Stack, useTheme } from '@mui/material'
import { CircleSharp, LinkedIn, GitHub, Mail } from '@mui/icons-material'
import { TextLink } from '@/components'

export default function Home() {
  const t = useTheme()
  return (<>
    <Stack direction="column" justifyContent="center" alignItems="center" minHeight="100vh">
      <Stack direction="column" gap={0} alignItems="cemter">
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
            <TextLink href="/projects" fontWeight={700}>Projects</TextLink>
            <TextLink href="/skills" fontWeight={700}>Skills</TextLink>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </>)
}
