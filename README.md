# ObserverJS
javascript generic object observer.  
  
![image](Obsever.png)
  
  
# How to  
  
    <script type="text/javascript" src="Observer.js"></script>

    // SomeObject.
    var Object = {...};

    // YourReceiver.
    var YourReceiver = {...};

    
    // Promotion to Observer.
    Observable.toObservable(SomeObject);
    

    // subscribe.
    SomeObject.subscribe(YourReceiver.YourFunc, 'SomeObjectEventFunc');
    
    
	// Ignition!.
    SomeObject.SomeObjectEventFunc();

