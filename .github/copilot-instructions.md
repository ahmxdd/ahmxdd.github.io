# al-folio Development Guide

## Project Overview

This is an **al-folio** academic website built with Jekyll, a static site generator. The theme is designed for academics to showcase publications, projects, blog posts, and CVs. Key technologies: Jekyll, Liquid templates, SCSS, Ruby plugins, and automated GitHub Actions deployment.

## Architecture & Core Components

### Jekyll Collections System
The site uses Jekyll collections (not just posts/pages):
- `_pages/`: Static pages with custom layouts via frontmatter `layout:` and `permalink:`
- `_posts/`: Blog posts following `YYYY-MM-DD-title.md` naming convention
- `_projects/`: Project showcase items (rendered via `_includes/projects.liquid`)
- `_news/`: News/announcement snippets (displayed in `_includes/news.liquid`)
- `_books/`: Book reviews/shelf items
- `_bibliography/papers.bib`: Publications in BibTeX format (processed by `jekyll-scholar`)

### Liquid Template Architecture
Content rendering uses modular Liquid includes:
- `_layouts/`: Page templates (e.g., `post.liquid`, `distill.liquid`, `cv.liquid`)
- `_includes/`: Reusable components (e.g., `projects.liquid`, `selected_papers.liquid`, `news.liquid`)
- Templates support conditional rendering (sidebar TOC, related posts, search functionality)

### Custom Ruby Plugins (`_plugins/`)
- `hide-custom-bibtex.rb`: Filters BibTeX keywords from display (removes `filtered_bibtex_keywords` from `_config.yml`)
- `google-scholar-citations.rb`, `inspirehep-citations.rb`: Fetch citation counts
- `external-posts.rb`: Integrate external blog feeds (Medium, etc.)
- Plugins run during Jekyll build, not in browser

## Critical Development Workflows

### Local Development
**Docker (recommended)**:
```bash
docker compose pull
docker compose up  # Site at http://localhost:8080
```

**Native (requires Ruby 3.3.5, Python 3.13)**:
```bash
bundle install
pip3 install --upgrade nbconvert  # For Jupyter notebook support
bundle exec jekyll serve --livereload
```

### Configuration Changes
- Edits to `_config.yml` require **full rebuild** (`Ctrl+C` then restart `jekyll serve`)
- All other changes (Markdown, SCSS, Liquid) auto-reload with `--livereload`
- Set `JEKYLL_ENV=production` before deployment builds to enable minification/optimization

### Deployment Pipeline
GitHub Actions auto-deploy on push to `main`:
1. **Build** (`.github/workflows/deploy.yml`):
   - Installs ImageMagick (for image processing)
   - Runs `bundle exec jekyll build` (generates `_site/`)
   - Purges unused CSS with PurgeCSS (`purgecss.config.js`)
2. **Deploy**: Pushes `_site/` to `gh-pages` branch
3. **GitHub Pages**: Serves from `gh-pages` (not `main`)

**Critical**: Repository settings must have:
- Actions: "Read and write permissions"
- Pages: Source = "Deploy from a branch", Branch = `gh-pages`

## Project-Specific Conventions

### Configuration Structure (`_config.yml`)
```yaml
url: https://<username>.github.io  # MUST match repo URL
baseurl:                            # Empty for user/org sites, /<repo-name>/ for project sites
title: blank                        # Uses first_name/last_name if blank
```
Wrong `url`/`baseurl` causes CSS/JS load failures after deployment.

### BibTeX Publications Workflow
1. Add entries to `_bibliography/papers.bib` with custom keywords:
   - `bibtex_show={true}`: Display on publications page
   - `abbr={ConferenceName}`: Show conference badge
   - `html={url}`, `pdf={path}`, `code={url}`: Add action buttons
   - `preview={image.gif}`: Thumbnail in list view
2. Superscripts in author names (e.g., `Einstein*†`) are stripped by `hide-custom-bibtex.rb`
3. Citations auto-update via `update-citations.yml` workflow (requires Google Scholar ID in `_data/socials.yml`)

### Social Media Integration (`_data/socials.yml`)
Define in YAML (order matters for display):
```yaml
email: you@example.com
scholar_userid: qc6CJjYAAAAJ
github_username: yourname
cv_pdf: /assets/pdf/cv.pdf
```
Rendered via `_includes/social.liquid` using Font Awesome/Academicons.

### CV Data (Dual Format Support)
**Preferred**: `assets/json/resume.json` ([JSON Resume](https://jsonresume.org/) standard)  
**Fallback**: `_data/cv.yml` (used if JSON absent)  
Delete JSON file to use YAML format.

### Styling & Themes
- Theme colors: `_sass/_themes.scss` (CSS variables for light/dark modes)
- Main styles: `_sass/_base.scss`, `_sass/_layout.scss`, `_sass/_variables.scss`
- Modifications to SCSS require Jekyll rebuild
- Dark mode toggling: Handled by JavaScript in `assets/js/theme.js`

## Special Features & Integrations

### Distill.pub-Style Posts
Use `layout: distill` with YAML frontmatter:
```yaml
authors:
  - name: Author Name
    url: https://...
    affiliations: {name: Institution}
bibliography: 2018-12-22-distill.bib  # Post-specific .bib file
toc:
  - name: Section Name
```
Supports inline citations, footnotes, interactive plots (Chart.js, Mermaid, TikZJax).

### Jupyter Notebook Embedding
- Place `.ipynb` files in `_jupyter/` (excluded from build by default)
- Convert via `jupyter nbconvert --to markdown notebook.ipynb`
- Enable with `jupyter: true` in post frontmatter
- GitHub Actions auto-converts with `nbconvert`

### Search Functionality
Enabled via `search_enabled: true` in `_config.yml`:
- Searches posts, socials, and BibTeX entries (configure with `posts_in_search`, `bib_search`)
- Powered by Algolia or lunr.js (check `_includes/scripts.liquid`)

## Common Pitfalls & Troubleshooting

### Deployment Errors
- **"Unknown tag 'toc'"**: Ensure deployment branch is `gh-pages`, not `main`
- **Broken CSS/JS**: Clear browser cache (`Shift+F5`) or check `url`/`baseurl` in `_config.yml`
- **Prettier failures**: Run `npx prettier . --write` before committing (or use IDE extension)

### Build Failures
- **"Zero vectors can not be normalized"**: Disable `related_blog_posts` or add `related_posts: false` to specific posts
- **Missing gems**: Run `bundle install` after pulling changes
- **Outdated dependencies**: Check FAQ.md for migration guides

### Custom Domain Setup
Add `CNAME` file to `main` branch with your domain (e.g., `foo.com`). Required for custom domains on GitHub Pages.

## Key Files to Reference
- **Build configs**: `Gemfile`, `_config.yml`, `.github/workflows/deploy.yml`
- **Customization docs**: `CUSTOMIZE.md`, `FAQ.md`, `INSTALL.md`
- **Example content**: `_posts/2018-12-22-distill.md` (full feature showcase)
- **Plugin reference**: `_plugins/*.rb` (custom Jekyll extensions)

## Development Best Practices
- Test locally with Docker before pushing (avoids Action failures)
- Use `docker compose -f docker-compose-slim.yml up` for faster builds (<100MB image)
- Check `lighthouse_results/` for performance metrics after deployment
- Run `bin/deploy` script for manual deployments (not recommended; prefer GitHub Actions)
