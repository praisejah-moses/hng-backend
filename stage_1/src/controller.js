export const root = (req,res)=>{
 res.send('SERVER RUNNING')
}

export const stageOneEndpoint = (req,res)=>{
    try{
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const date = new Date() 
        const day = weekday[date.getDay()];
        const utc_time = date.toISOString().split('.')[0]+"Z"

        if(req.query.slack_name && req.query.track){
            res.status(200).json(
                {
                    "slack_name":req.query.slack_name,
                    "current_day":day,
                    "utc_time":utc_time,
                    "track":req.query.track,
                    "github_file_url":"https://github.com/praisejah-moses/hng-backend/blob/main/stage_1/app.js",
                    "github_repo_url":"https://github.com/praisejah-moses/hng-backend/tree/main/stage_1",
                    "staus_code":200,
                })
        }
        else{
            res.send({
                "error":'No query parameters'
            })
        }}
    catch(error){
        console.log(error)
        res.status(500).json({
            'status_code':500
        })
    }
}
