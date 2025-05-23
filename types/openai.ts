import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  // GPT_3_5 = 'gpt-3.5-turbo',
  // GPT_3_5_AZ = 'gpt-35-turbo',
  GPT_4 = 'gpt-4o',
  // GPT_4_32K = 'gpt-4-32k',
  // GPT_3_5_16K = 'gpt-3.5-turbo-16k'
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_4;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  // [OpenAIModelID.GPT_3_5]: {
  //   id: OpenAIModelID.GPT_3_5,
  //   name: 'GPT-3.5',
  //   maxLength: 12000,
  //   tokenLimit: 4000,
  // },
  // [OpenAIModelID.GPT_3_5_AZ]: {
  //   id: OpenAIModelID.GPT_3_5_AZ,
  //   name: 'GPT-3.5',
  //   maxLength: 12000,
  //   tokenLimit: 4000,
  // },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'gpt-4o',
    maxLength: 500000,
    tokenLimit: 128000,
  },
  // [OpenAIModelID.GPT_4_32K]: {
  //   id: OpenAIModelID.GPT_4_32K,
  //   name: 'GPT-4-32K',
  //   maxLength: 96000,
  //   tokenLimit: 32000,
  // },
  // [OpenAIModelID.GPT_3_5_16K]: {
  //   id: OpenAIModelID.GPT_3_5_16K,
  //   name: 'gpt-3.5-turbo-16k',
  //   maxLength: 48000,
  //   tokenLimit: 16000,
  // },
};
