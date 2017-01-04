var wiring_points = [
			 {label: "Xi-001", x: 100, y:100},
		     {label: "Dong-001", x: 100, y:350},	     
			];
			
var wiring_text = [
			 {label: "常用一段", x: 20, y:10},			 
			 {label: "市0101容灾中心西进线", x: 50, y:70},
			 {label: "彭2001容灾中心东进线", x: 50, y:320},			 
			 {label: "市0101容灾中心西总开关", x: 320, y:90},	
			 {label: "彭2001容灾中心东总开关", x: 320, y:340},
			 {label: "1号配变常用出线开关", x: 550, y:110},	
			 {label: "2号配变常用出线开关", x: 550, y:420},				 
			 {label: "1号配变备用开关", x: 830, y:60},
			 {label: "1号配变备用开关", x: 830, y:450},			 
			 {label: "备用一段母线出线开关", x: 1150, y:250},
			 {label: "备用二段母线出线开关", x: 1150, y:310},			 
			 {label: "3号发电机10KV开关", x: 1320, y:140},
			 {label: "2号发电机10KV开关", x: 1320, y:90},
			 {label: "1号发电机10KV开关", x: 1250, y:40},		 
			 {label: "备用一段母线总开关", x: 1530, y:340},			 
			 {label: "1号配变备用出线开关", x: 1730, y:280},			 
			 {label: "5号配变备用出线开关", x: 1790, y:390},
			 {label: "9号配变备用出线开关", x: 1780, y:490},			 
			 {label: "1号UPS旁路电源", x: 2150, y:40},
			 {label: "1号UPS A电源", x: 2160, y:100},
			 {label: "1号UPS B电源", x: 2180, y:150},
			 {label: "1号UPS C电源", x: 2180, y:190},		 
			 {label: "2号UPS旁路电源", x: 2150, y:270},
			 {label: "2号UPS A电源", x: 2170, y:330},
			 {label: "2号UPS B电源", x: 2170, y:380},
			 {label: "2号UPS C电源", x: 2170, y:420},			 
			 {label: "备用二段母线总开关", x: 1440, y:760},
			 {label: "2号配变备用出线开关", x: 1630, y:780},			 
			 {label: "6号配变备用出线开关", x: 1670, y:940},
			 {label: "10号配变备用出线开关", x: 1660, y:1040},		 
			 {label: "3号UPS旁路电源", x: 2040, y:570},
			 {label: "3号UPS A电源", x: 2050, y:630},
			 {label: "3号UPS B电源", x: 2050, y:690},
			 {label: "3号UPS C电源", x: 2050, y:760},			 
			 {label: "4号UPS旁路电源", x: 1950, y:850},
			 {label: "4号UPS A电源", x: 2170, y:860},
			 {label: "4号UPS B电源", x: 2070, y:920},
			 {label: "4号UPS C电源", x: 2070, y:980},
			 {label: "常用二段", x: 30, y:250},
			];

