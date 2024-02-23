'use client'

import { updateEntry } from '@/utils/api'
import entry from '@/utils/entry'
import { useState } from 'react'
import { useAutosave } from 'react-autosave'
import Spinner from './Spinner'

const Editor = ({ entry }) => {
  const [value, setvalue] = useState(entry.content)
  const [isLoading, setIsLoading] = useState(false)
  const [analysis, setAnalysis] = useState(entry.analysis)

  const { mood, negative, summary, subject, color } = analysis

  const analysisData = [
    { name: 'Summary', value: summary },
    { name: 'Subject', value: subject },
    { name: 'Mood', value: mood },
    { name: 'Negative', value: negative ? 'true' : 'false' },
  ]

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true)
      const data = await updateEntry(entry.id, _value)
      setAnalysis(data.analysis)
      setIsLoading(false)
    },
  })

  return (
    <div className="w-full h-full grid grid-cols-3">
      <div className="col-span-2">
        {isLoading && <Spinner />}
        <textarea
          className="w-full h-full p-8 text-xl"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
      </div>
      <div className="border-l border-black/5">
        <div className="px-6 py-10" style={{ backgroundColor: color }}>
          <h2 className="text-2xl">Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((item) => (
              <li
                key={item.name}
                className="flex   px-2 py-4 border-t border-black/10 justify-between gap-4"
              >
                <span className="text-lg font-semibold">{item.name}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Editor
