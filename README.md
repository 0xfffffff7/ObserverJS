# ObserverJS
javascript generic object observer.  
  
  
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
    
    
	// Fire!.
    SomeObject.SomeObjectEventFunc();

