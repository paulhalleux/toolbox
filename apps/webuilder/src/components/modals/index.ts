import { createPushModal } from "@toolbox/ui";
import { CreatePageModal } from "./CreatePageModal";

const { pushModal, ModalProvider } = createPushModal({
  modals: {
    CreatePageModal,
  },
});

export { pushModal, ModalProvider };
