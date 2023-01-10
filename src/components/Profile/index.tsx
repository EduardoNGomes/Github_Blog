import {
  FaExternalLinkAlt,
  FaGithub,
  FaBuilding,
  FaUserFriends,
} from 'react-icons/fa'
import { ProfileContainer, ProfileInformationContent } from './styles'

import imgUser from '../../assets/avatar.png'

export const Profile = () => {
  return (
    <ProfileContainer>
      <img src={imgUser} alt="User profile image" />

      <ProfileInformationContent>
        <div>
          <h1>cameron williamson</h1>
          <a href="" target="_blank">
            github <FaExternalLinkAlt size={12} />
          </a>
        </div>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ul>
          <li>
            <FaGithub size={18} /> <span>cameronwll</span>
          </li>
          <li>
            <FaBuilding size={18} /> <span>Rocketseat</span>
          </li>
          <li>
            <FaUserFriends size={18} /> <span>32 seguidores</span>
          </li>
        </ul>
      </ProfileInformationContent>
    </ProfileContainer>
  )
}
