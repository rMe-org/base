declare module 'react-plotly.js' {
  import { Component } from 'react';

  interface PlotParams {
    data: Array<{
      type?: string;
      z?: number[][];
      colorscale?: string;
      [key: string]: any;
    }>;
    layout?: {
      title?: string;
      width?: number;
      height?: number;
      margin?: { t: number; r: number; b: number; l: number };
      [key: string]: any;
    };
    config?: {
      displayModeBar?: boolean;
      [key: string]: any;
    };
    [key: string]: any;
  }

  export default class Plot extends Component<PlotParams> {}
}
