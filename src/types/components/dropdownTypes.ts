interface DropdownProps {
  placeholder: string;
  options: Array<DropdownOptionType>;
};

interface DropdownOptionType {
  label: string;
  value: string;
};

export type { DropdownProps, DropdownOptionType };