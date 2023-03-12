import { createContext, useState } from "react";

export const ModalContext = createContext({
  showModal: false,
  setShowModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};
