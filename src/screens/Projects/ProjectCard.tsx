import { Project } from "@/types";
import { fetchFileUrl } from "@/utils";
import { Chip, CircularProgress, IconButton, Paper, Skeleton, Stack, Typography } from "@mui/material";
import { OpenInNew } from "@mui/icons-material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TextLink } from "@/components";

const dateTimeFormat = Intl.DateTimeFormat("en-PH", { timeStyle: "medium", dateStyle: "medium" }).format

export function ProjectCard(props: { project: Project }) {
  const { project } = props;
  const { name, _id, description, imagePath, dateCreated, tech, url } = project;
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    fetchFileUrl(imagePath).then(setImageUrl);
  }, []);


  return (
    <TextLink href={url} target="_blank">
      <Paper>
        <Stack maxWidth={299}>
          <Stack gap={0}>
            <Stack gap={0} p={2}>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="h6">{name}</Typography>
                <IconButton>
                  <OpenInNew style={{ width: 20, height: 20 }} />
                </IconButton>
              </Stack>
              <Typography variant="caption">
                {
                  dateTimeFormat(dateCreated.toDate())
                }
              </Typography>
            </Stack>
            <Stack justifyContent="center" alignItems="center" width={300} height={200} maxWidth={300} maxHeight={200} position="relative">
              {
                imageUrl ? <Image src={imageUrl} alt="Project Image" fill /> : <Skeleton width={300} height={200} variant="rectangular" />
              }
            </Stack>
            <Stack gap={0} p={2}>
              <Typography variant="subtitle2">
                {description}
              </Typography>
              <Stack direction="row" gap={1} flexWrap="wrap">
                {tech.map((t) => (
                  <Chip variant="filled" label={t} key={`${_id}_${t}`}/>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </TextLink>
  )
}