export interface ICoinGroup {
  label: string;
  coins: ICoin[];
}

export interface ICoin {
  id: number;
  kind: number;
  name: string;
}
