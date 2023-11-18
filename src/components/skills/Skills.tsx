import React, { Component } from 'react';
// import { useTranslation } from 'react-i18next';
import * as d3 from "d3";
import { select, pointer } from 'd3-selection';


import './Skills.scss';

export class Skills extends Component {
    chartDrawn = false;

    componentDidMount() {
        if (!this.chartDrawn) {
            this.drawChart();
            this.chartDrawn = true;
        }
    }

    render() {
        // const { t } = useTranslation(['skills']);
        return (
            <div id="chart123"></div>
        ); 
    }

    drawChart() {
        // https://www.schemecolor.com/rarity.php
        const colors = ["#30635A", "#97B03E", "#E0D669", "#E07272", "#9E3E7C"];
        const disabled = "#666666"
        const constantValue = 3;
        const width = 170;
        const height = 30;


        const svg = (
            d3
            .select("#chart123")
            .append("svg")
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("width", 170)
            .attr("height", 30)
        );
        
        const div = svg
                    .append("rect")
                    .attr("x", 0)
                    .attr("y", 0)
                    .attr("width", 60)
                    .attr("height", 30)
                    .style("opacity", 1)
                    .style("fill", "white")
                    .style("border", "solid")
                    .style("border-width", "2px")
                    .style("border-radius", "5px");

        for (let i = 0; i < 5; i++) {
            svg
            .append("rect")
            .attr("x", i * 35)
            .attr("y", 0)
            .attr("width", 30)
            .attr("height", 30)
            .style("fill", constantValue > i ? colors[i] : disabled)
            .on("mouseover", function(event) {
                d3.select(this)
                .style("stroke", "black")
                .style("opacity", 0.8);

                div.transition()
               .duration(50)
               .style("opacity", 1);
            })
            .on("mousemove", function(event) {
                div
               .style("x", (pointer(event, this)[0] - 30) + "px")
               .style("y", (pointer(event, this)[1] - 30) + "px")
               .style("opacity", 1);
            })
            .on("mouseout", function(event) {
                d3.select(this)
                .style("stroke", "none")
                .style("opacity", 1.0)

                div.transition()
               .duration(50)
               .style("opacity", 0);
            })
        }
    }
}
