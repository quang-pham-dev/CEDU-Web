/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'cedu.containers.HomePage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage:
      'Welcome! Please try to start your first room and invite more people',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Try to find your friends here',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
