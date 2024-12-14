# Steps to Update Events on the Website

Follow these steps carefully to update events on the website:

## 1. Add a New Event Entry in `data/events.json`
Copy the following code template and paste it into the `data/events.json` file:

```json
{
    "title": "",
    "description": "", 
    "image": "images/events/", 
    "link": ""
}
```

## 2. Upload the Thumbnail for the Event
- Save the thumbnail image for the event.
- Upload the file to the `images/events/` directory.
- Replace `<file Here>` with the actual file name and extension (e.g., `event-thumbnail.jpg`).

## 3. Update All Fields in `events.json`
- Fill in the following fields for the event:
  - `title`: Title of the event.
  - `description`: A brief description of the event.
  - `image`: Complete file path, including the file name and extension, for the thumbnail (e.g., `images/events/event-thumbnail.jpg`).
  - `link`: URL link to the event or relevant page.

## 4. Ensure Proper Formatting in `events.json`
- Verify that each event entry is correctly formatted.
- Separate multiple events with commas (`,`).
- Check for syntax issues such as missing commas, braces, or quotation marks.

## 5. Handle Errors After Commit
- Commit your changes and push them to the repository.
- If the website displays an error message (e.g., "Failed to load articles"):
  - Restore `events.json` to its previous commit.
  - Contact other team members or relevant support for help.

By following these steps, you can ensure smooth updates to the events section of the website.
