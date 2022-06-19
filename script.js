$.getJSON('data.json', (data) => {

    // daily
    $('#txt1').on('click', () => {
        $('#txt1').css('color', 'hsl(236, 100%, 87%)');
        $('#txt2').css('color', 'hsl(235, 45%, 61%)');
        $('#txt3').css('color', 'hsl(235, 45%, 61%)');
        
        $('#tulisan1').html(`
        <div class="desk">
            <p>`+ data[0].title +`</p>
            <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
        </div>
        <div class="center">
        <h1>`+ data[0].timeframes.daily.current +`hrs</h1>
        <p>Last Week - `+ data[0].timeframes.daily.previous +`hrs</p>
        </div>
        `);

        $('#tulisan2').html(`
        <div class="desk">
            <p>`+ data[1].title +`</p>
            <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
            </div>
            <div class="center">
            <h1>`+ data[1].timeframes.daily.current +`hrs</h1>
            <p>Last Week - `+ data[1].timeframes.daily.previous +`hrs</p>
        </div>
            `);

            $('#tulisan3').html(`
            <div class="desk">
            <p>`+ data[2].title +`</p>
            <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
        </div>
        <div class="center">
        <h1>`+ data[2].timeframes.daily.current +`hrs</h1>
        <p>Last Week - `+ data[2].timeframes.daily.previous +`hrs</p>
        </div>
        `);
        
        $('#tulisan4').html(`
        <div class="desk">
            <p>`+ data[3].title +`</p>
            <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
            </div>
            <div class="center">
            <h1>`+ data[3].timeframes.daily.current +`hrs</h1>
            <p>Last Week - `+ data[3].timeframes.daily.previous +`hrs</p>
        </div>
            `);
            
            $('#tulisan5').html(`
            <div class="desk">
            <p>`+ data[4].title +`</p>
            <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
            </div>
            <div class="center">
            <h1>`+ data[4].timeframes.daily.current +`hrs</h1>
            <p>Last Week - `+ data[4].timeframes.daily.previous +`hrs</p>
        </div>
            `);
            
            $('#tulisan6').html(`
            <div class="desk">
            <p>`+ data[5].title +`</p>
            <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
            </div>
            <div class="center">
            <h1>`+ data[5].timeframes.daily.current +`hrs</h1>
            <p>Last Week - `+ data[5].timeframes.daily.previous +`hrs</p>
        </div>
            `);
        });

        // weekly

        $('#txt2').on('click', () => {
            $('#txt2').css('color', 'hsl(236, 100%, 87%)');
            $('#txt1').css('color', 'hsl(235, 45%, 61%)');
            $('#txt3').css('color', 'hsl(235, 45%, 61%)');

            $('#tulisan1').html(`
            <div class="desk">
                <p>`+ data[0].title +`</p>
                <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
            </div>
            <div class="center">
            <h1>`+ data[0].timeframes.weekly.current +`hrs</h1>
            <p>Last Week - `+ data[0].timeframes.weekly.previous +`hrs</p>
        </div>
            `);

            $('#tulisan2').html(`
            <div class="desk">
                <p>`+ data[1].title +`</p>
                <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
                </div>
                <div class="center">
                <h1>`+ data[1].timeframes.weekly.current +`hrs</h1>
                <p>Last Week - `+ data[1].timeframes.weekly.previous +`hrs</p>
        </div>
                `);

            $('#tulisan3').html(`
            <div class="desk">
                <p>`+ data[2].title +`</p>
                <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
            </div>
            <div class="center">
            <h1>`+ data[2].timeframes.weekly.current +`hrs</h1>
            <p>Last Week - `+ data[2].timeframes.weekly.previous +`hrs</p>
        </div>
            `);
            
            $('#tulisan4').html(`
            <div class="desk">
                <p>`+ data[3].title +`</p>
                <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
                </div>
                <div class="center">
                <h1>`+ data[3].timeframes.weekly.current +`hrs</h1>
                <p>Last Week - `+ data[3].timeframes.weekly.previous +`hrs</p>
        </div>
            `);
                
            $('#tulisan5').html(`
            <div class="desk">
                <p>`+ data[4].title +`</p>
                <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
            </div>
            <div class="center">
            <h1>`+ data[4].timeframes.weekly.current +`hrs</h1>
            <p>Last Week - `+ data[4].timeframes.weekly.previous +`hrs</p>
        </div>
            `);
                
            $('#tulisan6').html(`
            <div class="desk">
                <p>`+ data[5].title +`</p>
                <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
            </div>
            <div class="center">
            <h1>`+ data[5].timeframes.weekly.current +`hrs</h1>
            <p>Last Week - `+ data[5].timeframes.weekly.previous +`hrs</p>
        </div>
            `);
        });

        // monthly
        $('#txt3').on('click', () => {
            $('#txt3').css('color', 'hsl(236, 100%, 87%)');
            $('#txt1').css('color', 'hsl(235, 45%, 61%)');
            $('#txt2').css('color', 'hsl(235, 45%, 61%)');
        
            $('#tulisan1').html(`
            <div class="desk">
                <p>`+ data[0].title +`</p>
                <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
            </div>
            <div class="center">
            <h1>`+ data[0].timeframes.monthly.current +`hrs</h1>
            <p>Last Week - `+ data[0].timeframes.monthly.previous +`hrs</p>
            </div>
            `);
    
            $('#tulisan2').html(`
            <div class="desk">
                <p>`+ data[1].title +`</p>
                <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
            </div>
            <div class="center">
            <h1>`+ data[1].timeframes.monthly.current +`hrs</h1>
            <p>Last Week - `+ data[1].timeframes.monthly.previous +`hrs</p>
            </div>
            `);
    
            $('#tulisan3').html(`
            <div class="desk">
                <p>`+ data[2].title +`</p>
                <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
            </div>
            <div class="center">
            <h1>`+ data[2].timeframes.monthly.current +`hrs</h1>
            <p>Last Week - `+ data[2].timeframes.monthly.previous +`hrs</p>
            </div>
            `);
            
            $('#tulisan4').html(`
            <div class="desk">
                <p>`+ data[3].title +`</p>
                <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
            </div>
            <div class="center">
            <h1>`+ data[3].timeframes.monthly.current +`hrs</h1>
            <p>Last Week - `+ data[3].timeframes.monthly.previous +`hrs</p>
            </div>
            `);
                
            $('#tulisan5').html(`
            <div class="desk">
                <p>`+ data[4].title +`</p>
                <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
            </div>
            <div class="center">
            <h1>`+ data[4].timeframes.monthly.current +`hrs</h1>
            <p>Last Week - `+ data[4].timeframes.monthly.previous +`hrs</p>
            </div>
            `);
                
            $('#tulisan6').html(`
            <div class="desk">
                <p>`+ data[5].title +`</p>
                <img src="images/icon-ellipsis.svg" alt="icon-ellipsis">
            </div>
            <div class="center">
            <h1>`+ data[5].timeframes.monthly.current +`hrs</h1>
            <p>Last Week - `+ data[5].timeframes.monthly.previous +`hrs</p>
            </div>
            `);
            
        });
    });