var power_switches = [
			  {label: "Xi-10kv-001", x: 200, y: 100},   // Xi---10kv
		      {label: "Usual-1", x: 400, y: 120},
		      {label: "Trans-input-1", x: 600, y: 140},
		      {label: "Bridge-Xi",     x: 560, y: 160},		      
		      {label:  "Dong-10kv-001", x: 200, y: 350}, // dong-10kv
		      {label: "Usual-2", x: 400, y: 370},
		      {label: "Bridge-Dong", x: 560, y:390},
		      {label: "Dong-Trans", x: 620, y: 410},	      
		      {label: "Transformer-branchin-1", x: 900, y: 110},	//1号配电分支
			  {label: "Transformer-branchin-2", x: 950, y: 90},		  
			  {label: "Transformer-branchin-3", x: 900, y: 420},	//2号配电分支
			  {label: "Transformer-branchin-4", x: 950, y: 440},			  
			  {label: "Generator-branchin-1", x: 1200, y: 280},	//发电机
			  {label: "Generator-branchin-2", x: 1200, y: 300},			  
			  {label: "GeneratorKg-branchin-1", x: 1600, y: 370}, //备用出线开关 			  
			  {label: "GeneratorKg-branchin-2", x: 1800, y: 310},		  
			  {label: "GeneratorKg-branchEnd-1", x: 1850, y: 420},
			  {label: "GeneratorKg-branchEnd-2", x: 1820, y: 520},		  
			  {label: "GeneratorKg-branchEnd-3", x: 1740, y: 970},
			  {label: "GeneratorKg-branchEnd-4", x: 1710, y: 1070},		  
			  {label: "GeneratorKg-branchin-3", x: 1500, y: 790}, 
			  {label: "GeneratorKg-branchin-4", x: 1700, y: 810}, 		  
			  {label: "GeneratorKg-branchin-5", x: 1300, y: 30}, 
			  {label: "GeneratorKg-branchin-6", x: 1400, y: 80}, 
			  {label: "GeneratorKg-branchin-7", x: 1400, y: 130}, 		  
			  {label: "400V-branchin-1", x: 2200, y: 70}, 
			  {label: "400V-branchin-2", x: 2300, y: 120}, 
			  {label: "400V-branchin-3", x: 2300, y: 170},
			  {label: "400V-branchin-4", x: 2200, y: 220},		  
			  {label: "400V-branchin-5", x: 2200, y: 300}, 
			  {label: "400V-branchin-6", x: 2300, y: 350}, 
			  {label: "400V-branchin-7", x: 2300, y: 400},
			  {label: "400V-branchin-8", x: 2200, y: 450},		  
			  {label: "400V-branchin-9", x: 2100, y: 600}, 
			  {label: "400V-branchin-10", x: 2200, y: 650}, 
			  {label: "400V-branchin-11", x: 2200, y: 710},
			  {label: "400V-branchin-12", x: 2100, y: 750},
			 
			  {label: "400V-branchin-13", x: 2100, y: 870}, 
			  {label: "400V-branchin-14", x: 2200, y: 890}, 
			  {label: "400V-branchin-15", x: 2200, y: 940},
			  {label: "400V-branchin-16", x: 2100, y: 970},
		     ];

