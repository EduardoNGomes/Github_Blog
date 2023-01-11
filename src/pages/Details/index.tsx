import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  FaAngleLeft,
  FaCalendarDay,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import { useNavigate, useParams } from 'react-router-dom'
import { IssueProps } from './IssueInterface'

import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { DetailsContainer, DetailsHeader, DetailsMain } from './styles'

export const Details = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [issue, setIssue] = useState({} as IssueProps)

  const handleBack = () => {
    navigate(-1)
  }

  const date = issue.created_at
    ? formatDistanceToNow(new Date(issue.created_at), {
        locale: ptBR,
      })
    : ''
  useEffect(() => {
    const getIssueData = async () => {
      const response = await axios.get(
        `https://api.github.com/repos/eduardongomes/Github_Blog/issues/${params.id}`,
      )

      setIssue(response.data)
    }
    getIssueData()
  }, [params])
  return (
    <DetailsContainer>
      <DetailsHeader>
        <div>
          <button onClick={handleBack}>
            <FaAngleLeft size={16} /> voltar
          </button>

          <a href={issue.html_url} target="_blank" rel="noreferrer">
            ver no github <FaExternalLinkAlt size={12} />
          </a>
        </div>

        <h1>{issue.title}</h1>

        <ul>
          <li>
            <FaGithub size={18} />
            <span>{issue.user ? issue.user.login : ''}</span>
          </li>
          <li>
            <FaCalendarDay size={18} />
            <span>{date}</span>
          </li>
          <li>
            <FaComment size={18} />
            <span>{issue.comments} comentários</span>
          </li>
        </ul>
      </DetailsHeader>

      <DetailsMain>
        <ReactMarkdown className="markdown">{issue.body}</ReactMarkdown>
      </DetailsMain>
    </DetailsContainer>
  )
}
