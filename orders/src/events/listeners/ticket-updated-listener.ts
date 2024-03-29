import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import {
  Listener,
  Subjects,
  TicketUpdatedEvent,
} from "@harishkrishnan1993/common";
import { Ticket } from "../../models/ticket";

export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
  queueGroupName: string = queueGroupName;

  async onMessage(data: TicketUpdatedEvent["data"], message: Message) {
    const ticket = await Ticket.findByEvent(data);
    if (!ticket) {
      throw new Error("Ticket not found");
    }

    ticket.set({ title: data.title, price: data.price });
    await ticket.save();

    message.ack();
  }
}
