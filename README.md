# ad-scraper

Scrape ads from the interweb.

## Table of Contents

-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Initial setup](#initial-setup)
-   [Running](#running)
-   [Adding a new site](#adding-a-new-site)
-   [Customizing](#customizing)
-   [Contributing](#contributing)
-   [Versioning](#versioning)
-   [Authors](#authors)
-   [License](#license)
-   [See also](#see-also)
-   [Acknowledgments](#acknowledgments)

## Getting Started

Follow these instructions to get the scraper running on your local machine.

### Prerequisites

You will need node with npm installed on your machine. You can install it
from the official website https://nodejs.org.

### Initial setup

A step by step series of examples that tell you how to get a working copy of
this project to your local machine.

Clone the git repository:

```bash
git clone https://github.com/intelligenerator/ad-scraper.git
cd ad-scraper/
```

Then installed the dependencies (**Note:** This will take up some room as a copy
of Chromium will be downloaded to your machine):

```bash
npm install
```

Sites that should be scraped can be added to
[config/sites.json](config/sites.json). See
[Adding a new site](#adding-a-new-site) for detailed instructions.

Happy scraping!

## Running

To start the scraping process, run this in the project folder:

```bash
npm run scrape
```

You may add additional websites to scrape in
[config/sites.json](config/sites.json). To specify additional domains
of ad servers, modify [config/ad-servers.json](config/ad-servers.json).

## Adding a new site

You can add a site to the scraping list by editing
[config/sites.json](config/sites.json).

A site information object has the following fields (`*` are required fields):

-   \***name** : Name of the website (such as `"Google"`)
-   \***url** : URL of the website (such as `"www.google.com"`)
-   **cookies** : CSS selector of the accept cookies button to remove consent
    banner from screenshots
-   **additional**: Array of additional CSS selectors to screenshot

### Example

Here is a simple example of a site information object.

For more examples check out the example
[sites.example.json](config/sites.example.json).

```json
[
    ...,
    {
        "name": "NYTimes",
        "url": "https://www.nytimes.com/",
        "cookies": "[data-testid='GDPR-accept']"
    },
    ...
]
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) and
[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on our code of conduct, and
the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available,
see the [tags on this repository](https://github.com/intelligenerator/ad-scraper/tags).

## Authors

Ulysse McConnell - [umcconnell](https://github.com/umcconnell/)

See also the list of
[contributors](https://github.com/intelligenerator/ad-scraper/contributors)
who participated in this project.

## License

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

-   [Puppeteer docs](https://pptr.dev/) - Puppeteer
-   [Contributor Covenant](https://www.contributor-covenant.org/) - Code of Conduct
