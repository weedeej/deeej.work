import { TextLink } from "@/components";
import { Project } from "@/types";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Stack, Button, Typography } from "@mui/material";
import { Timestamp, onSnapshot, collection} from "firebase/firestore";
import { ProjectCard } from "./ProjectCard";
import { useState, useEffect } from "react";
import { db } from "@/firebase";

export function Projects() {
  const [projects, setProjects] = useState<Project[] | null>(null)

  useEffect(() => {
    if (projects) return;
    const ref = collection(db, "projects");
    return onSnapshot(ref, (snap) => {
      setProjects(snap.docs.map((d) => d.data() as Project))
    });
  }, []);
  console.log(projects)

  return (
    <Stack id="projects" flex={0} width="100%" minHeight="100vh" maxWidth="100vw">
      <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%" sx={{ backgroundColor: "#f1f1f1" }} p={2}>
        <TextLink href="#main">
          <Button startIcon={<ExpandLess />} color='inherit'>
            Main
          </Button>
        </TextLink>
        <TextLink href="#skills">
          <Button startIcon={<ExpandMore />} color='inherit'>
            Skills
          </Button>
        </TextLink>
      </Stack>
      <Stack p={2} gap={2}>
        <Typography variant="h2">
          PROJECTS
        </Typography>
        <Stack sx={{
          flexDirection: {
            xs: "column",
            sm: "row"
          },
          flexWrap: "wrap",
          alignItems: {
            xs: "center",
            sm: "start"
          },
          justifyContent: {
            xs: "flex-start",
            sm: "flex-start"
          },
          gap: 2
        }}>
          {
            projects && projects.map((project) => <ProjectCard project={project} key={`proj_${project._id}`}/>)
          }
        </Stack>
      </Stack>
    </Stack>
  )
}