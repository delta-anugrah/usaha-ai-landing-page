import {
  Aperture,
  Clapperboard,
  ImageIcon,
  MessageSquareText,
  Radar,
  Scale,
  ScanEye,
  ScanSearch,
  type LucideIcon,
} from "lucide-react";
import type { CapabilityId } from "@/content";

/** Icon per product id. Unknown ids fall back to Aperture. */
export const productIcons: Record<string, LucideIcon> = {
  satellyte: Radar,
  autograde: ScanEye,
  autoerp: Scale,
  "usaha-vision": Aperture,
  "usaha-genai": Clapperboard,
};

export const capabilityIcons: Record<CapabilityId, LucideIcon> = {
  language: MessageSquareText,
  vision: ScanSearch,
  generative: ImageIcon,
};
