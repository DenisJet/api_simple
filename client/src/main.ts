import "./style.css";
import { contactForm } from "./contactForm.ts";

contactForm(document.querySelector<HTMLFormElement>(".contactForm")!);
