// D3 is included by globally by default

function resize() {}

function init() {

var translation = [["Al Iskandariyah (Alexandria)","Alexandria"],
["Ar-Riyadh (Riyadh)","Ar-Riyadh"],
["Athínai (Athens)","Athens"],
["Krung Thep (Bangkok)","Bangkok"],
["Al Qahirah (Cairo)","Cairo"],
["Kozhikode (Calicut)","Calicut"],
["Dar-el-Beida (Casablanca)","Casablanca"],
["Changzhou, Jiangsu","Changzhao"],
["Chennai (Madras)","Chennai"],
["Dallas-Fort Worth","Dallas"],
["Durban (Ethekwini)","Durban"],
["Fuzhou, Fujian","Fuzhou"],
["Guangzhou, Guangdong","Guangzhao"],
["ThÃ nh Pho Ho ChÃ­ Minh (Ho Chi Minh City)","Ho Chi Minh City"],
["Kolkata (Calcutta)","Kolkata"],
["Los Angeles Long Beach-Santa Ana","Los Angeles"],
["Ciudad de MÃ©xico (Mexico City)","Mexico City"],
["Milano (Milan)","Milan"],
["Moskva (Moscow)","Moscow"],
["Mumbai (Bombay)","Mumbai"],
["Chukyo M.M.A. (Nagoya)","Nagoya"],
["Nanjing, Jiangsu","Nanjing"],
["New York Newark","New York"],
["Kinki M.M.A. (Osaka)","Osaka"],
["Phoenix Mesa","Phoenix"],
["Pôrto Alegre","Porto Alegre"],
["Sankt Peterburg (Saint Petersburg)","Saint Petersburg"],
["SÃ£o Paulo","Sao Paulo"],
["Suzhou, Jiangsu","Suzhao"],
["Tel Aviv Yafo (Tel Aviv-Jaffa)","Tel Aviv"],
["Ürümqi (Wulumqi)","Urumqi"],
["Wuxi, Jiangsu","Wuxi"],
["Xi'an, Shaanxi","Xi'an"]];

var translationMap = d3.map(translation,function(d){ return d[0]});

var translationArray = translation.map(function(d){return d[0]});


	var scatterChartWrapper = d3.select(".scatter-wrapper");
	var scatterTooltip = scatterChartWrapper.select(".scatter-tooltip");

	d3.select("#lines").selectAll("line").style("opacity",.5)
	var scatterBubbles = scatterChartWrapper.select("#scatter").select("#Group_3").selectAll("path");

	scatterBubbles.on("mouseover",function(d){
		var text = d3.select(this).attr("id");

		console.log(translationMap.has(text));

		if(translationMap.has(text)){
			text = translationMap.get(text)[1];
		}

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
