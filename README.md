# lening.li

Personal academic website of Lening Li — built with [Jekyll](https://jekyllrb.com/) and deployed to
GitHub Pages by the workflow in `.github/workflows/jekyll.yml`.

## Layout

| Path | What it is |
|---|---|
| `index.md`, `research.md`, `publications.md`, `education.md`, `travel.md`, `contact.md`, `cv.md` | Site pages (top-level, directory-style permalinks) |
| `_research/` | Research project pages (collection, rendered at `/research/<slug>/`) |
| `_bibliography/references.bib` | Publications, rendered by [jekyll-scholar](https://github.com/inukshuk/jekyll-scholar) (APA) |
| `files/cv/` | **Git submodule** → [leelening/curriculum_vitae](https://github.com/leelening/curriculum_vitae) (LaTeX sources). The deploy workflow pulls its latest `main`, compiles `CV_English.tex` and `cv_Chinese.tex`, and publishes only the two PDFs |
| `_data/navigation.yml` | Sidebar / mobile navigation |
| `_includes/`, `_layouts/`, `_sass/`, `assets/js` | Theme — derived from [Academic Pages](https://github.com/academicpages/academicpages.github.io) / [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/), with the editorial rail layout from [runyu-cathy-zhang.github.io](https://github.com/dianyu420376/runyu-cathy-zhang.github.io) |
| `_sass/_custom.scss` | Site-specific styles (buttons, updates grid, funding logos, bibliography) |
| `_sass/_variables.scss` | Colours and type — change the palette here |
| `images/` | Profile photo, favicons, project teasers (theme includes resolve images under `/images/`) |
| `assets/diagrams/`, `assets/logos/` | Research diagrams (SVG) and funding-agency logos |

## Working locally

```bash
git clone --recurse-submodules git@github.com:leelening/lening.li.git
cd lening.li
bundle install
bundle exec jekyll serve --livereload
```

Or with Docker: `docker compose up` (serves on http://localhost:4000).

The CV is compiled from LaTeX during deployment (`xu-cheng/latex-action`), always from the latest
commit of `curriculum_vitae`, so pushing to that repo is enough. The site rebuilds on every push here,
every Monday (scheduled), or on demand from the Actions tab (**Run workflow**). To pin the submodule
locally to the current CV commit:

```bash
git submodule update --remote files/cv && git commit -am "Bump CV submodule"
```

## Editing checklist

- **News** — the "Recent Updates" grid in `index.md`.
- **Publications** — add BibTeX to `_bibliography/references.bib` (types used: `@preprint`, `@inproceedings`, `@article`, `@inbook`, `@phdthesis`; add a `pdf = {…}` field for the PDF button).
- **Research projects** — one Markdown file per project in `_research/`, plus a card in `research.md`.
- **Sidebar** — `author:` block in `_config.yml`.
