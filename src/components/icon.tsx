import { DynamicIcon } from "lucide-react/dynamic";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof DynamicIcon>;

export default function Icon({ children, ...props }: Props) {
  return (
    <DynamicIcon size={17} {...props}>
      {children}
    </DynamicIcon>
  );
}