var power_buses = [
		   {label:"Xi-Main1",  x: 300,  y: 80,  points:["101", "102" ]},
		   {label:"Usual-1",   x: 500,  y: 100,  points:["103", "104", "109" ]},
		   {label:"Transformer-1-bus", x: 700, y: 220, points:["201", "202"]},
		   {label:"Dong-Enter", x: 300, y: 330, points:["101", "102"]},
		   {label:"Dong-10kv-main", x: 500, y:350, points: ["107", "106", "105"]},	   		   
		   {label:"Transformer-in-1", x: 800, y:50, points: ["111", "112", "113"]}, 	
		   {label:"Transformer-in-2", x: 800, y:400, points: ["111", "112", "113"]},
		   {label:"Transformer-out-1", x: 1000, y:220, points: ["111", "112", "113"]},			   		   
		   {label:"Generator-in-1", x: 1100, y:220, points: ["111", "112", "113","114"]},				   
		   {label:"Generator-out-1", x: 1200, y:50, points: ["111", "112", "113","114"]},	   
		   {label:"Generator-out-2", x: 1500, y:350, points: ["111", "112"]},
		   {label:"Generator-out-3", x: 1400, y:750, points: ["111", "112"]},		   	   		   
		   {label:"GeneratorKg-in-1", x: 1700, y:290, points: ["111", "112", "113","114"]},
		   {label:"GeneratorKg-out-1", x: 1900, y:250, points: ["111", "112", "113"]},			   
		   {label:"GeneratorKgEnd-out-1", x: 1950, y:400, points: ["111"]},	
		   {label:"GeneratorKgEnd-out-2", x: 1920, y:500, points: ["111"]},		   
		   {label:"GeneratorKgEnd-out-3", x: 1820, y:950, points: ["111"]},	
		   {label:"GeneratorKgEnd-out-4", x: 1820, y:1050, points: ["111"]},			   
		   {label:"400V-in-1", x: 2000, y:100, points: ["111", "112", "113", "114", "115"]},
		   {label:"400V-in-2", x: 2000, y:300, points: ["111", "112", "113", "114", "115"]},		   
		   {label:"400V-out-1", x: 2300, y:50, points: ["111"]},
		   {label:"400V-out-2", x: 2400, y:100, points: ["111"]},
		   {label:"400V-out-3", x: 2400, y:150, points: ["111"]},
		   {label:"400V-out-4", x: 2300, y:200, points: ["111"]},   		 
		   {label:"400V-out-5", x: 2300, y:280, points: ["111"]},
		   {label:"400V-out-6", x: 2400, y:330, points: ["111"]},
		   {label:"400V-out-7", x: 2400, y:380, points: ["111"]},
		   {label:"400V-out-8", x: 2300, y:430, points: ["111"]},		   		     
		   {label:"GeneratorKg-in-2", x: 1600, y:770, points: ["111", "112", "113","114"]},
		   {label:"GeneratorKg-out-2", x: 1800, y:750, points: ["111", "112", "113"]},	   
		   {label:"400V-in-3", x: 1900, y:650, points: ["111", "112", "113", "114", "115"]},
		   {label:"400V-in-4", x: 1900, y:850, points: ["111", "112", "113", "114", "115"]},		   
		   {label:"400V-out-9", x: 2200, y:580, points: ["111"]},
		   {label:"400V-out-10", x: 2300, y:630, points: ["111"]},
		   {label:"400V-out-11", x: 2300, y:690, points: ["111"]},
		   {label:"400V-out-12", x: 2200, y:730, points: ["111"]},
		   {label:"400V-out-13", x: 2200, y:800, points: ["111"]},
		   {label:"400V-out-14", x: 2300, y:870, points: ["111"]},
		   {label:"400V-out-15", x: 2300, y:920, points: ["111"]},
		   {label:"400V-out-16", x: 2200, y:950, points: ["111"]},	   
		   {label:"GeneratorKg-out-3", x: 1400, y:10, points: ["111"]},
		   {label:"GeneratorKg-out-4", x: 1500, y:60, points: ["111"]},
		   {label:"GeneratorKg-out-5", x: 1500, y:110, points: ["111"]},
		   ];

