class Tilbridge {
    constructor(){
        this.function_id = 0
        this.callBackStorage = {

        }
    }

    MapCallback(call, data, success, failure){
        console.log('MapCallback')
        this.function_id += 1
        this.callBackStorage[this.function_id] = {
            succes: success,
            failure: failure
        }

        setTimeout( ()=>{
            success()
            
        } , 2000 )
        setTimeout( ()=>{
            failure()
        } , 2000 )


    }

    addToHomeScreen(data , succes, failure){
        console.log('addToHomeScreen ')
        this.MapCallback( 'addToHomeScreen', data, succes, failure)
    }
    getUserDetails(data, succes, failure){
        this.MapCallback('getUserDetails',data, succes, failure)
    }
    readSms(data, succes, failure){
        this.MapCallback('readSms', data, succes, failure)
    }
    log(data, succes, failure){
        this.MapCallback('log', data, succes, failure)
    }
    openCamera(data, succes, failure){
        this.MapCallback('openCamera', data, succes, failure)
    }
    readContacts(data, succes, failure){
        this.MapCallback('readContacts', data, succes, failure)
    }
    phoneCall(data, succes, failure){
        this.MapCallback('phoneCall', data, succes, failure)
    }
    sendSms(data, succes, failure){
        this.MapCallback('sendSms', data, succes, failure)
    }
    runInBackground(data, succes, failure){
        this.MapCallback('runInBackground', data, succes, failure)
    }

    readLocation(data, succes, failure){
        this.MapCallback('readLocation', data, succes, failure)
    }
    notifyUser(data, succes, failure){
        this.MapCallback('notifyUser', data, succes, failure)
    }


}
let a = 21321
let tilBridge = new Tilbridge()
tilBridge.addToHomeScreen( {} , ()=>{
    console.log('Success', a )

} , ()=>{
    console.log('Failure', a)
} )
