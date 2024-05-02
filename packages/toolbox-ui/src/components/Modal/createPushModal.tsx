import { ComponentProps, ComponentType } from "react";
import { create } from "zustand";

export type BaseModalProps = {
  open: boolean;
  onClose: () => void;
};

type ModalMap = Record<string, ComponentType<BaseModalProps>>;
type ModalState<TModals extends ModalMap> = {
  modal: keyof TModals | undefined;
  setModal: (modal: keyof TModals | undefined) => void;
  modalProps: any;
};

type CreatePushModalArgs<TModals extends ModalMap> = {
  modals: TModals;
};

export function createPushModal<TModals extends ModalMap>({
  modals,
}: CreatePushModalArgs<TModals>) {
  const store = create<ModalState<TModals>>((setState) => ({
    modal: undefined,
    modalProps: {},
    setModal: (modal) => setState({ modal }),
  }));

  const pushModal = <ModalKey extends keyof TModals>(
    modalName: ModalKey,
    args?: Omit<ComponentProps<TModals[ModalKey]>, "onClose" | "open">,
  ) => {
    store.setState({ modal: modalName, modalProps: args });
  };

  const ModalProvider = ({ children }) => {
    const { modal, setModal, modalProps } = store();
    return (
      <>
        {children}
        {Object.entries(modals).map(([key, Component]) => (
          <Component
            key={key}
            open={modal === key}
            onClose={() => setModal(undefined)}
            {...(modalProps ?? {})}
          />
        ))}
      </>
    );
  };

  return { store, pushModal, ModalProvider };
}
