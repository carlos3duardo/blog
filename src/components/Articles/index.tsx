import { useCallback, useEffect, useState } from 'react';
import { TruncateLines } from 'react-truncate-lines';
import { format } from 'timeago.js';

import {
  Article,
  ArticlesContainer,
  ArticlesList,
  FilterContainer,
} from './styles';
import { api } from '../../lib/axios';

interface ArticleProps {
  id: number;
  number: number;
  title: string;
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

  const fetchArticles = useCallback(async () => {
    const repository = 'kataras/iris';

    const response = await api.get('/search/issues', {
      params: {
        q: `repo:${repository} type:issue state:open`,
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
          body: item.body,
          publishedAt: item.created_at,
        };
      }),
    );

    setAmount(response.data.total_count);
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  console.log(articles);
  return (
    <ArticlesContainer>
      <FilterContainer>
        <div>
          <h3>Publicações</h3>
          <span>
            {amount === 0
              ? 'Nenhuma publicação encontrada'
              : amount === 1
              ? '1 publicação'
              : `${amount} publicações`}
          </span>
        </div>
        <input type="text" placeholder="Buscar publicações" />
      </FilterContainer>

      <ArticlesList>
        {articles.map((article) => (
          <Article key={article.id}>
            <header>
              <h3>{article.title}</h3>
              <span>{format(new Date(article.publishedAt), 'pt_BR')}</span>
            </header>
            {article.body && (
              <p>
                <TruncateLines lines={5} ellipsis="...">
                  {article.body}
                </TruncateLines>
              </p>
            )}
          </Article>
        ))}
      </ArticlesList>
    </ArticlesContainer>
  );
}
