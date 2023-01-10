import { useState } from 'react'
import { PublicationsCard } from '../PublicationsCard'
import {
  PublicationsCardBox,
  PublicationsContainer,
  SearchContent,
} from './style'

export const Publications = () => {
  const [search, setSearch] = useState('')

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
        <PublicationsCard />
      </PublicationsCardBox>
    </PublicationsContainer>
  )
}
