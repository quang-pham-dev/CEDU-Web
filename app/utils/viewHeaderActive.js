import _ from './lodash';

export default function viewHeaderActive(currentLocation, pageType) {
  if (pageType === 'room') {
    if (_.includes(currentLocation.pathname, 'room/public')) {
      return ['active', '', '', ''];
    }
    if (_.includes(currentLocation.pathname, 'room/private')) {
      return ['', 'active', '', ''];
    }
    if (_.includes(currentLocation.pathname, 'room/me')) {
      return ['', '', 'active', ''];
    }
    if (_.includes(currentLocation.pathname, 'room/new')) {
      return ['', '', '', 'active'];
    }
    return ['', '', '', ''];
  }
  if (pageType === 'UICore') {
    if (_.includes(currentLocation.pathname, 'UI-guide-for-dev/child_example')) {
      return ['', 'active', ''];
    }
    if (_.includes(currentLocation.pathname, 'UI-guide-for-dev')) {
      return ['active', '', ''];
    }
    return ['','','']
  }
  return null;
}
