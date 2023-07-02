import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@harishkrishnan1993/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
