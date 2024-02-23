import HistoryChart from '@/components/HistoryChart'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getData = async () => {
  const user = await getUserByClerkID()
  const analyses = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'asc',
    },
  })

  const sum = analyses.reduce((acc, curr) => acc + curr.sentimentScore, 0)

  const average = Math.round(sum / analyses.length)

  return { analyses, average }
}

const History = async () => {
  const { average, analyses } = await getData()
  return (
    <div className="w-full h-full">
      <div>{`Avg.Sentiment ${average}`}</div>
      <div className="w-full h-full">
        <HistoryChart data={analyses} />
      </div>
    </div>
  )
}

export default History
