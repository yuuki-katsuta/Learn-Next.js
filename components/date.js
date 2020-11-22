import { parseISO, format } from 'date-fns'

//日付表示のためのコンポーネント
export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
