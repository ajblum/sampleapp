FROM registry.access.redhat.com/ubi8/nodejs-16:latest

LABEL description="This is a sample node application that serves \
a helloworld message after successfully connecting to a postgres database"

# some environment variable used to configure the database connection

ENV PG_USER="myuser" \
    PG_HOST="localhost" \
    PG_DB="mydb" \
    PG_PASS="mypass"

EXPOSE 3000

# Add application sources
ADD app-src .

# Install the dependencies
RUN npm install

# Run script uses standard ways to run the application
CMD npm run -d start
