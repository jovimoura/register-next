import Client from '../core/Cliente'
import { DeleteIcon, EditIcon } from './Icons'

interface TableProps {
  clients: Client[]
  selectedClient?: (client: Client) => void
  deletedClient?: (client: Client) => void
}

export default function Table({ clients, selectedClient, deletedClient }: TableProps) {
  const viewAction = selectedClient || deletedClient

  const renderHeader = () => {
    return (
      <tr>
        <th className="text-left p-4">Key</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        { viewAction ? <th className="p-4">Actions</th> : false }
      </tr>
    )
  }

  const renderActions = (client: Client) => {
    return (
      <td className="flex justify-center">
        {selectedClient ? (
          <button onClick={() => selectedClient(client)} className="flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50">
            {EditIcon()}
          </button>
        ) : (
          false
        )}

        {deletedClient ? (
          <button onClick={() => deletedClient(client)} className="flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-purple-50">
            {DeleteIcon()}
          </button>
        ) : (
          false
        )}
      </td>
    )
  }

  const renderBody = () => {
    return clients?.map((client, i) => {
      return (
        <tr
          key={client.id}
          className={i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
        >
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          { viewAction ? renderActions(client) : false }
        </tr>
      )
    })
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800">
        {renderHeader()}
      </thead>
      <tbody>{renderBody()}</tbody>
    </table>
  )
}
