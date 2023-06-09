function info(){
    const info = {
        log: {
            title: "Facts info",
            content: {
                factsinfo: {
                    title: "Facts log",
                    text: "This is a log of things that happen in the game. These are most likely things that you did, but not necessarily."
                },
                mentalizeinfo: {
                    title: "Mentalize",
                    text: "You can mentalize log entries by spending <span class='mind'>Mind</span>. One mentalization costs one <span class='mind'>Mind</span>."
                },
                mentAllinfo: {
                    title: "MentAll",
                    text: "With this button, you can try to mentalize everything that hasn't been mentalized yet... but the result could be different than you expected. This spends <span class='mind'>Mind</span> as normal."
                },
                mentMaxinfo: {
                    title: "MentalizeMax",
                    text: "With this button you will properly mentalize everything that you can. Beware of how much <span class='mind'>Mind</span> you will spend."
                },
                mentAutoinfo: {
                    title: "AutoMentalize",
                    text: "By turning this on, you will automatically MentalizeMax each second, by spending <span class='will'>Will</span>. You will still also spend <span class='mind'>Mind</span>, of course."
                }
            }
        },
        ideas: {
            title: "Ideas info",
            content: {
                pureideasinfo: {
                    title: "Pure ideas",
                    text: "These ideas are pure and cannot be directly manipulated... probably."
                },
                impureideasinfo: {
                    title: "Impure ideas",
                    text: "These ideas are impure. They can be reified, purified an manipulated in other ways."
                },
                reifyinfo: {
                    title: "Reify",
                    text: "You can reify impure ideas by spending <span class='matter'>Matter</span>, at a cost of 1 reification per <span class='matter'>Matter</span>."
                },
                reifyMaxinfo: {
                    title: "ReifyMax",
                    text: "With this button you will reify every impure idea available, granted that you have enough <span class='matter'>Matter</span>."
                },
                reifyAutoinfo: {
                    title: "AutoReify",
                    text: "By turning this on, you will automatically ReifyMax each second, by spending <span class='will'>Will</span>. You will still also spend <span class='matter'>Matter</span>, of course."
                }
            }
                },
        things: {
            title: "Things info",
            content: {
                facts: {
                    text: "Lorem ipsum"
                },
                facts2: {
                    title: "Title",
                    text: "Lorem ipsum"
                },
                facts3: {
                    title: "Another Title",
                    text: "Lorem ipsum"
                }
            }
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
            $.each(info[id].content, function(name, content){
                $(`.infobox.${id}`).append(`
                <div class="infosection ${name}">
                <div class="title">${content.title}</div>
                <div class="text">${content.text}</div>
                </div>
                `)
            })
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

