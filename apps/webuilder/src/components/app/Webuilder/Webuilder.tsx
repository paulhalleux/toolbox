import { BuilderToolbar } from "../BuilderToolbar";
import { BuilderWorkspace } from "../BuilderWorkspace";

export function Webuilder() {
  return (
    <div className="flex h-full">
      <BuilderToolbar />
      <BuilderWorkspace />
    </div>
  );
}
