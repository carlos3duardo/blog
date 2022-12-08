import { useCallback, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';
import { marked } from 'marked';

import { api } from '../../lib/axios';
import { ArticleContainer, Body, Header } from './styles';
import { timeAgo } from '../../utils/timeAgo';
import sanitize from 'sanitize-html';

type ArticleProps = {
  id: number;
  number: number;
  title: string;
  body: string;
  publishedAt: string;
  commentsCount: number;
  author: string;
  url: string;
};

export function Article() {
  const { issueNumber } = useParams();

  const [article, setArticle] = useState({} as ArticleProps);
  const [formattedText, setFormattedText] = useState('');

  const fetchArticle = useCallback(async () => {
    const repository = import.meta.env.VITE_GITHUB_REPOSITORY;

    const response = await api.get(
      `/repos/${repository}/issues/${issueNumber}`,
    );

    setArticle({
      id: response.data.id,
      number: response.data.number,
      title: response.data.title,
      body: response.data.body,
      publishedAt: response.data.created_at,
      commentsCount: response.data.comments,
      author: response.data.user.login,
      url: response.data.html_url,
    });

    const html = marked.parse(article.body);

    setFormattedText(sanitize(html));
  }, [article.body, issueNumber]);

  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

  return (
    <ArticleContainer>
      <Header>
        <nav>
          <NavLink to="/">
            <FaChevronLeft size={12} /> Voltar
          </NavLink>
          <a href={article.url} target="_blank" rel="noreferrer">
            Ver no Github <FaExternalLinkAlt size={12} />
          </a>
        </nav>
        <h1>{article.title}</h1>
        <ul>
          <li>
            <FaGithub size={16} /> {article.author}
          </li>
          <li>
            <FaCalendarDay size={16} />
            {timeAgo(article.publishedAt)}
          </li>
          <li>
            <FaComment size={16} />
            {article.commentsCount > 1
              ? `${article.commentsCount} comentários`
              : article.commentsCount === 1
              ? '1 comentário'
              : 'Nenhum comentário'}
          </li>
        </ul>
      </Header>
      <Body dangerouslySetInnerHTML={{ __html: formattedText }} />
    </ArticleContainer>
  );
}
