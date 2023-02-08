export interface Account {
  id: string;
  name: string;
  initial_balance: number;
  notes?: string;
  button_message?: string;
  handleFormSubmit?: (values?: any) => void;
}
