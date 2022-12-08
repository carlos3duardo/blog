import { useCallback, useEffect, useState } from 'react';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaBuilding,
  FaUserFriends,
  FaTwitter,
} from 'react-icons/fa';
import { api } from '../../lib/axios';

import { ProfileContainer, UserAvatar, UserInfo } from './styles';

type UserProps = {
  id: number;
  login: number;
  name: string;
  bio: string;
  company?: string;
  avatar: string;
  url: string;
  followers: number;
  twitter?: string;
};

export function Profile() {
  const [user, setUser] = useState({} as UserProps);

  const getProfile = useCallback(async () => {
    const username = import.meta.env.VITE_GITHUB_USERNAME;

    const response = await api.get(`/users/${username}`);

    setUser({
      id: response.data.id,
      login: response.data.login,
      name: response.data.name,
      bio: response.data.bio,
      company: response.data.company,
      avatar: response.data.avatar_url,
      url: response.data.html_url,
      followers: response.data.followers,
      twitter: response.data.twitter_username,
    });
  }, []);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <ProfileContainer>
      <UserAvatar>
        <img src={user.avatar} alt={user.name} />
      </UserAvatar>
      <UserInfo>
        <header>
          <h2>{user.name}</h2>
          <a href={user.url} target="_blank" rel="noreferrer">
            Github <FaExternalLinkAlt size={12} />
          </a>
        </header>

        <p>{user.bio}</p>

        <ul>
          <li>
            <a href={user.url} target="_blank" rel="noreferrer">
              <FaGithub size={16} /> {user.login}
            </a>
          </li>

          {user.company && (
            <li>
              <a href={user.url} target="_blank" rel="noreferrer">
                <FaBuilding size={16} /> {user.company}
              </a>
            </li>
          )}

          <li>
            <a
              href={`https://github.com/${user.login}?tab=followers`}
              target="_blank"
              rel="noreferrer"
            >
              <FaUserFriends size={16} />
              {user.followers} seguidores
            </a>
          </li>

          {user.twitter && (
            <li>
              <a
                href={`https://twitter.com/${user.twitter}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={16} /> {user.twitter}
              </a>
            </li>
          )}
        </ul>
      </UserInfo>
    </ProfileContainer>
  );
}
