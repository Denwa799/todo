export interface IAppTaskCard {
  title: string;
  subtitle: string;
  color?: string;
  checked?: boolean;
  onChange: () => void;
}
