import {
  FaExternalLinkAlt,
  FaGithub,
  FaBuilding,
  FaUserFriends,
} from 'react-icons/fa'
import { ProfileContainer, ProfileInformationContent } from './styles'

import { useEffect, useState } from 'react'
import axios from 'axios'

interface UserProps {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id?: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company?: string
  blog: string
  location: string
  email?: string
  hireable?: string
  bio: string
  twitter_username?: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export const Profile = () => {
  const [user, setUser] = useState({} as UserProps)

  const getData = async () => {
    const response = await axios.get(
      'https://api.github.com/users/eduardongomes',
    )

    setUser(response.data)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="User profile image" />

      <ProfileInformationContent>
        <div>
          <h1>{user.name}</h1>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            github <FaExternalLinkAlt size={12} />
          </a>
        </div>

        <p>{user.bio}</p>

        <ul>
          <li>
            <FaGithub size={18} /> <span>{user.login}</span>
          </li>
          <li>
            <FaBuilding size={18} />{' '}
            <span>{user.company ? user.company : 'Student'}</span>
          </li>
          <li>
            <FaUserFriends size={18} /> <span>{user.followers} seguidores</span>
          </li>
        </ul>
      </ProfileInformationContent>
    </ProfileContainer>
  )
}
