export interface Data {
  id: number;
  createDate: number;
  emotionId: number;
  content: string;
}

export interface EditorState {
  createDate: Date;
  emotionId: number;
  content: string;
}