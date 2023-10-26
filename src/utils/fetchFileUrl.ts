import { StorageReference, getDownloadURL, ref } from "firebase/storage";
import {storage} from "@/firebase";
export async function fetchFileUrl(path: string): Promise<string | null> {
  const storageRef = ref(storage, path);
  const url = await getDownloadURL(storageRef);
  return url ?? null;
}