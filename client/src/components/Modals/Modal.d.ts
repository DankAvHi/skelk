export type ModalProps = {
     closeFunction?: () => void;
     setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
     isOpen: boolean;
     children?: React.ReactNode;
     closeImage?: string;

     classNameBackground?: string;
     classNameBorder?: string;
     classNameButton?: string;
     classNameCloseImage?: string;
     classNameChildrenContainer?: string;
};

export type ModalCustomProps = Omit<ModalProps, "children">;
