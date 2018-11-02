# EDM-UI
This app was created using [Create React App](https://github.com/facebookincubator/create-react-app) and is based off of the UI in [quick-fix](https://github.com/heroku/quick-fix). The quick-fix app has been modified to produce events to demonstrate Event Driven Microservices on Heroku.

This app is part of a group of apps that all must be deployed in a particular order:
1. EDM-Relay (with Kafka Cluster)
1. EDM-UI
1. EDM-Stream
1. EDM-Dashboard

## Requirements
1. Heroku Account

## Setup
```
git clone git@github.com:trevorscott/edm-ui.git && cd edm-ui
heroku create $app_name
heroku buildpacks:set mars/create-react-app
heroku config:set EDM_RELAY_BACKEND_HOST=<hostname of your edm-relay app>
```

```
git push heroku master
```
