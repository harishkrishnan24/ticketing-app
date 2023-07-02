import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@harishkrishnan1993/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
