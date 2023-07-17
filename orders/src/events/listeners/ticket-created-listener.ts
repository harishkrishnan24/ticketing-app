import {
  Listener,
  Subjects,
  TicketCreatedEvent,
} from "@harishkrishnan1993/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { Ticket } from "../../models/ticket";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: TicketCreatedEvent["data"], message: Message) {
    const { title, price, id } = data;
    const ticket = Ticket.build({ title, price, id });
    await ticket.save();
    message.ack();
  }
}
