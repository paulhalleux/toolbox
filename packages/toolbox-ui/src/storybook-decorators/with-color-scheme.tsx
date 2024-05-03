import { Decorator } from "@storybook/react";
import { useState } from "react";
import { PanelGroup, ThemeProvider } from "../components";

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
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

  return (
    <div ref={setContainerRef} className="contents">
      <ThemeProvider theme={theme} target={containerRef ?? undefined}>
        <PanelGroup.Panel minSize={25} className="bg-base flex w-full h-full">
          {children}
        </PanelGroup.Panel>
      </ThemeProvider>
    </div>
  );
};
