import {
  Compass,
  GraduationCap,
  Hammer,
  Sparkles,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/content/home";

export const iconMap: Record<IconName, LucideIcon> = {
  users: Users,
  compass: Compass,
  wrench: Wrench,
  hammer: Hammer,
  "graduation-cap": GraduationCap,
  sparkles: Sparkles,
};
