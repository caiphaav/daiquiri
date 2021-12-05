export interface IButtonWrapper {
  onClick?: (p?: any) => void;
  paddingHorizontal?: number;
  paddingVertical?: number;
  fontSize?: string;
}

export interface IButton extends IButtonWrapper {
  title: string;
}
