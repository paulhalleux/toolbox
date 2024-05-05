import { BaseModalProps, Button, Input, Modal, Text, Tree } from "@toolbox/ui";
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
      <form
        onSubmit={onSubmit}
        id="form"
        className="w-full flex flex-col gap-3"
      >
        <table className="border border-base rounded-md border-separate border-spacing-0">
          <tbody>
            <tr className="h-10">
              <th className="border-b border-r border-base bg-secondary text-left px-2">
                <Text as="label" htmlFor="name">
                  Name
                </Text>
              </th>
              <td className="border-b border-base">
                <Input type="text" name="name" id="name" />
              </td>
            </tr>
            <tr className="h-10">
              <th className="border-b border-r border-base bg-secondary text-left px-2">
                <Text as="label" htmlFor="route">
                  Route
                </Text>
              </th>
              <td className="border-b border-base">
                <Input type="text" name="route" id="route" />
              </td>
            </tr>
            <tr className="h-10">
              <th className="bg-secondary border-base border-r text-left px-2">
                <Text as="label" htmlFor="parent">
                  Parent
                </Text>
              </th>
              <td>
                <Tree
                  className="h-[250px]"
                  data={[
                    {
                      id: "1",
                      name: "Parent 1",
                      children: [
                        {
                          id: "2",
                          name: "Child 1",
                        },
                        {
                          id: "3",
                          name: "Child 2",
                          children: [
                            {
                              id: "4",
                              name: "Grandchild 1",
                            },
                            {
                              id: "5",
                              name: "Grandchild 2",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: "6",
                      name: "Parent 2",
                      children: [
                        {
                          id: "7",
                          name: "Child 3",
                        },
                        {
                          id: "8",
                          name: "Child 4",
                        },
                      ],
                    },
                  ]}
                />
              </td>
            </tr>
          </tbody>
        </table>
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
