FROM jekyll/jekyll:latest

WORKDIR /srv/jekyll

# Install dependencies
COPY Gemfile* ./
RUN bundle install

# Copy site source
COPY . .

# Expose Jekyll port
EXPOSE 4000

# Start Jekyll server
CMD ["jekyll", "serve", "--host", "0.0.0.0", "--force_polling", "--livereload"]
