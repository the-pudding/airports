// D3 is included by globally by default

function resize() {}

function init() {
	var scatterChartWrapper = d3.select(".scatter-wrapper");
	var scatterTooltip = scatterChartWrapper.select(".scatter-tooltip");

	d3.select("#lines").selectAll("line").style("opacity",.5)
	var scatterBubbles = scatterChartWrapper.select("#scatter").select("#Group_3").selectAll("path");

	scatterBubbles.on("mouseover",function(d){
		var text = d3.select(this).attr("id");
		scatterTooltip.select("p").text(text);
		scatterTooltip.style("visibility","visible")
		scatterBubbles.style("stroke",null).style("stroke-width",null)
		d3.select(this).style("stroke","white").style("stroke-width","2px")
	})
	.on("mouseout",function(d){
		scatterTooltip.style("visibility","hidden")
		scatterBubbles.style("stroke-width",null).style("stroke",null)
	})
	scatterChartWrapper.select("#scatter").on("mousemove",function(d){
		var coor = d3.mouse(this);
		scatterTooltip.style("left",coor[0]+"px").style("top",coor[1]+"px")
	})
	;
}

export default { init, resize };
