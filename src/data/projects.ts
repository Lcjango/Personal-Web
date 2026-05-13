// Define a shared data structure to ensure media links are always synced
import { VIDEOGRAPHY_DATA } from './videography';
import { DESIGN_DATA } from './design';
import { DEV_DATA } from './dev';
import { PHOTOGRAPHY_PROJECTS } from './photography_projects';
import { NEW_MEDIA_DATA } from './new_media_operations';
import { AI_MODEL_DATA } from './ai_models';

export const PROJECT_DATA = [
  ...PHOTOGRAPHY_PROJECTS,
  ...VIDEOGRAPHY_DATA,
  ...DESIGN_DATA,
  ...DEV_DATA,
  ...NEW_MEDIA_DATA,
  ...AI_MODEL_DATA
];
