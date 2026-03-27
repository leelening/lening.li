# lening.li

[![Jekyll](https://img.shields.io/badge/Jekyll-CC0000?style=flat&logo=jekyll&logoColor=white)](https://jekyllrb.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat&logo=github&logoColor=white)](https://pages.github.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)

Personal academic website of Lening Li (郦乐宁), Ph.D., MBA Candidate.

🔗 **Live Site**: [https://leelening.github.io](https://leelening.github.io)

## About

This is a Jekyll-based personal website built with the [jekyll-shell-theme](https://github.com/tareqdandachi/jekyll-shell-theme). It serves as a professional portfolio showcasing:

- Academic background and education
- Research publications
- Research projects
- Professional experience
- Travel experiences

## Tech Stack

- **Static Site Generator**: [Jekyll](https://jekyllrb.com/)
- **Theme**: jekyll-shell-theme (terminal-inspired design)
- **Plugins**:
  - jekyll-sitemap
  - jekyll-seo-tag
  - jekyll/scholar (for academic publications)
  - jemoji
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions for automated deployment

## Features

- 📄 Automated publication list from BibTeX
- 🗺️ Interactive travel map (via Google Maps API)
- 📱 Responsive design using Bootstrap
- 🖼️ Image galleries with Swipebox
- 🔍 SEO optimized
- 🐳 Docker support for local development

## Local Development

### Option 1: Using Docker (Recommended)

```bash
# Clone the repository
git clone https://github.com/leelening/lening.li.git
cd lening.li

# Build and run with Docker Compose
docker-compose up

# Visit http://localhost:4000
```

### Option 2: Using Ruby/Bundler

#### Prerequisites

- Ruby 2.5+ with Bundler
- Jekyll and Bundler gems

```bash
# Install dependencies
gem install jekyll bundler

# Clone the repository
git clone https://github.com/leelening/lening.li.git
cd lening.li

# Install project dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Visit http://localhost:4000
```

## Project Structure

```
.
├── _config.yml              # Site configuration
├── _layouts/                # HTML layouts
├── _includes/               # Reusable HTML components
├── _posts/                  # Blog posts
├── _research/               # Research project pages
├── _bibliography/           # BibTeX references
├── _data/                   # Data files
├── assets/                  # Images, CSS, JS
├── index.md                 # Homepage
├── education.md             # Education page
├── publications.md          # Publications page
├── research.md              # Research overview
├── travel.md                # Travel page
├── contact.md               # Contact page
├── docker-compose.yml       # Docker development
└── Dockerfile               # Container configuration
```

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

## Author

**Lening Li**
- GitHub: [@leelening](https://github.com/leelening)

## License

This project is open source. The Jekyll theme is licensed under the terms specified by [jekyll-shell-theme](https://github.com/tareqdandachi/jekyll-shell-theme).

## Acknowledgments

- [Jekyll](https://jekyllrb.com/) - Static site generator
- [jekyll-shell-theme](https://github.com/tareqdandachi/jekyll-shell-theme) - Terminal-inspired theme
- [GitHub Pages](https://pages.github.com/) - Free hosting
- [Docker](https://www.docker.com/) - Containerization
