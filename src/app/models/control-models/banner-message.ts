import { BannerType } from '../../enums';

export interface BannerMessage {
    type: BannerType;
    message: string;
    timeout: number;
  }
