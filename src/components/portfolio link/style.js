import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 items-center">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
        <Github size={24} />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
        <Linkedin size={24} />
      </a>
      <a href="mailto:your.email@example.com" className="hover:text-indigo-600 transition-colors">
        <Mail size={24} />
      </a>
    </div>
  );
}