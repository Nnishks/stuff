import dynamic from "next/dynamic"

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

const BarChart = () => {
  const series = [
    {
      name: "Open",
      data: [44, 55, 57, 56],
    },
    {
      name: "In progress",
      data: [76, 85, 101, 98],
    },
    {
      name: "Completed",
      data: [35, 41, 36, 26],
    },
  ]

  const options = {
    chart: {
      type: "bar",
    },
    // title: {
    //   text: "Work Orders",
    // },
    // subtitle: {
    //   text: "work orders by priority",
    // },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Emergency", "Normal", "Low", "Maintenence"],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        },
      },
    },
  }

  return (
    <div id="chart">
      {typeof window !== "undefined" && (
        //@ts-ignore
        <Chart options={options} series={series} type="bar" height={350} />
      )}
    </div>
  )
}

export default BarChart
