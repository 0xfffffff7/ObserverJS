# ObserverJS
javascript generic object observer.  
  
![image](Obsever.png)
  
  
# How to  
  
    <script type="text/javascript" src="Observer.js"></script>

    // SomeObject.
    var SomeObject = {...};

    // YourReceiver.
    var YourReceiver = { 
        CallbackFunc : function(){};
    };

    
    // Promotion to Observer.
    Observable.toObservable(SomeObject);
    

    // subscribe.
    SomeObject.subscribe(YourReceiver.CallbackFunc, 'SomeObjectEventFunc');
    
    
	// Ignition!.
    SomeObject.SomeObjectEventFunc();
  
  
# CallbackFunc Augments
  
  0 -> EventMethod  
  1 -> EventMethod Augments  
  2 -> EventMethod Result  
  
    CallbackFunc: function(){
        console.log(arguments);
    }
  
  console output -> ["eventFuncC", Arguments[2], "RET_STRING"]  

