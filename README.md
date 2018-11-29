# edm-ui
This app was created using [Create React App](https://github.com/facebookincubator/create-react-app) and is based off of the UI in [quick-fix](https://github.com/heroku/quick-fix). The quick-fix app has been modified to produce events to demonstrate event driven microservices on Heroku.

This app is part of a group of apps that all must be deployed in a particular order:
1. [edm-relay](https://github.com/trevorscott/edm-relay)
1. [edm-stream](https://github.com/trevorscott/edm-stream)
1. [edm-stats](https://github.com/trevorscott/edm-stats)
1. [edm-ui](https://github.com/trevorscott/edm-ui)
1. [edm-dashboard](https://github.com/trevorscott/edm-dashboard)

![Event Driven Microservices with Apache Kafka on Heroku Demo Architecture](https://s3.amazonaws.com/octo-public/kafka-microservices.png "EDM")

## Requirements
1. Heroku Account

## Terraform Deploy

To deploy this entire demo with a single command see [edm-terraform](https://github.com/trevorscott/edm-terraform).

## Setup
```
git clone git@github.com:trevorscott/edm-ui.git && cd edm-ui
heroku create $appName
heroku buildpacks:set mars/create-react-app
heroku config:set REACT_APP_EDM_RELAY_BACKEND_HOST=https://<edm-relay-app_name>.herokuapp.com
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
npm install
npm start
```

## Custom Kafka Topic Names

If you deviated from the default kafka topic names for this demo you will need to set some extra config:

Production:

```bash
heroku config:set REACT_APP_CLICK_KAFKA_TOPIC=<custom-clicks-kafka-topic-name>
heroku config:set REACT_APP_PAGE_LOAD_KAFKA_TOPIC=<custom-pageload-kafka-topic-name>
```

local:

```bash
export REACT_APP_CLICK_KAFKA_TOPIC=<custom-clicks-kafka-topic-name-local>
export REACT_APP_PAGE_LOAD_KAFKA_TOPIC=<custom-pageload-kafka-topic-name-local>
```
