let defaultClickTopicName;
let defaultPageLoadTopicName;

if(process.env.NODE_ENV == "development") {
  defaultClickTopicName = 'edm-ui-click-local'
  defaultPageLoadTopicName = 'edm-ui-pageload-local'
} else {
  defaultClickTopicName = 'edm-ui-click'
  defaultPageLoadTopicName = 'edm-ui-pageload'
}

export const CLICK_KAFKA_TOPIC     = process.env.REACT_APP_CLICK_KAFKA_TOPIC || defaultClickTopicName;
export const PAGE_LOAD_KAFKA_TOPIC = process.env.REACT_APP_PAGE_LOAD_KAFKA_TOPIC || defaultPageLoadTopicName;
