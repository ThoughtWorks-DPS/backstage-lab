![headline](docs/assets/headline.png)

# ThoughtWorks Backstage

This is a base application of the backstage open source project.  https://backstage.io/

Backstage is an open platform for building developer portals. Powered by a centralized software catalog, Backstage restores order to your microservices and infrastructure and enables your product teams to ship high-quality code quickly — without compromising autonomy.

Backstage unifies all your infrastructure tooling, services, and documentation to create a streamlined development environment from end to end.

Out of the box, Backstage includes:

Backstage Software Catalog for managing all your software (microservices, libraries, data pipelines, websites, ML models, etc.)

Backstage Software Templates for quickly spinning up new projects and standardizing your tooling with your organization’s best practices

Backstage TechDocs for making it easy to create, maintain, find, and use technical documentation, using a "docs like code" approach

Plus, a growing ecosystem of open source plugins that further expand Backstage’s customizability and functionality

# Key Concepts
- Backstage works as a decentralized system based on YAML files.  These files are generally kept in each piece of software's codebase and are referenced by Backstage.  This allows for each team/individual to have local ownership of the descriptions and documentation for their software.  

- Items are added to the Software Catalog and are associated with one of seven 'Kinds', Component, System, API, Group, User, Resource, Location, Domain.  Custom Kinds can be added along with changing the show name of the base 7.  Items can be added through the UI by using a Template or by Registering Existing API.  They can also be hard coded into the app-config.yaml file.  These items should be limited to things that rarely change like Location, Group(Team), or System.
```
catalog:
  rules:
    - allow: [Component, System, API, Group, User, Resource, Location]
  locations:
    # Backstage example components
    - type: url
      target: https://github.com/backstage/backstage/blob/master/packages/catalog-model/examples/all-components.yaml
```

- Backstage requires a Postgres SQL database.  This is configured in the app-config.yaml file.  On Backstage starting, it will check the database for the needed Databases/Tables.  If these do not exist it will create them automatically.
```
# config options: https://node-postgres.com/api/client
database:
  client: pg
  connection:
    host: 34.72.61.151
    port: 5432
    user: someuser
    password: $omePassW0rd

```


# Usage
This repo has all of the necessary components to demo backstage or use as a starter kit for deployment.


## How to run application locally
Clone the repo and run the following commands from the root directory

```
# Install yarn
yarn install

# this will start the front and backend along with opening a browser window to http://localhost:3000
yarn dev
```

## How to create an Image to deploy
Clone the repo and follow the steps below

```
# Install yarn in root directory
yarn install

# move to the backend directory
cd packages/backend

# install yarn
yarn install

# tsc outputs type definitions to dist-types/ in the repo root, which are then consumed by the build
yarn tsc

# Build all packages and in the end bundle them all up into the packages/backend/dist folder.
yarn build
```

Now build the image.  The Dockerfile is located at packages/backend/Dockerfile, but needs to be executed with the root of the repo as the build context, in order to get access to the root yarn.lock and package.json, along with any other files that might be needed, such as .npmrc

From the root directory now run:

```
docker image build . -f packages/backend/Dockerfile --tag backstage
```

That should be it.  To try out the image locally run:
```
docker run -it -p 7000:7000 backstage
```

For more information check out the Backstage site - https://backstage.io/docs/deployment/
