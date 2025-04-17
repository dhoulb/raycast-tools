# Dave Raycast Tools

## Append to Clipboard

The `Append to Clipboard` command reads the current clipboard from the Raycast clipboard history, copies the currently selected text, and combines the two with a newline character between them.

## Publishing

To publish the extension as a Raycast extension, follow these steps:

1. Make sure you have the Raycast CLI installed. You can install it by running `npm install -g @raycast/cli`.
2. Run `npm run publish` to publish the extension.
3. The extension will be published to the Raycast store.

Alternatively, you can set up GitHub Actions to automate the publishing process. A sample workflow file is provided in `.github/workflows/publish.yml`.
