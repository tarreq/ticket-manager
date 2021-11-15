import { CheckCircleIcon, RefreshIcon } from '@heroicons/react/solid'

  export default function TicketsList({tickets, handleEditTicket, lastElRef}) {
    const priorityMap = {
      "High": "red",
      "Medium": "yellow",
      "Low": "green"
    }
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 table-fixed">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="w-1/3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Subject
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Priority
                    </th>
                    <th
                      scope="col"
                      className="w-1/9 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="w-1/3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th scope="col" className="w-1/9 relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tickets.map((ticket, index) => {
                    const color = priorityMap[ticket.priority]
                    return (
                        <tr key={ticket.id} ref={ tickets.length === index + 1 ? lastElRef : undefined}>
                      <td className="px-6 py-4 whitespace-nowrap max-w-xs">
                        <div className="text-sm text-gray-500">{ticket.subject}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${color}-200 text-gray-600`}>
                        {ticket.priority}
                      </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${ticket.status === 'open' ? 'text-red-800' : 'text-green-800'}`}>
                          {ticket.status === 'open' ? <RefreshIcon className="h-5 w-5 red" aria-hidden="true" /> : <CheckCircleIcon className="h-5 w-5 red" aria-hidden="true" />}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap overflow-ellipsis overflow-hidden max-w-sm">{ticket.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button onClick={() => handleEditTicket(ticket.id)} className="text-indigo-600 hover:text-indigo-900">
                          <span>Edit</span>
                        
                      </button>
                      </td>
                    </tr>
                  )})}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  