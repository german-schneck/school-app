export interface EmptyIndicatorProps {
  title: string;
  description: string;
  action?: {
    text: string;
    onPress: () => void;
  };
}
