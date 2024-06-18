"use client"
import { Chart, defaults, registerables } from 'chart.js';
import { Bar, Doughnut } from "react-chartjs-2";
Chart.register(...registerables);
defaults.responsive = true
defaults.maintainAspectRatio = false

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";
export default function Home() {

  const dados = [200, 300, 400]
  const dataset = [200, 300, 400, 500]
  return (
    <>
      <div className="flex items-center justify-center">
        <div className=" flex flex-col xl:flex-row bg-gray-200 rounded-md shadow-md p-4 gap-5">
          <div className="">
            <Bar
              data={{
                labels: ["a", "b", "c"],
                datasets: [
                  {
                    label: "revenue",
                    data: dados,
                  },
                  {
                    label: "teste",
                    data: [90, 80, 70],
                  },
                ],

              }}
              options={{
                plugins: {
                  title: {
                    text: "Revenue Source",
                  },
                },
              }}
            />
          </div>
          <div className=''>
            <Doughnut
              data={
                {
                  labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
                  datasets: [
                    {
                      label: "dataset",
                      data: dataset
                    }
                  ]
                }
              }
              options={{
                plugins: {
                  title: {
                    text: "Revenue Source",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
