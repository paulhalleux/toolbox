import React, { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { ThemeProvider, useTheme } from "../ThemeProvider";
import { modalStyles, ModalVariant } from "./Modal.styles";
import { clsx } from "clsx";

type ModalProps = PropsWithChildren<{
  open: boolean;
  onClose: () => void;
  position?: "center" | "top" | "bottom";
}> &
  ModalVariant &
  ComponentPropsWithoutRef<typeof motion.div>;

export function Modal({
  open,
  onClose,
  children,
  className,
  size,
  position,
  ...rest
}: ModalProps) {
  const { theme } = useTheme();
  const classes = modalStyles({ size, className });

  return createPortal(
    <ThemeProvider theme={theme}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className={clsx(
              "fixed inset-0 bg-[black] bg-opacity-50 z-50 backdrop-blur-[2px] p-6 flex",
              {
                "justify-center items-center": position === "center",
                "justify-center items-start": position === "top",
                "justify-center items-end": position === "bottom",
              },
            )}
            role="dialog"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.97, transformOrigin: "bottom" }}
              animate={{ scale: 1, transformOrigin: "bottom" }}
              exit={{ scale: 0.97, transformOrigin: "bottom" }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              className={classes}
              onClick={(e) => e.stopPropagation()}
              {...rest}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>,
    document.body,
  );
}
