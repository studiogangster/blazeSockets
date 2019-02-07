var request = require("request");


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const MPLSTATS = mongoose.model('MPLSTATS', { 
    id: String,
    name: String,

    registeredPlayers: String,

    totalSlots: String,

     data : String,
     detailed: Object,
     gameDetails: Object 
     ,  gameId:String,
     timeStamp: Number

});





function  getGame(gameId){

    var options = { method: 'GET',
    url: `https://api.mpl.live/gameplay/${gameId}/tournaments`,
    headers: 
     { Authorization: 'Bearer KQQRQ3{3DmKKEO]kOS3Mk7&9F?@8p3d3Oe:[6%@g.2(HYS+c+2qjdHk^Z)2T[5ZRsFjU$O?:SbheG)hF@[r:w]o?L0R#<#1g@mpRAd:eDC73a[%t-6u3*h0El34wM=(8)=IRdO/H8:[zS=5+:K/6CaChHshtqS{UQ${U$WghxPZ5Jtz:W8F55*6*mSK:4BiEAnG]B2xCy',
       Host: 'api.mpl.live',
       'Cache-Control': 'no-cache',
       'User-Agent': 'mpl-android/14 (RV-14)',
       'Content-Type': 'application/json; charset=utf-8' } };
  
  request(options, function (error, response, body) {
    if (error) {

        console.log("Error ", error)

  }
  
    let gameDetails = JSON.parse(body).payload

    let tournaments = JSON.parse(body).payload.tournaments;

    tournaments.forEach(tournament => {
        // console.log(tournament);
        let id = tournament.id
        let name = tournament.name
        let data = tournament.data

        data.forEach(tournament => {
            // let id = tournament.id
            let name = tournament.name
            let registeredPlayers = tournament.registeredPlayers
            let totalSlots = tournament.totalSlots
            let gameId = tournament.gameId
            // console.log(tournament)
            // console.log("id", id)
            // console.log("name", name)

            // console.log("registeredPlayers", registeredPlayers)
            // console.log("totalSlots",totalSlots)

            // console.log("gameId", gameId)

            const mplStats = {detailed: tournament , gameDetails:gameDetails,  gameId:gameId , id: id, name: name, registeredPlayers: registeredPlayers, totalSlots: totalSlots,gameId:gameId }
            // mplStats.save().then(() => console.log('mplStats' , id));


            MPLSTATS.findOneAndUpdate( {
                "id": id,
                "gameId":gameId,
                "timeStamp": Date.now()
            } ,
            mplStats,
            {upsert :true} , 
            (err,res)=>{
                console.log(err, res)
            }
            )

        });
  

    });
    
  });
}


function getTourmment(tid){
    var request = require("request");

var options = { method: 'GET',
  url: `https://api.mpl.live/gameplay/tournament/${tid}`,
  headers: 
   { Authorization: 'Bearer KQQRQ3{3DmKKEO]kOS3Mk7&9F?@8p3d3Oe:[6%@g.2(HYS+c+2qjdHk^Z)2T[5ZRsFjU$O?:SbheG)hF@[r:w]o?L0R#<#1g@mpRAd:eDC73a[%t-6u3*h0El34wM=(8)=IRdO/H8:[zS=5+:K/6CaChHshtqS{UQ${U$WghxPZ5Jtz:W8F55*6*mSK:4BiEAnG]B2xCy',
     Host: 'api.mpl.live',
     'Cache-Control': 'no-cache',
     'User-Agent': 'mpl-android/12 (RV-12)',
     'Content-Type': 'application/json; charset=utf-8' } };

request(options, function (error, response, body) {
  if (error) {

        console.log("Error ", error)

  }
    console.log(body);
});

}

GAMEIDS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,0]
GAMEIDS.forEach(GAMEID => {

    setInterval( ()=>{
        getGame(GAMEID)
    }  , 5000)
  
});
