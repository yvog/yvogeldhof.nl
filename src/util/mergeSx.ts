import { SxProps } from "@mui/material";

export function mergeSx(sx: SxProps<any>, sxOverrides?: SxProps<any>): SxProps {
  if (!sxOverrides) {
    return sx;
  }

  return [sx as any, ...(Array.isArray(sxOverrides) ? sxOverrides : [sxOverrides])];
};
