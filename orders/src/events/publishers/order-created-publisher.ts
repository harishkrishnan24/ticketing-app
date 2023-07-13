import {
  OrderCreatedEvent,
  Publisher,
  Subjects,
} from "@harishkrishnan1993/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
