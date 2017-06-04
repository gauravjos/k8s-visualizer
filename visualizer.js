
var loadData = function() {


	           var req1 = $.getJSON("/api/v1/nodes", function( data ) {

																		nodes = data;
																		//console.log("loadData(): Services");
																		//console.log(nodes);
																		$.each(data.items, function(key, val) {
																      val.type = 'node';
																			console.log(val.metadata.name)
																      //console.log("service ID = " + val.metadata.name)
																    });
		});
		var req2 = $.getJSON("/api/v1/namespaces", function( data ) {

													 namespaces = data;
													 //console.log("loadData(): Services");
													 //console.log(nodes);
													 $.each(data.items, function(key, val) {
														 val.type = 'namespaces';
														var select = document.getElementById("namespaces");
														 ns = val.metadata.name
														 var el = document.createElement("option");
    										 			el.textContent = ns;
    													el.value = ns;
    													select.appendChild(el);
															select.value= select.options[0].value;
														 //console.log("service ID = " + val.metadata.name)
													 });
});

		var req3 = $.getJSON("/api/v1/namespaces/default/services" , function( data ) {

																 namespaces = data;
																 //console.log("loadData(): Services");
																 //console.log(nodes);
																 $.each(data.items, function(key, val) {
																	 val.type = 'services';
																	 var select = document.getElementById("services");
																	 svc = val.metadata.name
																	 var el = document.createElement("option");
																		el.textContent = svc;
																		el.value = svc;
																		select.appendChild(el);
																		select.value= select.options[0].value;
																	 //console.log("service ID = " + val.metadata.name)
																 });
					});
}
loadData();