var power_lines = [
		   {a_point:"WiringPoint::Xi-001" ,          z_point: "PowerSwitch::Xi-10kv-001::a"},
		   {a_point:"PowerSwitch::Xi-10kv-001::z" ,  z_point: "PowerBus::Xi-Main1::101"},
		   {a_point:"PowerBus::Xi-Main1::102" ,      z_point: "PowerSwitch::Usual-1::a"},
		   {a_point:"PowerSwitch::Usual-1::z",       z_point: "PowerBus::Usual-1::103"},
		   {a_point:"PowerBus::Usual-1::104" ,       z_point: "PowerSwitch::Trans-input-1::a"},
		   {a_point:"PowerSwitch::Trans-input-1::z", z_point: "PowerBus::Transformer-1-bus::201"},
		   {a_point:"PowerBus::Usual-1::109",        z_point: "PowerSwitch::Bridge-Xi::a"},
		   {a_point:"PowerSwitch::Bridge-Xi::z",     z_point: "PowerSwitch::Bridge-Dong::z"},
		   {a_point:"WiringPoint::Dong-001",         z_point: "PowerSwitch::Dong-10kv-001::a"},  // Dong --part
		   {a_point:"PowerSwitch::Dong-10kv-001::z", z_point: "PowerBus::Dong-Enter::101"},
		   {a_point:"PowerBus::Dong-Enter::102",     z_point: "PowerSwitch::Usual-2::a"},
		   {a_point:"PowerSwitch::Usual-2::z",       z_point: "PowerBus::Dong-10kv-main::107"},
		   {a_point:"PowerBus::Dong-10kv-main::106", z_point: "PowerSwitch::Bridge-Dong::a"},
		   {a_point:"PowerBus::Dong-10kv-main::105", z_point: "PowerSwitch::Dong-Trans::a"},
		   {a_point:"PowerSwitch::Dong-Trans::z",    z_point: "PowerBus::Transformer-1-bus::202"},		   		   
		   {a_point:"PowerBus::Transformer-1-bus::201",    z_point: "PowerBus::Transformer-in-1::111"},
		   {a_point:"PowerBus::Transformer-1-bus::202",    z_point: "PowerBus::Transformer-in-2::113"},	   
		   //1号配电
		   {a_point:"PowerBus::Transformer-in-1::113",    z_point: "PowerSwitch::Transformer-branchin-1::a"},
		   {a_point:"PowerBus::Transformer-in-1::112",    z_point: "PowerSwitch::Transformer-branchin-2::a"},
		   {a_point:"PowerSwitch::Transformer-branchin-1::z",    z_point: "PowerBus::Transformer-out-1::111"},
		   {a_point:"PowerSwitch::Transformer-branchin-2::z",    z_point: "PowerBus::Transformer-out-1::111"},
		   //2号配电
		   {a_point:"PowerBus::Transformer-in-2::111",    z_point: "PowerSwitch::Transformer-branchin-3::a"},
		   {a_point:"PowerBus::Transformer-in-2::112",    z_point: "PowerSwitch::Transformer-branchin-4::a"},		   
		   {a_point:"PowerSwitch::Transformer-branchin-3::z",    z_point: "PowerBus::Transformer-out-1::113"},
		   {a_point:"PowerSwitch::Transformer-branchin-4::z",    z_point: "PowerBus::Transformer-out-1::113"},		   
		   //发动机
		   {a_point:"PowerBus::Transformer-out-1::112",    z_point: "PowerBus::Generator-in-1::112"},
		   {a_point:"PowerBus::Generator-in-1::111",    z_point: "PowerBus::Generator-out-1::114"},	   
		   {a_point:"PowerBus::Generator-in-1::113",    z_point: "PowerSwitch::Generator-branchin-1::a"},
		   {a_point:"PowerSwitch::Generator-branchin-1::z",    z_point: "PowerBus::Generator-out-2::112"},  	   
		   {a_point:"PowerBus::Generator-in-1::114",    z_point: "PowerSwitch::Generator-branchin-2::a"},
		   {a_point:"PowerSwitch::Generator-branchin-2::z",    z_point: "PowerBus::Generator-out-3::111"},		   
		   //配变备用出线
		   {a_point:"PowerBus::Generator-out-2::111",    z_point: "PowerSwitch::GeneratorKg-branchin-1::a"},
		   {a_point:"PowerSwitch::GeneratorKg-branchin-1::z",    z_point: "PowerBus::GeneratorKg-in-1::114"},
		   {a_point:"PowerBus::GeneratorKg-in-1::111",    z_point: "PowerSwitch::GeneratorKg-branchin-2::a"},
		   {a_point:"PowerSwitch::GeneratorKg-branchin-2::z",    z_point: "PowerBus::GeneratorKg-out-1::113"},
		   {a_point:"PowerBus::GeneratorKg-out-1::111",    z_point: "PowerBus::400V-in-1::115"},
		   {a_point:"PowerBus::GeneratorKg-out-1::112",    z_point: "PowerBus::400V-in-2::111"},	   	
		   	//400V
		   {a_point:"PowerBus::400V-in-1::111",    z_point: "PowerSwitch::400V-branchin-1::a"},
		   {a_point:"PowerSwitch::400V-branchin-1::z",    z_point: "PowerBus::400V-out-1::111"},		   	
		   {a_point:"PowerBus::400V-in-1::112",    z_point: "PowerSwitch::400V-branchin-2::a"},
		   {a_point:"PowerSwitch::400V-branchin-2::z",    z_point: "PowerBus::400V-out-2::111"},		   	
		   {a_point:"PowerBus::400V-in-1::113",    z_point: "PowerSwitch::400V-branchin-3::a"},
		   {a_point:"PowerSwitch::400V-branchin-3::z",    z_point: "PowerBus::400V-out-3::111"},		   	
		   {a_point:"PowerBus::400V-in-1::114",    z_point: "PowerSwitch::400V-branchin-4::a"},
		   {a_point:"PowerSwitch::400V-branchin-4::z",    z_point: "PowerBus::400V-out-4::111"},		   			   	
		   {a_point:"PowerBus::400V-in-2::112",    z_point: "PowerSwitch::400V-branchin-5::a"},
		   {a_point:"PowerSwitch::400V-branchin-5::z",    z_point: "PowerBus::400V-out-5::111"},		   	
		   {a_point:"PowerBus::400V-in-2::113",    z_point: "PowerSwitch::400V-branchin-6::a"},
		   {a_point:"PowerSwitch::400V-branchin-6::z",    z_point: "PowerBus::400V-out-6::111"},		   	
		   {a_point:"PowerBus::400V-in-2::114",    z_point: "PowerSwitch::400V-branchin-7::a"},
		   {a_point:"PowerSwitch::400V-branchin-7::z",    z_point: "PowerBus::400V-out-7::111"},		   	
		   {a_point:"PowerBus::400V-in-2::115",    z_point: "PowerSwitch::400V-branchin-8::a"},
		   {a_point:"PowerSwitch::400V-branchin-8::z",    z_point: "PowerBus::400V-out-8::111"},		   			   	
		   {a_point:"PowerBus::Generator-out-3::112",    z_point: "PowerSwitch::GeneratorKg-branchin-3::a"},
		   {a_point:"PowerSwitch::GeneratorKg-branchin-3::z",    z_point: "PowerBus::GeneratorKg-in-2::111"},		   	
		   {a_point:"PowerBus::GeneratorKg-in-2::112",    z_point: "PowerSwitch::GeneratorKg-branchin-4::a"},
		   {a_point:"PowerSwitch::GeneratorKg-branchin-4::z",    z_point: "PowerBus::GeneratorKg-out-2::113"},			
		   {a_point:"PowerBus::GeneratorKg-out-2::111",    z_point: "PowerBus::400V-in-3::111"},
		   {a_point:"PowerBus::GeneratorKg-out-2::112",    z_point: "PowerBus::400V-in-4::115"},
		   {a_point:"PowerBus::400V-in-3::111",    z_point: "PowerSwitch::400V-branchin-9::a"},
		   {a_point:"PowerSwitch::400V-branchin-9::z",    z_point: "PowerBus::400V-out-9::111"},		   	
		   {a_point:"PowerBus::400V-in-3::112",    z_point: "PowerSwitch::400V-branchin-10::a"},
		   {a_point:"PowerSwitch::400V-branchin-10::z",    z_point: "PowerBus::400V-out-10::111"},		   	
		   {a_point:"PowerBus::400V-in-3::113",    z_point: "PowerSwitch::400V-branchin-11::a"},
		   {a_point:"PowerSwitch::400V-branchin-11::z",    z_point: "PowerBus::400V-out-11::111"},		   	
		   {a_point:"PowerBus::400V-in-3::114",    z_point: "PowerSwitch::400V-branchin-12::a"},
		   {a_point:"PowerSwitch::400V-branchin-12::z",    z_point: "PowerBus::400V-out-12::111"},		   	
		   {a_point:"PowerBus::400V-in-4::111",    z_point: "PowerSwitch::400V-branchin-13::a"},
		   {a_point:"PowerSwitch::400V-branchin-13::z",    z_point: "PowerBus::400V-out-13::111"},
		   {a_point:"PowerBus::400V-in-4::112",    z_point: "PowerSwitch::400V-branchin-14::a"},
		   {a_point:"PowerSwitch::400V-branchin-14::z",    z_point: "PowerBus::400V-out-14::111"},		   	
		   {a_point:"PowerBus::400V-in-4::113",    z_point: "PowerSwitch::400V-branchin-15::a"},
		   {a_point:"PowerSwitch::400V-branchin-15::z",    z_point: "PowerBus::400V-out-15::111"},		   	
		   {a_point:"PowerBus::400V-in-4::114",    z_point: "PowerSwitch::400V-branchin-16::a"},
		   {a_point:"PowerSwitch::400V-branchin-16::z",    z_point: "PowerBus::400V-out-16::111"},		   	
		   {a_point:"PowerBus::Generator-out-1::111",    z_point: "PowerSwitch::GeneratorKg-branchin-5::a"},
		   {a_point:"PowerSwitch::GeneratorKg-branchin-5::z",    z_point: "PowerBus::GeneratorKg-out-3::111"},		   	
		   {a_point:"PowerBus::Generator-out-1::112",    z_point: "PowerSwitch::GeneratorKg-branchin-6::a"},
		   {a_point:"PowerSwitch::GeneratorKg-branchin-6::z",    z_point: "PowerBus::GeneratorKg-out-4::111"},
		   {a_point:"PowerBus::Generator-out-1::113",    z_point: "PowerSwitch::GeneratorKg-branchin-7::a"},
		   {a_point:"PowerSwitch::GeneratorKg-branchin-7::z",    z_point: "PowerBus::GeneratorKg-out-5::111"},		   	
		   {a_point:"PowerSwitch::GeneratorKg-branchin-7::z",    z_point: "PowerBus::GeneratorKg-out-5::111"},
		   {a_point:"PowerBus::GeneratorKg-in-1::112",    z_point: "PowerSwitch::GeneratorKg-branchEnd-1::a"},
		   {a_point:"PowerSwitch::GeneratorKg-branchEnd-1::z",    z_point: "PowerBus::GeneratorKgEnd-out-1::111"},				
		   {a_point:"PowerBus::GeneratorKg-in-1::113",    z_point: "PowerSwitch::GeneratorKg-branchEnd-2::a"},
		   {a_point:"PowerSwitch::GeneratorKg-branchEnd-2::z",    z_point: "PowerBus::GeneratorKgEnd-out-2::111"},		   	
		   {a_point:"PowerBus::GeneratorKg-in-2::113",    z_point: "PowerSwitch::GeneratorKg-branchEnd-3::a"},
		   {a_point:"PowerSwitch::GeneratorKg-branchEnd-3::z",    z_point: "PowerBus::GeneratorKgEnd-out-3::111"},			
		   {a_point:"PowerBus::GeneratorKg-in-2::114",    z_point: "PowerSwitch::GeneratorKg-branchEnd-4::a"},
		   {a_point:"PowerSwitch::GeneratorKg-branchEnd-4::z",    z_point: "PowerBus::GeneratorKgEnd-out-4::111"},
		  ];


