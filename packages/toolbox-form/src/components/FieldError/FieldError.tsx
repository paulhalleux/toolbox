import { Text, Tooltip } from "@toolbox/ui";
import { useMemo, useRef } from "react";
import { CircleAlertIcon } from "lucide-react";
import { useWindowSize } from "react-use";

type FieldErrorProps = {
  hasError: boolean;
  message: string | undefined;
};

export function FieldError({ hasError, message }: FieldErrorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  const overflowing = useMemo(() => {
    return (
      width && ref.current && ref.current.offsetWidth < ref.current.scrollWidth
    );
  }, [width]);

  if (!hasError || !message) {
    return null;
  }

  return (
    <Tooltip>
      <Tooltip.Trigger className="text-error flex items-center min-w-0">
        <CircleAlertIcon size={12} className="shrink-0 mr-1" />
        <Text textRef={ref} type="text-xs" ellipsis>
          {message}
        </Text>
      </Tooltip.Trigger>
      {overflowing ? (
        <Tooltip.Content>
          <Text type="text-xs" className="text-error">
            {message}
          </Text>
        </Tooltip.Content>
      ) : null}
    </Tooltip>
  );
}
