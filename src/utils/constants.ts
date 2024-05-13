interface EmotionItemProps {
  emotionId: number;
  emotionName: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export const emotionList: EmotionItemProps[] = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "끔찍함" },
];