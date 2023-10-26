import { Timestamp } from "firebase/firestore";

export type Project = Record<"_id" | "name" | "description" | "url" | "imagePath", string> & {dateCreated: Timestamp, tech: string[]};