import { PublicationsCardContent } from './styles'
import ReactMarkdown from 'react-markdown'

export function PublicationsCard({ publicationData, ...rest }: any) {
  console.log(publicationData)
  return (
    <PublicationsCardContent {...rest}>
      <div>
        <h2>{publicationData.title}</h2>
        <p>Há 1 dia</p>
      </div>

      <ReactMarkdown className="markdown">{publicationData.body}</ReactMarkdown>
    </PublicationsCardContent>
  )
}
