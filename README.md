# ckan-es

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A sample data catalog site, inspired by [CKAN](https://ckan.org/), built with Deno and vanilla JavaScript. This project serves as a lightweight front-end demonstration for browsing and filtering open datasets.

## Live Demo

**[https://ckan-es.vercel.app/](https://ckan-es.vercel.app/)**

The demo showcases a typical data catalog interface where users can see a list of datasets, filter them by categories like organization or format, and click through to view detailed information about each dataset.

## Features

- **Dataset Discovery:** Browse a catalog of open datasets loaded from a local CSV file.
- **Detailed Views:** Access a dedicated page for each dataset with all its metadata.
- **Client-Side Filtering:** Filter data instantly by Organization, Group, Tag, and Format.
- **Simple Architecture:** A minimal Deno server for static files with all logic handled in the front-end.

## Getting Started

### Prerequisites

Ensure you have [Deno](https://deno.land/) installed on your system.

### Running the Server

1.  Clone the repository.
2.  Run the server from the project root:
    ```bash
    deno run -A ckan.js
    ```
3.  Open your browser to `http://localhost:8081`.

## Data Source

This project uses a static sample file, `static/datasets.csv`, as its data source.

All data fetching and manipulation logic is handled client-side within the `api()` async function in `static/index.html`. To connect to a live API, you will need to modify this function to fetch data from your desired endpoint.

## Acknowledgements

This project is inspired by the [Comprehensive Knowledge Archive Network (CKAN)](https://ckan.org/). The user interface and sample data are provided by Code for FUKUI.

## License

MIT License — see [LICENSE](LICENSE).