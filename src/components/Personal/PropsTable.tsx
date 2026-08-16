interface PropsTableProps {
  data: {
    prop: string;
    type: string;
    default: string;
    description: string;
  }[];
}

const PropsTable = ({ data }: PropsTableProps) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm bg-white dark:bg-gray-900/50">
      <table className="w-full">
        <thead className="bg-gray-50/80 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
              Prop
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
              Type
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
              Default
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50/60 dark:hover:bg-gray-800/30 transition-colors">
              <td className="px-4 py-3 text-sm font-mono text-indigo-600 dark:text-indigo-400 font-medium">
                {row.prop}
              </td>
              <td className="px-4 py-3 text-sm font-mono text-gray-600 dark:text-gray-300">
                {row.type}
              </td>
              <td className="px-4 py-3 text-sm font-mono text-gray-500 dark:text-gray-400">
                {row.default}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropsTable;
