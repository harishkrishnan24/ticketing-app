import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@harishkrishnan1993/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
