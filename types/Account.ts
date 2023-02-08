export interface Account {
  id: string;
  name: string;
  initial_balance: number;
  notes?: string;
  button_message?: string;
  // @ts-expect-error
  handleFormSubmit?: (values?: any, { setSubmitting: any }) => void;
}