// ------------------------------------------------------------------------------------------
var canvas = new fabric.Canvas('canvas');

function draw_pds(){    
    for(var i=0; i < wiring_points.length; i++){
		var pt = PDS.WiringPoint.add(wiring_points[i]);
		canvas.add(pt.made_graph_obj());
    }

    for(var i=0; i < wiring_text.length; i++){
		var pt = PDS.WiringText.add(wiring_text[i]);
		canvas.add(pt.made_graph_text());
    }
    
    for(var i=0; i < power_switches.length; i++){
		var node = PDS.PowerSwitch.add(power_switches[i]);
		canvas.add(node.made_graph_obj());
    }


    for(var i=0; i< power_buses.length; i++){
		var node = PDS.PowerBus.add(power_buses[i]);
		var pt;
		for(var j=0; j < power_buses[i].points.length; j++){
		    node.add_point(power_buses[i].points[j]);
		}
		canvas.add(node.made_graph_obj());
    }

    for(var i=0; i< power_lines.length; i++){
		var line = new PDS.PowerLine(power_lines[i].a_point, power_lines[i].z_point)
		var obj = line.made_graph_obj();
		canvas.add(obj);
		canvas.sendToBack(obj);
    }

    canvas.on("object:moving", function(e){
	e.target.domain_object && e.target.domain_object.update_lines(e.target.left, e.target.top);
	canvas.renderAll();
    });
    
}

draw_pds();

	