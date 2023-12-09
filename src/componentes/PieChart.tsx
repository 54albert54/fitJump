"use client"
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

export type TDificult={
  rest:number;
  go:number;
}
type Props ={
  nivel:TDificult;
}
const PieChart = ({nivel}:Props) => {

  
  // Datos del gráfico
  const data = {
    labels: ['Etiqueta 1', 'Etiqueta 2'],
    datasets: [
      {
        data: [nivel.rest, nivel.go], // Valores de cada segmento
        backgroundColor: ['#FF0000', '#000', ], // Colores de cada segmento
        hoverBackgroundColor: ['#FF6384', '#484848'], // Colores al pasar el ratón
      },
    ],
  };
  const option ={
    //responsive:true
  };

  return <Pie  data={data} options={option} />;
};

export default PieChart;