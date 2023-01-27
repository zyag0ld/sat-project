import { useState, useEffect, } from "react";
import axios from "axios";
import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../theme";
import { URL } from "../App";

const LineChartCaudal = ({ isCustomLineColors = false, isDashboard = false }) => {
  // Theme and colors
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // Request to API
  const [lecturas, setLecturas] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/lecturas`)
      .then((response) => {setLecturas(response.data)});
  }, []);
  // Filter by tipo
  const lecturasCaudal = lecturas.filter(lectura => lectura.tipo === "Cauce");
  // List formatted
  const caudalLine = [
    {
      id: "Caudal",
      color: colors.greenAccent[500],
      data: [],
    },
  ];
  for (var i=0; i<lecturasCaudal.length; i++){
    var xvalue = new Date(lecturasCaudal[i].createdAt).toLocaleTimeString(); // toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    var yvalue = lecturasCaudal[i].valor.toString();
    caudalLine[0].data = [ ...caudalLine[0].data, { x: xvalue, y: yvalue} ]
  };
  // Verify list is correct
  // console.log("caudalLine: ", caudalLine);
  return (
    <ResponsiveLine
      data={caudalLine}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      colors={{datum: "color"}} // added
      margin={{ top: 50, right: 120, bottom: 60, left: 50 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "0",
        max: "10",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-0.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={ isDashboard ? null : {
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -70,
        legend: "Hora [24 hrs]",
        legendOffset: 50,
        legendPosition: "middle",
      }}
      axisLeft={ {
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Velocidad [L/min]",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enablePoints={ isDashboard ? false : true }
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      enableArea={true}
      useMesh={true}
      legends={ isDashboard ? [] : [
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 90,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChartCaudal;
