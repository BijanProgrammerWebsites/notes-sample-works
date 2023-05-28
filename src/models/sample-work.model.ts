import type {Difficulty} from '~/enums/difficulty.enum';
import type {Category} from '~/enums/category.enum';

export interface SampleWork {
    category: Category;
    difficulty: Difficulty;
    title: string;
    isDone?: boolean;
    url?: string;
}
