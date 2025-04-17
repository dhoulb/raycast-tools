import { clipboard } from "@raycast/api";

async function appendToClipboard() {
  const currentClipboardContent = await clipboard.readText();
  const selectedText = await clipboard.readText();
  const newClipboardContent = `${currentClipboardContent}\n${selectedText}`;
  await clipboard.writeText(newClipboardContent);
}

appendToClipboard();
