import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from "chart.js";
import { FC, memo } from "react";
import { TypingResultAttributes, TypingResultData } from "../../../types/api/typing";
import _ from "lodash";

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement);

type Props = {
  data: Array<TypingResultData>;
};

const TypingData = (data: Array<TypingResultData>) => {
  return data?.map((ele) => ele.attributes);
};
const ImplementationArray = (data: Array<TypingResultAttributes>) => {
  return data?.map((ele, index) => index + 1);
};
const TypingSpeedArray = (data: Array<TypingResultAttributes>) => {
  const array = data?.map((ele) => _.pick(ele, ["type_speed"]));
  return array?.map((item, index) => ({
    times: index + 1,
    type_speed: item.type_speed,
  }));
};
const TypingMissTypeArray = (data: Array<TypingResultAttributes>) => {
  const array = data?.map((ele) => _.pick(ele, ["miss_type"]));
  return array?.map((item, index) => ({
    times: index + 1,
    type_speed: item.miss_type,
  }));
};
const TypingScoreArray = (data: Array<TypingResultAttributes>) => {
  const array = data?.map((ele) => _.pick(ele, ["score"]));
  return array?.map((item, index) => ({
    times: index + 1,
    type_speed: item.score,
  }));
};

export const LineChart: FC<Props> = memo((props) => {
  const { data } = props;
  const typingData = TypingData(data);
  const labels = ImplementationArray(typingData);
  const chartData = {
    labels: labels,
    type: "Line",
    datasets: [
      {
        label: "速度(wpm)",
        data: TypingSpeedArray(typingData),
        borderColor: "rgb(83, 221, 106)",
        yAxisID: "y",
      },
      {
        label: "ミスタイプ",
        data: TypingMissTypeArray(typingData),
        borderColor: "rgb(97, 131, 242)",
        yAxisID: "y1",
      },
      {
        label: "スコア",
        data: TypingScoreArray(typingData),
        borderColor: "rgb(245, 152, 152)",
        yAxisID: "y",
      },
    ],
  };

  const options: {} = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      tooltip: {
        bodyFont: { size: 10 },
        titleMarginBottom: 15,
        backgroundColor: "#eee",
        bodyColor: "#333",
        displayColors: true,
        xAlign: "center",
        callbacks: {
          title: () => "",
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        title: {
          display: true,
          text: "実施回数",
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
      y1: {
        display: true,
        grid: {
          display: false,
        },
        beginAtZero: true,
        position: "right",
        title: {
          display: true,
          text: "ミスタイプ回数",
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
          callback: function (value: number) {
            return Math.round(value);
          },
        },
      },
    },
    parsing: {
      xAxisKey: "times",
      yAxisKey: "type_speed",
    },
  };
  return <Line key={JSON.stringify(data)} data={chartData} options={options} />;
});
