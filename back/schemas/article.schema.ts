import mongoose, { Schema } from 'mongoose';

const MODEL_NAME = 'Article';

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  body: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: []
  },
}, {
  timestamps: {
    createdAt: true
  }
});

export const Article = mongoose.model(MODEL_NAME, ArticleSchema);
