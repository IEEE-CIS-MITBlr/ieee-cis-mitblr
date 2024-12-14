# Steps to Update Articles on the Website

Follow these steps carefully to update articles on the website:

## 1. Add a New Article Entry in `data/articles.json`
Copy the following code template and paste it into the `data/articles.json` file:

```json
{
    "title": "",
    "description": "",
    "author": "",
    "link": "",
    "image": "images/articles/"
}
```

## 2. Upload the Thumbnail for the Article
- Save the thumbnail image for the article.
- Upload the file to the `images/articles/` directory.
- Replace `<filehere>` with the actual file name and extension (e.g., `article-thumbnail.jpg`).

## 3. Update All Fields in `articles.json`
- Fill in the following fields for the article:
  - `title`: Title of the article.
  - `description`: A brief description of the article.
  - `author`: Name of the author.
  - `link`: URL link to the article.
  - `image`: Complete file path, including the file name and extension, for the thumbnail (e.g., `images/articles/article-thumbnail.jpg`).

## 4. Ensure Proper Formatting in `articles.json`
- Verify that each article entry is correctly formatted.
- Separate multiple articles with commas (`,`).
- Check for syntax issues such as missing commas, braces, or quotation marks.

## 5. Handle Errors After Commit
- Commit your changes and push them to the repository.
- If the website displays an error message (e.g., "Failed to load articles"):
  - Restore `articles.json` to its previous commit.
  - Contact other team members or relevant support for help.

By following these steps, you can ensure smooth updates to the articles section of the website.
