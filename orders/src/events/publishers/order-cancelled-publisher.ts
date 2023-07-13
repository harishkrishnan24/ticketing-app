import {
  OrderCancelledEvent,
  Publisher,
  Subjects,
} from "@harishkrishnan1993/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
