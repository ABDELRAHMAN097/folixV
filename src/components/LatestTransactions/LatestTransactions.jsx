const transactions = [
  {
    title: "Refueling gasoline",
    date: "16 July 2021",
    amount: -201.34,
  },
  {
    title: "Purchase of furniture",
    date: "13 July 2021",
    amount: -567.14,
  },
  {
    title: "Cash refund for tickets",
    date: "10 July 2021",
    amount: 568.11,
  },
];
import { useTranslation } from '../../providers/TranslationProvider';
export default function LatestTransactions() {
const { translate } = useTranslation();

  return (
    <div className="bg-black/50 text-white rounded-xl flex flex-col items-stretch shadow-[inset_0_0_19px_0_rgba(179,244,86,0.5)] p-6 w-full h-full">
      <h3 className="text-lg font-semibold mb-6">{translate("dashboard.LatestTransactions")}</h3>
      <div className="flex flex-col items-stretch justify-between h-full">
        {transactions.map((tx, index) => (
          <div key={index} className="flex justify-between items-center">
            <div>
              <div className="font-medium">{tx.title}</div>
              <div className="text-xs text-gray-400 mt-5">{tx.date}</div>
            </div>
            <div
              className={`font-semibold ${
                tx.amount < 0 ? "text-red-500" : "text-green-400"
              }`}
            >
              {tx.amount < 0 ? `-$${Math.abs(tx.amount).toFixed(2)}` : `+$${tx.amount.toFixed(2)}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
