export interface SelectorInputProps {
  error?: string;
  label: string;
  placeholder: string;
  value?: Date;
  onChange: (value: Date) => void;
}
