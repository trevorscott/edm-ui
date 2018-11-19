# edm-ui
This app was created using [Create React App](https://github.com/facebookincubator/create-react-app) and is based off of the UI in [quick-fix](https://github.com/heroku/quick-fix). The quick-fix app has been modified to produce events to demonstrate event driven microservices on Heroku.

This app is part of a group of apps that all must be deployed in a particular order:
1. [edm-relay](https://github.com/trevorscott/edm-relay)
1. [edm-stream](https://github.com/trevorscott/edm-stream)
1. [edm-stats](https://github.com/trevorscott/edm-stats)
1. [edm-ui](https://github.com/trevorscott/edm-ui)
1. [edm-dashboard](https://github.com/trevorscott/edm-dashboard)

## Requirements
1. Heroku Account

## Setup
```
git clone git@github.com:trevorscott/edm-ui.git && cd edm-ui
heroku create $app_name
heroku buildpacks:set mars/create-react-app
heroku config:set REACT_APP_EDM_RELAY_BACKEND_HOST=<hostname of your edm-relay app>
```

```
git push heroku master
```

## Scale Up

Scale up your service to avoid sleeping dynos.

```
heroku ps:scale web=1:standard-1x
```

## Local Dev

```
npm start
```

## Custom Kafka Topic Names

If you deviated from the default kafka topic names for this demo you will need to set some extra config:

Production:

```bash
heroku config:set REACT_APP_CLICK_KAFKA_TOPIC=<name of your kafka topic for button clicks>
heroku config:set REACT_APP_PAGE_LOAD_KAFKA_TOPIC=<name of your kafka topic for page loads>
```

local:

```bash
export REACT_APP_CLICK_KAFKA_TOPIC=<name of your kafka topic for button clicks>
export REACT_APP_PAGE_LOAD_KAFKA_TOPIC=<name of your kafka topic for page loads>
```
