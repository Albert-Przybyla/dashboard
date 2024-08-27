import { status } from '../enums/status.enum';

export interface Order {
  id: string;
  product: string;
  date: Date;
  quantity: number;
  status: status;
  Total: number;
}
