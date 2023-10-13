/* eslint-disable no-unused-vars */
export enum EMicroservice {
  GATEWAY_USER_SERVICE = 'GATEWAY_USER_SERVICE',
  GATEWAY_SERVICE = 'GATEWAY_SERVICE',
  GATEWAY_TOKEN_SERVICE = 'GATEWAY_TOKEN_SERVICE',
  GATEWAY_AUTH_SERVICE = 'GATEWAY_AUTH_SERVICE',
  GATEWAY_ROLE_SERVICE = 'GATEWAY_ROLE_SERVICE',
  GATEWAY_PRODUCT_SERVICE = 'GATEWAY_PRODUCT_SERVICE',
  GATEWAY_CATEGORY_SERVICE = 'GATEWAY_CATEGORY_SERVICE',
  GATEWAY_USER_V2_SERVICE = 'GATEWAY_USER_V2_SERVICE',
}

export enum EKafkaGroup {
  USER_GROUP = 'USER_GROUP',
  GATEWAY_GROUP = 'GATEWAY_GROUP',
  TOKEN_GROUP = 'TOKEN_GROUP',
  AUTH_GROUP = 'AUTH_GROUP',
  ROLE_GROUP = 'ROLE_GROUP',
  PRODUCT_GROUP = 'PRODUCT_GROUP',
  CATEGORY_GROUP = 'CATEGORY_GROUP',
  USER_V2_GROUP = 'USER_V2_GROUP',
}
export enum EKafkaMessage {
  REQUEST_LOGIN = 'REQUEST_LOGIN',
  REQUEST_CREATE_USER = 'REQUEST_CREATE_USER',
  REQUEST_SEND_VERIFY_EMAIL = 'REQUEST_SEND_VERIFY_EMAIL',
  REQUEST_VERIFY_EMAIL = 'REQUEST_VERIFY_EMAIL',
  REQUEST_USER_BY_ID = 'REQUEST_USER_BY_ID',
  REQUEST_ADD_PRODUCT = 'REQUEST_ADD_PRODUCT',
  REQUEST_ADD_CATEGORY_PRODUCT = 'REQUEST_ADD_CATEGORY_PRODUCT',
  REQUEST_GET_ALL_CATEGORY = 'REQUEST_GET_ALL_CATEGORY',
  REQUEST_ADD_ATTRIBUTE_CATEGORY = 'REQUEST_ADD_ATTRIBUTE_CATEGORY',
  REQUEST_CREATE_ROLE = 'REQUEST_CREATE_ROLE',
  REQUEST_CREATE_USER_V2 = 'REQUEST_CREATE_USER_V2',
  REQUEST_FIND_ROLE_BY_NAME = 'REQUEST_FIND_ROLE_BY_NAME',
}
