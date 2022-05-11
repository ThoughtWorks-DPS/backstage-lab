/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Content, Page, Header } from '@backstage/core-components';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { CreateCard } from '../CreateAppCard';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 200,
  },
  paper: {
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
  },
}));

export const HomePage = () => {
  const classes = useStyles();
  return (
    <Page themeId="home">
      <Header
        title="Welcome to the Backstage Developer Portal"
        subtitle="A developer experience platform providing a hub to identify and discover technologies."
      />

      <Content>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <CreateCard
                title="Create App"
                description="Create new software components using standard templates"
                action="Create App"
                href="/create"
              />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <CreateCard
                title="Software Catalog"
                description="View tw's software components"
                action="Software Catalog"
                href="/catalog"
              />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <CreateCard
                title="Register An Existing App"
                description="Register your existing application to track it in the tw dev portal"
                action="Register Existing App"
                href="/catalog-import"
              />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <CreateCard
                title="Ask the Community"
                description="Join our Slack channel to ask questions and get support from the Dev Portal community"
                action="Join the Conversation"
                href="_blank"
              />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <CreateCard
                title="Request A New Feature"
                description="Reach out to the Engineering team to request a new feature for the Dev Portal"
                action="Submit A Request"
                href="_blank"
              />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper className={classes.paper}>
              <CreateCard
                title="Build Custom Plugin"
                description="Learn how to build a custom plugin to contribute back to the tw dev portal"
                action="Custom Plugin Guide"
                href="https://backstage.io/docs/plugins/create-a-plugin"
              />
            </Paper>
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};

export const homePage = <HomePage />;
