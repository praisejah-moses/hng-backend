export const root = (req,res)=>{
 res.send('SERVER RUNNING')
}

export const stageOneEndpoint = (req,res)=>{
    try{
        const date = new Date() 
        if(req.query.slack_name && req.query.track){
            res.send(
                {
                    "slack_name":req.query.slack_name,
                    "current_day":date.getDay,
                    "utc_time":date.getUTCHours()+":"+date.getUTCMinutes()+":"+date.getUTCSeconds(),
                    "track":req.query.track,
                    "github_file_url":"",
                    "github_repo_url":"",
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
        res.send({
            'status_code':500
        })
    }
}
