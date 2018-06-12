var projectsView = {
    dnProjectListView : null
    , initProjectsView : function(){
        projectsView.dnProjectListView = document.getElementById("projectViewList");
    }
    ,renderEntry : function(title, id, date){
        dnNewElement = document.createElement("a");
        dnNewElement.classList += "list-group-item list-group-item-action";
        dnNewElement.innerHTML = title;
        dnNewElement.setAttribute("id", id);

        return dnNewElement;
    }
    , appendEntry : function (dnEntry) {
        projectsView.dnProjectListView.appendChild(dnEntry);
    }
    , generateList : function(lsProjects){
        lsProjects.forEach(function(project){
            projectsView.appendEntry(projectsView.renderEntry(project.title, project.projectId, project.date));
        });
    }
}

var queryManager = {
    fetchProjectList : function(){
        $.ajax({
            url : "http://wi3.technikum-wien.at:8080/ExampleWebServices/jsonRest/projectoverview"
            , method : "get"
            , dataType : "jsonp"
            , cache : false
            , success : function(data){
                console.log(data);
                if(!projectsView.dnProjectListView){
                    projectsView.initProjectsView();
                }
                projectsView.generateList(data);
            }
            , error : function(data){
                console.log(data);
            }
        });
    }
    , fetchDetailView : function(id){
        $.ajax({
            url : ("http://wi3.technikum-wien.at:8080/ExampleWebServices/jsonRest/projectdetails?projectId=" + id)
            , method : "get"
            , dataType : "jsonp"
            , cache : false
            , success : function(data){
                console.log(data);
                // parsedData = JSON.parse(data);
                detailsView.displayData(data);
            }
            , error : function(data){
                console.log(data);
            }
        });
    }
    // , pushNewProject : function(){
    //     $.ajax({
    //         url : ("http://wi3.technikum-wien.at:8080/ExampleWebServices/jsonRest/projectdetails?projectId=" + id)
    //         , method : "get"
    //         , datatype : "jsonp"
    //         , success : function(data){
    //             console.log(data);
    //             // parsedData = JSON.parse(data);
    //             // listGenerator.generateList(data);
    //         }
    //         , error : function(data){
    //             console.log(data);
    //         }
    //     });
    // }
}

var detailsView = {
    dnBezeichnung : null
    , dnAuftraggeber : null
    , dnStrasse : null
    , dnPLZ : null
    , dnOrt : null
    , dnTelefon : null
    , dnEmail : null
    , dnGebaeudetyp : null
    , dnStrasseAllgemein : null
    , dnPLZAllgemein : null
    , dnOrtAllgemein : null
    , initDetailsView : function(){
        detailsView.dnBezeichnung = document.getElementById("input-bezeichnung");
        detailsView.dnAuftraggeber = document.getElementById("input-auftraggeber");
        detailsView.dnStrasse = document.getElementById("input-strasse");
        detailsView.dnPLZ = document.getElementById("input-PLZ");
        detailsView.dnOrt = document.getElementById("input-Ort");
        detailsView.dnTelefon = document.getElementById("input-Telefon");
        detailsView.dnEmail = document.getElementById("input-Email");
        detailsView.dnGebaeudetyp = document.getElementById("input-Gebaeudetyp-Allgemein");
        detailsView.dnStrasseAllgemein = document.getElementById("input-Strasse-Allgemein");
        detailsView.dnPLZAllgemein = document.getElementById("input-PLZ-Allgemein");
        detailsView.dnOrtAllgemein = document.getElementById("input-Ort-Allgemein");
    }
    , displayData : function(dataObject){
       
    }
}

var viewManager = {
    dnProjectOverview : null
    , dnDetailsView : null
    , initViewManager : function(){
        viewManager.dnProjectOverview = document.getElementById("projectView");
        viewManager.dnDetailsView = document.getElementById("detailView");
    }
    , showProjectOverview : function(){
        viewManager.dnProjectOverview.classList.remove("invisible");
        viewManager.dnDetailsView.classList.add("invisible");  
    }
    , showDetailsView : function(id){
        viewManager.dnProjectOverview.add("invisible");
        viewManager.dnDetailsView.remove("invisible");

        if (id){
            queryManager.fetchDetailView(id);
        } else {

        }
    }
}