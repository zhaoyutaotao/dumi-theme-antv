import React from 'react';
import { Demo, Example, ExampleTopic } from '../../types';

export interface AnnouncementProps {
  message: React.ReactNode;
  localStorageId: string;
  bannerId: string;
  style?: React.CSSProperties;
}

export interface GalleryPageContentProps {
  /**
   * 案例主题列表
   */
  exampleTopics: ExampleTopic[];
}

export interface LeftMenuProps {
  /**
   * 案例主题列表
   */
  exampleTopics: ExampleTopic[];
}

export interface ExampleWithTopic extends Example {
  targetTopic: ExampleTopic;
}

export interface DemoCardProps {
  demo: Demo;
  topicId: string;
  exampleId: string;
}

export interface LeftMenuProps {
  /**
   * 案例主题列表
   */
  exampleTopics: ExampleTopic[];
}
