import siteMetadata from "@/lib/metadata";

const navLinks = [
  { href: siteMetadata.blogLink, title: "Blog" },
  { href: "/resume", title: "Resume" },
  { href: "/about", title: "About" },
  { href: "/projects", title: "Projects" },
];

export default navLinks;

export const dropDownMenuNavLinks = [
  { key: 1, href: "/", title: "Home", icon: "home", shortcut: "⌘+B" },
  { key: 2, href: "/resume", title: "Resume", icon: "resume", shortcut: "⌘+B" },
  { key: 3, href: "/about", title: "About", icon: "me", shortcut: "⌘+B" },
  {
    key: 4,
    href: "/projects",
    title: "Projects",
    icon: "wrenchAndHammer",
    shortcut: "⌘+B",
  },
  { key: 5, href: "", title: "", icon: "", shortcut: "" },
  {
    key: 6,
    href: "/timeline",
    title: "Journey",
    icon: "rocket",
    shortcut: "⌘+B",
  },
  {
    key: 7,
    href: "/stats",
    title: "Statistic",
    icon: "stats",
    shortcut: "⌘+B",
  },
  {
    key: 8,
    href: "/snippets",
    title: "Snippets",
    icon: "snippet",
    shortcut: "⌘+B",
  },
  {
    key: 9,
    href: "/reading",
    title: "Reading",
    icon: "reading",
    shortcut: "⌘+B",
  },
  {
    key: 10,
    href: "/watching",
    title: "Watching",
    icon: "watching",
    shortcut: "⌘+B",
  },
  { key: 11, href: "/tools", title: "Tools", icon: "tool", shortcut: "⌘+B" },
  { key: 12, href: "/quotes", title: "Quotes", icon: "quote", shortcut: "⌘+B" },
  {
    key: 13,
    href: "/photography",
    title: "Photography",
    icon: "photography",
    shortcut: "⌘+B",
  },
  { key: 14, href: "/now", title: "Now", icon: "now", shortcut: "⌘+B" },
];
