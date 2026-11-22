"use client";

import { Mail } from "lucide-react";

export default function ContactForm({ email }: { email: string }) {
  return (
    <form className="contact-form resume-panel" onSubmit={(event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const subject = encodeURIComponent(String(data.get("subject")).trim());
      const body = encodeURIComponent(`${String(data.get("message")).trim()}\n\n${data.get("name")}\n${data.get("email")}`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }}>
      <h3>Write a message</h3>
      <label>Name<input name="name" autoComplete="name" required maxLength={100} /></label>
      <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      <label>Subject<input name="subject" required maxLength={150} /></label>
      <label>Message<textarea name="message" rows={5} required maxLength={1500} /></label>
      <button type="submit" className="primary-button"><Mail size={17} aria-hidden="true" /> Open email draft</button>
    </form>
  );
}
