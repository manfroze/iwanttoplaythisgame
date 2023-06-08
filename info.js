function info(){
    const info = {
        log: {
            title: "Facts info"
        },
        ideas: {
            title: "Ideas info"
        },
        things: {
            title: "Things info"
        }   
    }

    var infoStatus = {
        log: "hidden",
        ideas: "hidden",
        things: "hidden"
    }
    buildInfo();
    $.each(infoStatus, function(id, status){
        $(`.${id} .infoButton`).on( "click", function() {
            showInfo(id);
        });
    })


    function buildInfo(){
        $.each(infoStatus, function(id, status){
            $(`#wrapper`).append(`
            <div id="${id}-info" class="infobox box ${id}" style="display:none;">
            <div class="header"><strong>${info[id].title}</strong><div class="right"><div class="infoButton back"></div></div></div>				
            <div class="content"></div>
            </div>
            `);
        })
    }

    function showInfo(id){
        if (infoStatus[id] == "hidden"){
            infoStatus[id] = "shown";
            $(`#wrapper .${id}.main`).hide();
            $(`#wrapper .${id}.infobox`).show();
                } else if
            (infoStatus[id] == "shown"){
            infoStatus[id] = "hidden";
            $(`#wrapper .${id}.infobox`).hide();
            $(`#wrapper .${id}.main`).show();
    }
}
}

