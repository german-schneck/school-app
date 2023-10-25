export interface ClassroomCardProps {
  id: number;
  name: string;
  description: string;
  onPress: (id: number) => void;
}
