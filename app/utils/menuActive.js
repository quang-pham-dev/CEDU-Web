import _ from './lodash';

export default function menuActive(currentLocation) {
  if (_.includes(currentLocation.pathname, 'room')) {
    return ['active', '', ''];
  }
  if (_.includes(currentLocation.pathname, 'document')) {
    return ['', 'active', ''];
  }
  if (_.includes(currentLocation.pathname, 'calendar')) {
    return ['', '', 'active'];
  }
  if (_.includes(currentLocation.pathname, 'UI-guide-for-dev')) {
    return ['', '', '', 'active'];
  }
  return ['', '', '', ''];
}
