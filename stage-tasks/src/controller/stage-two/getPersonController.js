export async function getPerson(req, res) {
  try{
    res.status(200).send(req.person)
  }catch(err){
    res.status(500).send(err.message)
  }
}