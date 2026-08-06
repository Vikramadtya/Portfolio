"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import siteMetadata from "@/lib/metadata";

export default function TerminalOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { text: `Welcome to ${siteMetadata.author}'s Terminal v1.0.0`, type: "system" },
    { text: "Type 'help' to see available commands.", type: "system" },
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const router = useRouter();

  // Listen for the backtick (`) key globally to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle on backtick, ignore if user is typing in a standard input/textarea
      if (e.key === "`" && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Auto-scroll to bottom and focus input when opened or history updates
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, history]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, { text: `guest@${siteMetadata.author.toLowerCase()}:~$ ${input}`, type: "command" }];

      switch (cmd) {
        case "help":
          newHistory.push({
            text: "Available commands:\n  about     - Learn more about me\n  projects  - View my work\n  contact   - Get in touch\n  clear     - Clear terminal\n  exit      - Close terminal\n  whoami    - Print user info",
            type: "system",
          });
          break;
        case "about":
          newHistory.push({ text: "Navigating to /about...", type: "system" });
          router.push("/about");
          setTimeout(() => setIsOpen(false), 500);
          break;
        case "projects":
          newHistory.push({ text: "Navigating to /projects...", type: "system" });
          router.push("/projects");
          setTimeout(() => setIsOpen(false), 500);
          break;
        case "guestbook":
          newHistory.push({ text: "Navigating to /guestbook...", type: "system" });
          router.push("/guestbook");
          setTimeout(() => setIsOpen(false), 500);
          break;
        case "contact":
          newHistory.push({ text: "Navigating to /contact...", type: "system" });
          router.push("/contact");
          setTimeout(() => setIsOpen(false), 500);
          break;
        case "whoami":
          newHistory.push({ text: "guest user (unauthenticated)", type: "system" });
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        case "exit":
          setIsOpen(false);
          setInput("");
          return;
        case "":
          break; // Do nothing for empty enter
        default:
          if (cmd.startsWith("cd ")) {
            newHistory.push({ text: `cd: no such file or directory: ${cmd.split(" ")[1]}`, type: "error" });
          } else {
             newHistory.push({ text: `command not found: ${cmd}`, type: "error" });
          }
      }

      setHistory(newHistory);
      setInput("");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed top-0 left-0 w-full h-[60vh] z-[100] bg-[#1e1e1e]/95 backdrop-blur-md shadow-2xl border-b border-gray-700/50 flex flex-col font-mono text-sm sm:text-base text-gray-200 overflow-hidden"
          style={{ fontFamily: "'Fira Code', 'Courier New', monospace" }}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-gray-700 select-none">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer" onClick={() => setIsOpen(false)} />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-gray-400 text-xs text-center flex-grow">bash — {siteMetadata.author.toLowerCase()}</div>
          </div>

          {/* Terminal Body */}
          <div className="flex-grow p-4 overflow-y-auto overflow-x-hidden scrollbar-hide" onClick={() => inputRef.current?.focus()}>
            {history.map((line, i) => (
              <div
                key={i}
                className={`mb-1 whitespace-pre-wrap ${
                  line.type === "error" ? "text-red-400" : line.type === "command" ? "text-blue-300" : "text-green-400"
                }`}
              >
                {line.text}
              </div>
            ))}
            
            <div className="flex items-center mt-2">
              <span className="text-blue-300 mr-2">guest@{siteMetadata.author.toLowerCase()}:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="flex-grow bg-transparent outline-none border-none text-gray-200 caret-white"
                autoComplete="off"
                spellCheck="false"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
