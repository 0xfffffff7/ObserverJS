# ObserverJS
javascript generic object observer.  
  
  
# How to  
  
    <script type="text/javascript" src="Observer.js"></script>
    
    // Promotion to Observer
    Observable.toObservable(SomeObject);
    
    SomeObject.subscribe(YourReceiver.YourFunc, 'SomeObjectEventFunc');
    
    SomeObject.SomeObjectEventFunc();

