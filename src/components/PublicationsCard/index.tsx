import { PublicationsCardContent } from './styles'
import ReactMarkdown from 'react-markdown'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function PublicationsCard({ publicationData, ...rest }: any) {
  const date = formatDistanceToNow(new Date(publicationData.created_at), {
    locale: ptBR,
  })

  return (
    <PublicationsCardContent {...rest}>
      <div>
        <h2>{publicationData.title}</h2>
        <p>{date}</p>
      </div>

      <ReactMarkdown className="markdown">{publicationData.body}</ReactMarkdown>
    </PublicationsCardContent>
  )
}
