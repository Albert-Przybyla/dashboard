import { status } from '../enums/status.enum';

export interface Order {
  id: string;
  Product: string;
  date: Date;
  quantity: number;
  status: status;
  Total: number;
}
