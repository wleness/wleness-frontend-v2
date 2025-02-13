import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const UserChart = () => {
  useEffect(() => {
    const pieChartCanvas = document.getElementById("pieChart");
    const ctx = pieChartCanvas.getContext("2d");

    const darkAreaColor = "#52D0C2"; // Color for 25 days

    const data = {
      labels: ["Completed Streak 25 Days", "Incomplete Streak 6 Days"],
      datasets: [
        {
          data: [25, 6],
          backgroundColor: [darkAreaColor, "#ABEDE6"],
          borderWidth: 0,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "60%",
    };

    const chart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: options,
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="flex  justify-center">
      {" "}
      {/* Center the content */}
      <div className="p-4">
        <canvas id="pieChart" width="350" height="350"></canvas>
      </div>
    </div>
  );
};

export default UserChart;
