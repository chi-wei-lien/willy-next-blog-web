import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
  }
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
});

export default contentLayerConfig;