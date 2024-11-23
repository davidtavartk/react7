export interface DropdownProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export interface FAQ {
  question: string;
  answer: string;
}
