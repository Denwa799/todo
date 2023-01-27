export interface IAppTaskCard {
  title: string;
  subtitle: string;
  checked?: boolean;
  onChange: () => void;
}
