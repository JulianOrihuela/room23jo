export enum SocialTypes {
  EMAIL,
  LINKEDIN,
  INSTAGRAM,
}

export interface Social {
  value: string;
  type: SocialTypes;
}

