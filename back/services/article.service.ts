import { Article } from '../schemas/article.schema';

export const getById = (id: string): Promise<any> => {
  return Article
    .findById(id)
    .lean()
    .exec();
};

export const getMany = (): Promise<any> => {
  return Article.find().lean().exec();
};
