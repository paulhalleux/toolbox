import { BaseModalProps, Button, Modal, Text } from "@toolbox/ui";
import { useContentStore } from "../../../state/content-store";
import { CreatePageForm } from "../../forms";

export function CreatePageModal({ open, onClose }: BaseModalProps) {
  const { addPage } = useContentStore();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name") as string;
    const route = data.get("route") as string;
    addPage({
      id: crypto.randomUUID(),
      title: name,
      path: route,
      children: [],
      layers: [],
    });
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      size="default"
      position="top"
      className="px-4 py-3 flex flex-col gap-4 mt-[200px]"
    >
      <header className="mb-6 flex flex-col gap-1.5">
        <Text type="text-lg" className="font-bold">
          Create a new page
        </Text>
        <Text type="text-xs" className="text-secondary">
          Create a new page by providing a name and a route. You can also select
          a parent page to nest this page under.
        </Text>
      </header>
      <CreatePageForm id="create-page-form" />
      <div className="flex justify-end gap-2 mt-6">
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" form="create-page-form">
          Create
        </Button>
      </div>
    </Modal>
  );
}
