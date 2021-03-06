import {
  ADD_WEBSITE_DEV_SERVICE,
  ADD_EMAIL_SUBSCRIPTION_INTEGRATION_SERVICE,
  ADD_FACEBOOK_PIXEL_INTEGRATION_SERVICE,
  ADD_GOOGLE_ANALYTICS_INTEGRATION_SERVICE,
  ADD_FACEBOOK_MESSENGER_INTEGRATION_SERVICE,
  ADD_BLOG_AND_BLOG_MANAGMENT_SERVICE
} from '../actions/servicesActions';

export default function services(state = {}, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case ADD_WEBSITE_DEV_SERVICE:
      newState.websiteDev = action.requestInfo;
      return newState;
    case ADD_EMAIL_SUBSCRIPTION_INTEGRATION_SERVICE:
      newState.emailSubscription = action.requestInfo;
      return newState;
    case ADD_FACEBOOK_PIXEL_INTEGRATION_SERVICE:
      newState.facebookPixel = action.requestInfo;
      return newState;
    case ADD_GOOGLE_ANALYTICS_INTEGRATION_SERVICE:
      newState.googleAnalytics = action.requestInfo;
      return newState;
    case ADD_FACEBOOK_MESSENGER_INTEGRATION_SERVICE:
      newState.facebookMessenger = action.requestInfo;
      return newState;
    case ADD_BLOG_AND_BLOG_MANAGMENT_SERVICE:
      newState.blogMan = action.requestInfo;
      return newState;
    default:
      return state;
  }
}
