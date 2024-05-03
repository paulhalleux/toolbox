import { Decorator } from "@storybook/react";
import { useState } from "react";
import { PanelGroup, PortalTarget, ThemeProvider } from "@toolbox/ui";

export const WithColorScheme: Decorator = (Story, context) => {
  const { scheme } = context.globals;

  if (scheme === "compare") {
    return (
      <PanelGroup
        direction="horizontal"
        className="!h-screen"
        data-theme="dark"
      >
        <SchemeContainer theme="light">
          <Story {...context} />
        </SchemeContainer>
        <PanelGroup.Handle direction="horizontal" showDragIndicator />
        <SchemeContainer theme="dark">
          <Story {...context} />
        </SchemeContainer>
      </PanelGroup>
    );
  }

  return (
    <PanelGroup direction="horizontal" className="!h-screen">
      <SchemeContainer theme={scheme}>
        <Story {...context} />
      </SchemeContainer>
    </PanelGroup>
  );
};

const SchemeContainer = ({ children, theme }) => {
  const [containerRef, setContainerRef] = useState<HTMLDivElement>(null);

  return (
    <div ref={setContainerRef} className="contents">
      <PortalTarget>
        <ThemeProvider theme={theme} target={containerRef}>
          <PanelGroup.Panel
            minSize={25}
            className="scheme-container bg-base text-base"
          >
            {children}
          </PanelGroup.Panel>
        </ThemeProvider>
      </PortalTarget>
    </div>
  );
};
