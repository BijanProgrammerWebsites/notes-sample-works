import type {Difficulty} from '~/enums/difficulty.enum';

export interface SampleWork {
    difficulty: Difficulty;
    title: string;
    isPriority?: boolean;
    isDone?: boolean;
    url?: string;
}
