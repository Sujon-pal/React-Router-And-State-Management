import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const StudentData = [
  { id: 1, name: "Rahim", bangla: 85, math: 92, physics: 88 },
  { id: 2, name: "Karim", bangla: 78, math: 81, physics: 75 },
  { id: 3, name: "Sakib", bangla: 90, math: 95, physics: 91 },
  { id: 4, name: "Tamim", bangla: 72, math: 68, physics: 74 },
  { id: 5, name: "Mim", bangla: 88, math: 84, physics: 89 },
  { id: 6, name: "Nusrat", bangla: 93, math: 90, physics: 94 },
  { id: 7, name: "Jannat", bangla: 80, math: 76, physics: 82 },
  { id: 8, name: "Rafi", bangla: 69, math: 73, physics: 70 },
  { id: 9, name: "Sadia", bangla: 87, math: 89, physics: 86 },
  { id: 10, name: "Hasan", bangla: 76, math: 85, physics: 79 },
];

const ResultData = () => {
  return (
    <LineChart width={700} height={400} data={StudentData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />

      <Line type="monotone" dataKey="bangla" />
      <Line type="monotone" dataKey="math" />
      <Line type="monotone" dataKey="physics" />
    </LineChart>
  );
};

export default ResultData;