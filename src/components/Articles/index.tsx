import { useCallback, useEffect, useState } from 'react';
import sanitizeHtml from 'sanitize-html';
import slugify from 'react-slugify';
import { format } from 'timeago.js';
import { Article, ArticlesContainer, ArticlesList } from './styles';
import { api } from '../../lib/axios';
import ChopLines from 'chop-lines';
import { marked } from 'marked';
import { NavLink } from 'react-router-dom';
import { SearchInput } from '../../pages/Home/components/SearchInput';
import { timeAgo } from '../../utils/timeAgo';

interface ArticleProps {
  id: number;
  number: number;
  title: string;
  slug: string;
  body: string;
  publishedAt: string;
}

type IssueProps = {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
};

export function Articles() {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [amount, setAmount] = useState(0);

  const getArticles = useCallback(async (query: string = '') => {
    const username = import.meta.env.VITE_GITHUB_USERNAME;
    const repository = import.meta.env.VITE_GITHUB_REPOSITORY;

    const response = await api.get('/search/issues', {
      params: {
        q: `${query} repo:${username}/${repository} type:issue state:open`,
        page: 1,
        per_page: 10,
      },
    });

    setArticles(
      response.data.items.map((item: IssueProps) => {
        return {
          id: item.id,
          number: item.number,
          title: item.title,
          slug: slugify(item.title),
          body: item.body,
          publishedAt: item.created_at,
        };
      }),
    );

    setAmount(response.data.total_count);
  }, []);

  useEffect(() => {
    getArticles();
  }, [getArticles]);

  return (
    <ArticlesContainer>
      <SearchInput articlesCount={amount} getArticles={getArticles} />
      <ArticlesList>
        {articles.map((article) => {
          const html = marked.parse(article.body);

          const sanitizedText = sanitizeHtml(html, {
            allowedTags: ['b', 'h1', 'h2', 'h3'],
            disallowedTagsMode: 'discard',
          });

          return (
            <Article key={article.id}>
              <NavLink to={`article/${article.number}/${article.slug}`}>
                <header>
                  <h3>{article.title}</h3>
                  <span>{timeAgo(article.publishedAt)}</span>
                </header>
                {article.body && (
                  <div className="excerpt">
                    <ChopLines lines={4} lineHeight={24}>
                      <div
                        dangerouslySetInnerHTML={{ __html: sanitizedText }}
                      ></div>
                    </ChopLines>
                  </div>
                )}
              </NavLink>
            </Article>
          );
        })}
      </ArticlesList>
    </ArticlesContainer>
  );
}
