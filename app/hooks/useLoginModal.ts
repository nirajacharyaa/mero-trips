import { create } from "zustand";

interface LoginModalState {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useLoginModal = create<LoginModalState>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useLoginModal;
