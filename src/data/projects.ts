// Define a shared data structure to ensure media links are always synced
import { VIDEOGRAPHY_DATA } from './videography';
import { DESIGN_DATA } from './design';
import { DEV_DATA } from './dev';
import { PHOTOGRAPHY_PROJECTS } from './photography_projects';
import { NEW_MEDIA_DATA } from './new_media_operations';
import { AI_MODEL_DATA } from './ai_models';

// Default popularity values based on project importance
const defaultPopularity: Record<string, number> = {
  'photo-1': 85, 'photo-2': 78, 'photo-3': 82, 'photo-4': 75,
  'video-1': 92, 'video-2': 88, 'video-3': 95, 'video-4': 80, 'video-5': 72,
  'd1': 88, 'd2': 82, 'd3': 85, 'd4': 76, 'd5': 80,
  'dev1': 78, 'dev2': 85, 'dev3': 90, 'dev4': 75,
  'new-media-1': 82, 'new-media-2': 80, 'new-media-3': 76, 'new-media-4': 74,
  'ai-1': 88, 'ai-2': 85, 'ai-3': 82, 'ai-4': 78
};

// Default date values based on project timeline
const defaultDates: Record<string, string> = {
  'photo-1': '2024-03-15', 'photo-2': '2024-01-20', 'photo-3': '2024-05-10', 'photo-4': '2024-07-05',
  'video-1': '2023-12-01', 'video-2': '2024-02-15', 'video-3': '2024-06-20', 'video-4': '2023-10-08', 'video-5': '2024-04-12',
  'd1': '2024-01-28', 'd2': '2023-11-15', 'd3': '2024-03-22', 'd4': '2024-05-30', 'd5': '2024-08-18',
  'dev1': '2024-04-01', 'dev2': '2024-06-15', 'dev3': '2024-07-20', 'dev4': '2024-08-10',
  'new-media-1': '2024-02-10', 'new-media-2': '2024-03-05', 'new-media-3': '2024-05-15', 'new-media-4': '2024-07-25',
  'ai-1': '2024-06-01', 'ai-2': '2024-07-10', 'ai-3': '2024-08-01', 'ai-4': '2024-08-20'
};

// Add default values to projects
const addDefaultValues = (projects: any[]) => {
  return projects.map(project => ({
    ...project,
    popularity: project.popularity ?? defaultPopularity[project.id] ?? 50,
    date: project.date ?? defaultDates[project.id] ?? '2024-01-01'
  }));
};

export const PROJECT_DATA = addDefaultValues([
  ...PHOTOGRAPHY_PROJECTS,
  ...VIDEOGRAPHY_DATA,
  ...DESIGN_DATA,
  ...DEV_DATA,
  ...NEW_MEDIA_DATA,
  ...AI_MODEL_DATA
]);
