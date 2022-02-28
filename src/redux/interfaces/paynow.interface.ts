export interface IInvoiceReturn {
  id: number;
  order_id: string;
  order_description: string;
  price_amount: number;
  price_currency: string;
  pay_currency: string | null;
  ipn_callback_url: string;
  invoice_url: string;
  success_url: string;
  cancel_url: string;
  created_at: string;
  updated_at: string;
}
