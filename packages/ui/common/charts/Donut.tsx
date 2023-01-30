import dynamic from "next/dynamic"

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

const Donut = () => {
  const series = [44, 55, 41, 17, 15]

  const options = {
    chart: {
      type: "donut",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            // width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  }
  return (
    <div id="chart">
      {typeof window !== "undefined" && (
        // @ts-ignore
        <Chart options={options} series={series} type="donut" height={362} />
      )}
    </div>
  )
}

export default Donut
