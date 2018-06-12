var listGenerator = {
    dnProjectListView : document.getElementById("projectViewList")
    ,renderEntry : function(title, id, date){
        dnNewElement = document.createElement("a");
        dnNewElement.classList += "list-group-item list-group-item-action";
        dnNewElement.innerHTML = title;
        dnNewElement.setAttribute("id", id);

        return dnNewElement;
    }
    , appendEntry : function (dnEntry) {
        listGenerator.dnProjectListView.appendChild(dnEntry);
    }
    , generateList : function(lsProjects){
        lsProjects.forEach(function(project){
            listGenerator.appendEntry(listGenerator.renderEntry(project.title, project.projectId, project.date));
        });
    }
}

var queryManager = {
    fetchProjectList : function(){
        $.ajax({
            url : "http://wi3.technikum-wien.at:8080/ExampleWebServices/jsonRest/projectoverview"
            , method : "get"
            , datatype : "jsonp"
            , success : function(data){
                console.log(data);
                // parsedData = JSON.parse(data);
                listGenerator.generateList(data);
            }
            , error : function(data){
                console.log(data);
            }
        });
    }
}