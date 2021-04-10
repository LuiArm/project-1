/////////////////////////
// Get data from Google Sheets
////////////////////
$.ajax("https://spreadsheets.google.com/feeds/list/1LOxg6MjHUMYNwWfQqaWCeOrgo-bxsUYgGm-BtigFJTg/1/public/full?alt=json")
// .then for when the data arrves
.then((data) => {
    console.log(data)

    // Map over the data, generate a simpler dataset
    const projects = data.feed.entry.map((item) =>{
        return {
            description: item.gsx$description.$t,
            giturl: item.gsx$giturl.$t,
            project: item.gsx$project.$t,
            image: item.gsx$image.$t,
            liveurl: item.gsx$liveurl.$t
        }    
    })

    console.log(projects)
    /////////
    // jQuery to render your projects below 
    ///////












    /////////////////////
})
//.catch
.catch((data) => {
    console.error(error)
})
