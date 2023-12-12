import { Post } from '~~/types/Post.type';

export default () => {
  const config = useRuntimeConfig();
  const wpBlog = config.public.wpBlog;

  const get = async <T>(endpoint: string) => {
    return useFetch<T>(`${wpBlog}/wp-json/wp/v2/${endpoint}`);
  };

  const getPosts = async (
    category?: number,
    page: number = 1,
    perPgae: number = 20,
    fields: string = 'author,id,excerpt,title,link,slug,date'
  ) => {
    let query: string = `posts?page=${page}&per_page=${perPgae}&_embed=1`;
    if (category) {
      query += `&categories=${category}`;
    }
    return get<Post[]>(query);
  };

  const getPost = async (slug: string) => {
    return useFetch<any>(`${wpBlog}/wp-json/wp/v2/posts?slug=${slug}&_embed=1`);
  };

  const getCatgories = async (fields: string = 'name,slug,count') => {
    return useFetch(`${wpBlog}/wp-json/wp/v2/categories`);
  };

  const getCatgory = async (slug: string) => {
    return useFetch<any>(`${wpBlog}/wp-json/wp/v2/categories?slug=${slug}`);
  };

  //Custom Post Type Projects
  const getProjects = async () => {
    return useFetch<any>(`${wpBlog}/wp-json/wp/v2/projects`);
  };

  const getProject = async (slug: string) => {
    return useFetch<any>(
      `${wpBlog}/wp-json/wp/v2/projects/?slug=${slug}&_embed=1`
    );
  };

  return {
    get,
    getPosts,
    getPost,
    getCatgories,
    getCatgory,
    getProjects,
    getProject,
  };
};
