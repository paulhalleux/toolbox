import {
  createContext,
  PropsWithChildren,
  RefObject,
  useContext,
  useRef,
} from "react";
import { createPortal } from "react-dom";

type PortalProps = PropsWithChildren<{
  target?: HTMLElement;
}>;

export function Portal({ children, target = document.body }: PortalProps) {
  const portalRoot = usePortalTarget();
  return createPortal(children, portalRoot?.current ?? target);
}

const PortalTargetContext = createContext<RefObject<HTMLDivElement>>({
  current: null,
});

export function PortalTarget({ children }: PropsWithChildren) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <PortalTargetContext.Provider value={containerRef}>
      <div ref={containerRef} className="contents">
        {children}
      </div>
    </PortalTargetContext.Provider>
  );
}

export function usePortalTarget() {
  return useContext(PortalTargetContext);
}
