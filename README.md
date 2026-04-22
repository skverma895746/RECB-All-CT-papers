# RECB CT Papers Website

This repository contains a static website for **Rajkiya Engineering College, Bijnor** that helps students access class test (CT) papers branch-wise and year-wise in one place.

The site is built with plain **HTML, CSS, and JavaScript** and uses Google Drive links for papers plus Google Forms for paper submission and contact.

## Features

- Home page with navigation to all branches and years
- Separate pages for IT, EE, and CE across 1st to 4th year
- Shared styling and JavaScript for consistent UI
- Placeholder handling for papers that are not available yet
- Add-new-paper page linked to a Google Form
- Contact page with embedded Google Form
- Responsive layout for desktop and mobile

## Project Structure

```text
.
|-- index.html
|-- addNewPaper.html
|-- contactUs.html
|-- firstYearIT.html
|-- firstYearEE.html
|-- firstYearCE.html
|-- secondYearIT.html
|-- secondYearEE.html
|-- secondYearCE.html
|-- thirdYearIT.html
|-- thirdYearEE.html
|-- thirdYearCE.html
|-- fourthYearIT.html
|-- fourthYearEE.html
|-- fourthYearCE.html
`-- assets
    |-- css
    |   |-- index.css
    |   |-- allYear.css
    |   |-- addNewPaper.css
    |   `-- contactUs.css
    `-- js
        |-- index.js
        `-- allYear.js
```

## Pages

- `index.html`: Landing page with navigation to all year/branch pages
- `addNewPaper.html`: External Google Form link for submitting new papers
- `contactUs.html`: Embedded Google Form for contact
- `firstYear*.html` to `fourthYear*.html`: CT paper pages for each branch and academic year

## How It Works

- Each branch/year page contains CT paper links, usually hosted on Google Drive
- If a paper link is empty (`href=""`) or uses `#`, JavaScript shows an "available soon" message instead of navigating
- The home page greeting changes based on the current time
- Shared CSS files manage the overall layout and responsive behavior

## Run Locally

Because this is a static site, you can open it directly in a browser:

1. Open `index.html`

For a smoother local preview, you can also serve it with a simple local server. Example with Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Updating CT Papers

To add or update papers:

1. Open the relevant year page such as `secondYearIT.html`
2. Find the subject link you want to update
3. Replace the empty `href=""` with the paper URL
4. Save the file and refresh the browser

Example:

```html
<a href="https://drive.google.com/your-paper-link" target="_blank">CT-1 COA</a>
```

## Styling and Scripts

- `assets/css/index.css`: Styles for the home page
- `assets/css/allYear.css`: Styles for branch/year paper pages
- `assets/css/addNewPaper.css`: Styles for the add paper page
- `assets/css/contactUs.css`: Styles for the contact page
- `assets/js/index.js`: Greeting logic and unavailable-link popup on the home page
- `assets/js/allYear.js`: Unavailable-link popup on year pages

## Notes

- Some text in the current HTML appears to have character-encoding issues in a few places
- Images and many paper resources are loaded from external URLs
- No build tool or package manager is required for this project

## Future Improvements

- Fix UTF-8 encoding issues in Hindi text and symbols
- Move repeated header/footer markup into reusable components if the project later adopts a framework
- Add a proper favicon and local logo asset
- Add deployment instructions for GitHub Pages or Netlify

## License

No license file is currently included in this repository.
