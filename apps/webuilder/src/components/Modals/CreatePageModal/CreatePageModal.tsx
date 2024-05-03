import { BaseModalProps, Button, Input, Modal, Text } from "@toolbox/ui";
import { useContentStore } from "../../../state/content-store";

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
      size="small"
      position="top"
      className="px-4 py-3 flex flex-col gap-4 mt-[200px]"
    >
      <header className="mb-6">
        <Text type="heading-h2">Create a new page</Text>
        <Text type="content-small">
          Create a new page by providing a name and a route. You can also select
          a parent page to nest this page under.
        </Text>
      </header>
      <form
        onSubmit={onSubmit}
        id="form"
        className="w-full flex flex-col gap-3"
      >
        <div className="flex flex-col gap-1.5">
          <Text as="label" htmlFor="name" type="content-x-small">
            Name
          </Text>
          <Text type="content-x-small" className="grow">
            <Input autoFocus type="text" id="name" name="name" />
          </Text>
        </div>
        <div className="flex flex-col gap-1.5">
          <Text as="label" htmlFor="route" type="content-x-small">
            Route
          </Text>
          <Text type="content-x-small" className="grow">
            <Input type="text" id="route" name="route" />
          </Text>
        </div>
        <div className="flex flex-col gap-1.5">
          <Text as="label" htmlFor="route" type="content-x-small">
            Parent
          </Text>
          <Text type="content-x-small" className="grow">
            <Input type="text" id="route" name="route" />
          </Text>
        </div>
      </form>
      <div className="flex justify-end gap-2 mt-6">
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" form="form">
          Create
        </Button>
      </div>
    </Modal>
  );
}
