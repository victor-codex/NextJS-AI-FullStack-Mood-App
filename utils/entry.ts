export default interface entry {
  id: string
  createdAt: Date
  updatedAt: Date
  userId: string
  content: string
  analysis: {
    id: string
    createdAt: Date
    updatedAt: Date
    entryId: string
    mood: string
    summary: string
    color: string
    negative: boolean
    subject: string
  } | null
}
