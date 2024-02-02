
![Logo](https://github.com/bupd/webcrawler/blob/main/crawler.png)


# Webcrawler

This Node.js web crawler is designed to fetch and analyze links from a specified website. It focuses on exploring the links provided on the main page, recursively navigating through linked pages, and gathering information about link occurrences. The application is built with Node.js and includes a comprehensive test suite to ensure its reliability.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://bupd.github.io/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bupd)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/prasanthbupd)


## Run Locally

Clone the project

```bash
  git clone https://github.com/bupd/webcrawler.git
```

Go to the project directory

```bash
  cd webcrawler
```

Install dependencies

```bash
  npm install
```

Start the crawler

```bash
  npm run start <Website Link Here>
```


## Demo


![Demo](https://github.com/bupd/webcrawler/blob/main/2024-02-02_17-57-53.gif)
## Features

- **Link Fetching:** The application start fetching links from the main page of the provided website.
- **Recursive Crawling:** It recursively searches through all the links on the linked pages, focusing on the main domain and excluding external links and subdomains.
- **Link Occurrences:** The application counts and displays how many times a link is mentioned and referenced across the website.
- **Command-Line Execution:** Run the application by executing `npm run start <Website Link>` to initiate the crawling process.


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Contributing

Contributions are welcomed! If you find issues or have suggestions for improvements, please open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch: git checkout -b feature/new-feature.
3. Commit your changes: git commit -m 'Add new feature'.
4. Push to the branch: git push origin feature/new-feature.
5. Open a pull request.



## Support

For support, email bupdprasanth@gmail.com or join our [Discord](https://discord.gg/JJA8XC3BWd) channel.


## Acknowledgements

 - The application leverages [Node.js](https://nodejs.org/) for its functionality. Happy crawling!
