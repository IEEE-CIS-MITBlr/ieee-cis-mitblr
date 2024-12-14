# Steps to Update Member Profiles on the Website

Follow these steps carefully to update member profiles on the website:

## 1. Add a New Member Entry in `data/members.json`
Copy the following code template and paste it into the `data/members.json` file:

```json
{
    "name": "",
    "image": "images/members/defaultProfilePicture.png",
    "email": ""
}
```

## 2. Upload the Photo for the Member
- Save the photo of the member.
- Upload the file to the `images/members/` directory.
- Replace `defaultProfilePicture.png` with the actual file name and extension (e.g., `john-doe.jpg`).

## 3. Update All Fields in `members.json`
- Fill in the following fields for the member:
  - `name`: Full name of the member.
  - `image`: Complete file path, including the file name and extension, for the profile picture (e.g., `images/members/john-doe.jpg`).
  - `email`: Email address of the member.

## 4. Ensure Proper Formatting in `members.json`
- Verify that each member entry is correctly formatted.
- Separate multiple members with commas (`,`).
- Check for syntax issues such as missing commas, braces, or quotation marks.

## 5. Handle Errors After Commit
- Commit your changes and push them to the repository.
- If the website displays an error message (e.g., "Failed to load articles"):
  - Restore `members.json` to its previous commit.
  - Contact other team members or relevant support for help.

By following these steps, you can ensure smooth updates to the members section of the website.
