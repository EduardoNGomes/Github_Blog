import { useState, useEffect } from 'react'
import { PublicationsCard } from '../PublicationsCard'
import {
  PublicationsCardBox,
  PublicationsContainer,
  SearchContent,
} from './style'

import axios from 'axios'
import { PublicationsProps } from './interface'
import { useNavigate } from 'react-router-dom'

export const Publications = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [publications, setPublications] = useState<PublicationsProps[]>([])

  const handleDetails = (id: string) => {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    const getRepoData = async () => {
      const response = await axios.get('https://api.github.com/search/issues', {
        params: { q: `repo:eduardongomes/Github_Blog ${search}` },
      })

      setPublications(response.data.items)
    }
    getRepoData()
  }, [search])

  return (
    <PublicationsContainer>
      <SearchContent>
        <div>
          <h2>Publicações</h2>
          <p>6 publicações</p>
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchContent>

      <PublicationsCardBox>
        {publications.map((publication) => (
          <PublicationsCard
            key={String(publication.id)}
            publicationData={publication}
            onClick={() => handleDetails(String(publication.number))}
          />
        ))}
      </PublicationsCardBox>
    </PublicationsContainer>
  )
}
