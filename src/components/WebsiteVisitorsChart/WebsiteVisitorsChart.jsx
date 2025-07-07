import { PieChart, Pie, Cell } from 'recharts';
import { useTranslation } from '../../providers/TranslationProvider';

const data = [
  { name: 'Organic', value: 30, color: '#e100ff' }, // بنفسجي
  { name: 'Social', value: 50, color: '#ffea00' },  // أصفر
  { name: 'Direct', value: 30, color: '#ff4c00' }   // برتقالي
];

const centerText = "150k";
export default function WebsiteVisitorsChart() {
const { translate } = useTranslation();

  return (
    <div className="bg-black/50 text-white rounded-xl shadow-[inset_0_0_19px_0_rgba(179,244,86,0.5)] p-4 w-full">
      <h3 className="text-lg font-semibold mb-4">{translate("dashboard.WebsiteVisitors")}</h3>

      <div className="relative flex justify-center items-center">
        <PieChart width={250} height={250}>
          {data.map((entry, index) => (
            <Pie
              key={index}
              data={[entry]}
              cx="50%"
              cy="50%"
              innerRadius={80 + index * 7}
              outerRadius={85 + index * 7}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
            >
              <Cell fill={entry.color} />
            </Pie>
          ))}
        </PieChart>
        <div className="absolute text-2xl font-bold">{centerText}</div>
      </div>

      <div className="mt-6 space-y-2">
        {data.map((entry, index) => (
          <div key={index} className="flex justify-between text-sm">
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
              {entry.name}
            </div>
            <div>{entry.value}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
