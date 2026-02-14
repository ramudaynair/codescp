import { SITE_NAME, SITE_DESCRIPTION } from './constants';

export function generateMetadata(title?: string, description?: string) {
  return {
    title: title ? `${title} | ${SITE_NAME}` : SITE_NAME,
    description: description || SITE_DESCRIPTION,
  };
}
