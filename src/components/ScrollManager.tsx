import { useScrollRouter } from "@/hooks/useScrollRouter";
import { sections } from "@/configs/settings";
import { scrollThreshold } from "@/configs/settings";

export default function ScrollManager() {
  useScrollRouter(sections, scrollThreshold);

  return null;
}