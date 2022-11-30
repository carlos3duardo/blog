import {
  FaExternalLinkAlt,
  FaGithub,
  FaBuilding,
  FaUserFriends,
} from 'react-icons/fa';

import { ProfileContainer, UserAvatar, UserInfo } from './styles';

export function Profile() {
  return (
    <ProfileContainer>
      <UserAvatar>
        <img
          src="https://ui-avatars.com/api/?size=148&name=John+Doe"
          alt="John Doe"
        />
      </UserAvatar>
      <UserInfo>
        <header>
          <h2>Cameron Williamson</h2>
          <a href="#">
            Github <FaExternalLinkAlt size={12} />
          </a>
        </header>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ul>
          <li>
            <a href="#">
              <FaGithub size={16} /> username
            </a>
          </li>
          <li>
            <a href="#">
              <FaBuilding size={16} /> Company
            </a>
          </li>
          <li>
            <a href="#">
              <FaUserFriends size={16} />N seguidores
            </a>
          </li>
        </ul>
      </UserInfo>
    </ProfileContainer>
  );
}
