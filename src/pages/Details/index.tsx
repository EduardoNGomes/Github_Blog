import {
  FaAngleLeft,
  FaCalendarDay,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import { DetailsContainer, DetailsHeader, DetailsMain } from './styles'

export const Details = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }
  return (
    <DetailsContainer>
      <DetailsHeader>
        <div>
          <button onClick={handleBack}>
            <FaAngleLeft size={16} /> voltar
          </button>

          <a href="" target="_blank">
            ver no github <FaExternalLinkAlt size={12} />
          </a>
        </div>

        <h1>JavaScript data types and data structures</h1>

        <ul>
          <li>
            <FaGithub size={18} />
            <span> cameronwll</span>
          </li>
          <li>
            <FaCalendarDay size={18} />
            <span>Há 1 dia</span>
          </li>
          <li>
            <FaComment size={18} />
            <span>5 comentários</span>
          </li>
        </ul>
      </DetailsHeader>

      <DetailsMain>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
        <h3>
          <a href="">Dynamic typing</a>
        </h3>
        <p>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>

        <div>
          <p>
            let foo = 42;
            <span>&#8725;&#8725; foo is now a number</span>
          </p>
          <p>
            foo = &#8220;bar &#8221;
            <span>&#8725;&#8725; foo is now a string</span>
          </p>
          <p>
            foo = true; <span>&#8725;&#8725; foo is now a boolean</span>
          </p>
        </div>
      </DetailsMain>
    </DetailsContainer>
  )
}
